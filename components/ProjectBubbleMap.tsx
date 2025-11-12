'use client'

import { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, Github } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Project } from '@/data/projects'

const ForceGraph2D = dynamic(() => import('react-force-graph-2d'), {
  ssr: false,
})

interface ProjectBubbleMapProps {
  projects: Project[]
}

const categoryColors: Record<string, string> = {
  Backend: '#3B7A57',
  'Smart Contracts': '#8B5CF6',
  Frontend: '#06B6D4',
  Infra: '#F59E0B',
  Bots: '#EF4444',
  'Dev Tools': '#10B981',
}

// Generate unique gradient colors for EACH bubble (not just by category)
const getUniqueGradientColors = (category: string, projectId: string, index: number): { start: string; end: string; border: string; accent: string } => {
  const baseColor = categoryColors[category] || '#3B7A57'
  
  // Convert hex to RGB
  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : { r: 59, g: 122, b: 87 }
  }
  
  const rgb = hexToRgb(baseColor)
  
  // Create unique variations based on project ID and index
  // This ensures each bubble has a different color even within the same category
  const idHash = projectId.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
  const variation = (idHash + index * 17) % 60 // 0-60 degree variation
  
  // Rotate hue slightly for each bubble
  const hueShift = variation - 30 // -30 to +30 degrees
  
  // Convert RGB to HSL for hue manipulation
  const r = rgb.r / 255
  const g = rgb.g / 255
  const b = rgb.b / 255
  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  let h = 0
  let s = 0
  const l = (max + min) / 2
  
  if (max !== min) {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break
      case g: h = ((b - r) / d + 2) / 6; break
      case b: h = ((r - g) / d + 4) / 6; break
    }
  }
  
  // Apply hue shift
  h = (h + hueShift / 360) % 1
  if (h < 0) h += 1
  
  // Convert back to RGB with variations
  const hslToRgb = (h: number, s: number, l: number) => {
    let r, g, b
    if (s === 0) {
      r = g = b = l
    } else {
      const hue2rgb = (p: number, q: number, t: number) => {
        if (t < 0) t += 1
        if (t > 1) t -= 1
        if (t < 1/6) return p + (q - p) * 6 * t
        if (t < 1/2) return q
        if (t < 2/3) return p + (q - p) * (2/3 - t) * 6
        return p
      }
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s
      const p = 2 * l - q
      r = hue2rgb(p, q, h + 1/3)
      g = hue2rgb(p, q, h)
      b = hue2rgb(p, q, h - 1/3)
    }
    return {
      r: Math.round(r * 255),
      g: Math.round(g * 255),
      b: Math.round(b * 255)
    }
  }
  
  const baseRgb = hslToRgb(h, s, l)
  
  // Create lighter, darker, and accent variations
  const lightnessVariation = (index % 3) * 15 // 0, 15, or 30
  const saturationVariation = ((index % 2) * 0.1) // 0 or 0.1
  
  const lighter = {
    r: Math.min(255, baseRgb.r + 50 + lightnessVariation),
    g: Math.min(255, baseRgb.g + 50 + lightnessVariation),
    b: Math.min(255, baseRgb.b + 50 + lightnessVariation)
  }
  
  const darker = {
    r: Math.max(0, baseRgb.r - 40 - lightnessVariation),
    g: Math.max(0, baseRgb.g - 40 - lightnessVariation),
    b: Math.max(0, baseRgb.b - 40 - lightnessVariation)
  }
  
  const accent = {
    r: Math.min(255, Math.max(0, baseRgb.r + 30)),
    g: Math.min(255, Math.max(0, baseRgb.g + 30)),
    b: Math.min(255, Math.max(0, baseRgb.b + 30))
  }
  
  return {
    start: `rgba(${lighter.r}, ${lighter.g}, ${lighter.b}, 0.88)`,
    end: `rgba(${baseRgb.r}, ${baseRgb.g}, ${baseRgb.b}, 0.92)`,
    border: `rgba(${darker.r}, ${darker.g}, ${darker.b}, 0.65)`,
    accent: `rgba(${accent.r}, ${accent.g}, ${accent.b}, 0.5)`
  }
}

export default function ProjectBubbleMap({ projects }: ProjectBubbleMapProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [graphData, setGraphData] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [draggedNode, setDraggedNode] = useState<any>(null)
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 })
  const { theme } = useTheme()
  const containerRef = useRef<HTMLDivElement>(null)
  const graphRef = useRef<any>(null)

  useEffect(() => {
    // Create graph data structure with much larger sizes and better initial spacing
    const nodes = projects.map((project, index) => {
      // Calculate size based on content
      const contentLength = project.name.length + project.description.length + project.tech.join('').length
      let baseSize = project.featured ? 100 : 85
      
      // Adjust size based on content length
      if (contentLength > 100) baseSize += 15
      if (contentLength > 150) baseSize += 10
      if (contentLength > 200) baseSize += 10
      
      // Calculate initial position in a grid-like pattern with good spacing
      // This ensures bubbles start far apart and don't overlap initially
      // Calculate spacing based on container size
      const containerWidth = containerRef.current?.clientWidth || 1200
      const containerHeight = containerRef.current?.clientHeight || 800
      const padding = 150 // Large padding from edges
      const availableWidth = containerWidth - padding * 2
      const availableHeight = containerHeight - padding * 2
      
      // Calculate optimal spacing to fit all bubbles
      const cols = Math.ceil(Math.sqrt(projects.length))
      const rows = Math.ceil(projects.length / cols)
      const spacingX = availableWidth / Math.max(cols - 1, 1)
      const spacingY = availableHeight / Math.max(rows - 1, 1)
      const spacing = Math.min(spacingX, spacingY, 450) // Cap at 450px max
      
      const row = Math.floor(index / cols)
      const col = index % cols
      const centerX = containerWidth / 2
      const centerY = containerHeight / 2
      const offsetX = (col - (cols - 1) / 2) * spacing
      const offsetY = (row - (rows - 1) / 2) * spacing
      
      return {
        id: project.id,
        name: project.name,
        category: project.category,
        project: project,
        val: baseSize,
        index: index, // Store index for unique color generation
        fx: undefined, // Allow free movement
        fy: undefined,
        x: centerX + offsetX, // No randomness - precise grid positioning
        y: centerY + offsetY,
        vx: 0,
        vy: 0,
      }
    })

    // Remove links completely to prevent any pulling together
    // This ensures bubbles maintain maximum spacing
    const links: any[] = []

    setGraphData({ nodes, links })
    setIsLoading(false)
  }, [projects])

  // Collision detection and auto-move nearby bubbles
  const handleNodeDrag = (node: any) => {
    if (!graphRef.current || !graphData) return
    
    const allNodes = graphData.nodes
    const draggedRadius = node.val || 85
    
    allNodes.forEach((otherNode: any) => {
      if (otherNode.id === node.id) return
      
      const dx = (node.x || 0) - (otherNode.x || 0)
      const dy = (node.y || 0) - (otherNode.y || 0)
      const distance = Math.sqrt(dx * dx + dy * dy)
      const otherRadius = otherNode.val || 85
      const requiredDistance = draggedRadius + otherRadius + 60 // Much larger gap to prevent overlap (matches collision radius)
      
      if (distance < requiredDistance && distance > 0) {
        // Calculate push direction (away from dragged node)
        const angle = Math.atan2(dy, dx)
        const pushDistance = requiredDistance - distance + 10
        
        // Move the other node away
        const newX = (otherNode.x || 0) - Math.cos(angle) * pushDistance
        const newY = (otherNode.y || 0) - Math.sin(angle) * pushDistance
        
        // Update node position and fix it temporarily
        otherNode.x = newX
        otherNode.y = newY
        otherNode.fx = newX
        otherNode.fy = newY
        otherNode.vx = 0
        otherNode.vy = 0
      }
    })
    
    // Update graph
    graphRef.current.refresh()
  }

  // Get container dimensions - must be before any conditional returns
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight
        })
      }
    }
    
    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  if (!graphData || isLoading) {
    return (
      <div className="w-full h-[600px] flex items-center justify-center">
        <div className="text-gray-600 dark:text-gray-400">Loading bubble map...</div>
      </div>
    )
  }

  return (
    <div ref={containerRef} className="relative w-full h-[700px] md:h-[900px] overflow-hidden">
      {/* Clear boundary container */}
      <div className="absolute inset-4 border-2 border-dill-green-primary/40 dark:border-dill-green-primary/30 rounded-xl bg-gradient-to-br from-dill-green-light/40 to-white/40 dark:from-black/30 dark:to-dill-green-dark/30 backdrop-blur-sm shadow-inner">
        <div className="absolute top-2 left-4">
          <span className="text-xs text-dill-green-primary dark:text-dill-green-light font-semibold bg-white/80 dark:bg-dill-green-dark/80 px-2 py-1 rounded">Bubble Map Area</span>
        </div>
      </div>
      
      <ForceGraph2D
        key={`${theme}-${dimensions.width}-${dimensions.height}`}
        ref={graphRef}
        graphData={graphData}
        width={dimensions.width}
        height={dimensions.height}
        nodeLabel={(node: any) => node.name}
        nodeColor={(node: any) => {
          const category = Array.isArray(node.category) ? node.category[0] : node.category
          return categoryColors[category] || '#3B7A57'
        }}
        nodeVal={(node: any) => node.val}
        linkColor={() => 'rgba(59, 122, 87, 0)'}
        linkWidth={0}
        linkDirectionalArrowLength={0}
        onNodeClick={(node: any) => {
          setSelectedProject(node.project)
        }}
        onNodeDrag={(node: any) => {
          setDraggedNode(node)
          // Fix dragged node position
          node.fx = node.x
          node.fy = node.y
          handleNodeDrag(node)
        }}
        onNodeDragEnd={(node: any) => {
          // Release fixed positions after drag ends
          if (node) {
            node.fx = undefined
            node.fy = undefined
          }
          
          // Release all other nodes after a short delay
          setTimeout(() => {
            if (graphData) {
              graphData.nodes.forEach((n: any) => {
                if (n.id !== node?.id) {
                  n.fx = undefined
                  n.fy = undefined
                }
              })
              graphRef.current?.refresh()
            }
            setDraggedNode(null)
          }, 300)
        }}
        nodeCanvasObjectMode={() => 'replace'}
        nodeCanvasObject={(node: any, ctx: CanvasRenderingContext2D, globalScale: number) => {
          const radius = node.val || 85
          const x = node.x || 0
          const y = node.y || 0
          const project = node.project as Project
          const index = node.index || 0
          // Generate unique gradient colors for THIS specific bubble
          const category = Array.isArray(node.category) ? node.category[0] : node.category
          const gradientColors = getUniqueGradientColors(category, node.id, index)
          
          // Create gradient for bubble
          const gradient = ctx.createRadialGradient(
            x - radius * 0.3,
            y - radius * 0.3,
            radius * 0.1,
            x,
            y,
            radius
          )
          gradient.addColorStop(0, gradientColors.start)
          gradient.addColorStop(1, gradientColors.end)
          
          // Draw bubble with radial gradient (like a real bubble)
          ctx.beginPath()
          ctx.arc(x, y, radius, 0, 2 * Math.PI, false)
          ctx.fillStyle = gradient
          ctx.fill()
          
          // Add highlight effect (like a real bubble)
          const highlightGradient = ctx.createRadialGradient(
            x - radius * 0.3,
            y - radius * 0.3,
            radius * 0.1,
            x - radius * 0.3,
            y - radius * 0.3,
            radius * 0.5
          )
          highlightGradient.addColorStop(0, 'rgba(255, 255, 255, 0.4)')
          highlightGradient.addColorStop(1, 'rgba(255, 255, 255, 0)')
          ctx.fillStyle = highlightGradient
          ctx.fill()
          
          // Draw border with unique gradient
          const borderGradient = ctx.createLinearGradient(
            x - radius,
            y - radius,
            x + radius,
            y + radius
          )
          borderGradient.addColorStop(0, gradientColors.border)
          borderGradient.addColorStop(0.5, gradientColors.accent)
          borderGradient.addColorStop(1, gradientColors.border)
          
          ctx.strokeStyle = borderGradient
          ctx.lineWidth = 3.5
          ctx.stroke()
          
          // Add subtle outer glow
          ctx.shadowColor = gradientColors.end
          ctx.shadowBlur = 8
          ctx.stroke()
          ctx.shadowBlur = 0
          
          // Draw content inside bubble
          const padding = 12
          const maxWidth = (radius - padding) * 1.8
          const textColor = theme === 'dark' ? '#FFFFFF' : '#1F2D27'
          
          // Title
          ctx.font = `bold ${Math.max(12, Math.min(16, radius * 0.18))}px Inter`
          ctx.textAlign = 'center'
          ctx.textBaseline = 'top'
          ctx.fillStyle = textColor
          
          const titleLines: string[] = []
          const titleWords = project.name.split(' ')
          let currentTitleLine = titleWords[0]
          
          for (let i = 1; i < titleWords.length; i++) {
            const testLine = currentTitleLine + ' ' + titleWords[i]
            const metrics = ctx.measureText(testLine)
            if (metrics.width > maxWidth) {
              titleLines.push(currentTitleLine)
              currentTitleLine = titleWords[i]
            } else {
              currentTitleLine = testLine
            }
          }
          titleLines.push(currentTitleLine)
          
          // Description (purpose)
          ctx.font = `${Math.max(9, Math.min(11, radius * 0.12))}px Inter`
          const descLines: string[] = []
          const descWords = project.description.split(' ')
          let currentDescLine = descWords[0]
          
          for (let i = 1; i < descWords.length; i++) {
            const testLine = currentDescLine + ' ' + descWords[i]
            const metrics = ctx.measureText(testLine)
            if (metrics.width > maxWidth) {
              descLines.push(currentDescLine)
              currentDescLine = descWords[i]
            } else {
              currentDescLine = testLine
            }
          }
          descLines.push(currentDescLine)
          
          // Tech stack (show first 3-4)
          const techToShow = project.tech.slice(0, 4)
          const techText = techToShow.join(' • ')
          ctx.font = `${Math.max(8, Math.min(10, radius * 0.11))}px Inter`
          const techLines: string[] = []
          const techWords = techText.split(' • ')
          let currentTechLine = techWords[0]
          
          for (let i = 1; i < techWords.length; i++) {
            const testLine = currentTechLine + ' • ' + techWords[i]
            const metrics = ctx.measureText(testLine)
            if (metrics.width > maxWidth) {
              techLines.push(currentTechLine)
              currentTechLine = techWords[i]
            } else {
              currentTechLine = testLine
            }
          }
          techLines.push(currentTechLine)
          
          // Calculate total height
          const titleFontSize = Math.max(12, Math.min(16, radius * 0.18))
          const descFontSize = Math.max(9, Math.min(11, radius * 0.12))
          const techFontSize = Math.max(8, Math.min(10, radius * 0.11))
          
          const titleHeight = titleLines.length * titleFontSize * 1.3
          const descHeight = descLines.length * descFontSize * 1.2
          const techHeight = techLines.length * techFontSize * 1.2
          const spacing = 8
          const totalHeight = titleHeight + spacing + descHeight + spacing + techHeight
          
          let currentY = y - totalHeight / 2
          
          // Draw title
          ctx.font = `bold ${titleFontSize}px Inter`
          ctx.fillStyle = textColor
          titleLines.forEach((line, i) => {
            ctx.fillText(line, x, currentY + i * titleFontSize * 1.3)
          })
          currentY += titleHeight + spacing
          
          // Draw description
          ctx.font = `${descFontSize}px Inter`
          ctx.fillStyle = theme === 'dark' ? 'rgba(255, 255, 255, 0.85)' : 'rgba(31, 45, 39, 0.8)'
          descLines.forEach((line, i) => {
            ctx.fillText(line, x, currentY + i * descFontSize * 1.2)
          })
          currentY += descHeight + spacing
          
          // Draw tech stack
          ctx.font = `${techFontSize}px Inter`
          ctx.fillStyle = theme === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(31, 45, 39, 0.7)'
          techLines.forEach((line, i) => {
            ctx.fillText(line, x, currentY + i * techFontSize * 1.2)
          })
        }}
        {...({
          d3Force: "charge",
          d3ForceStrength: (node: any) => {
            // Very strong repulsion to prevent overlapping
            const radius = node.val || 85
            return -radius * 800 // Even stronger repulsion
          },
          d3ForceCollide: (node: any) => {
            // Collision detection radius with much more padding
            const radius = node.val || 85
            return radius + 60 // Much larger padding - ensures no overlap
          },
          d3ForceX: (node: any) => {
            // Keep nodes within bounds - prevent going outside container
            const width = dimensions.width
            const padding = 150
            const radius = node.val || 85
            const minX = padding + radius
            const maxX = width - padding - radius
            const x = node.x || width / 2
            
            if (x < minX) {
              return (minX - x) * 0.5
            } else if (x > maxX) {
              return (maxX - x) * 0.5
            }
            return 0
          },
          d3ForceY: (node: any) => {
            // Keep nodes within bounds - prevent going outside container
            const height = dimensions.height
            const padding = 150
            const radius = node.val || 85
            const minY = padding + radius
            const maxY = height - padding - radius
            const y = node.y || height / 2
            
            if (y < minY) {
              return (minY - y) * 0.5
            } else if (y > maxY) {
              return (maxY - y) * 0.5
            }
            return 0
          },
          d3ForceCenter: (node: any) => {
            // Very weak center force to allow maximum spread
            return 0.01
          },
          cooldownTicks: 1000,
          onEngineStop: () => {
            // Force graph has stabilized
          }
        } as any)}
      />

      {/* Category Legend */}
      <div className="absolute top-4 left-4 bg-white dark:bg-dill-green-dark rounded-lg p-4 shadow-lg z-10">
        <h3 className="text-sm font-semibold mb-2 text-dill-green-dark dark:text-dill-green-light">
          Categories
        </h3>
        <div className="space-y-1">
          {Object.entries(categoryColors).map(([category, color]) => (
            <div key={category} className="flex items-center space-x-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: color }}
              />
              <span className="text-xs text-gray-700 dark:text-gray-300">{category}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Instructions */}
      <div className="absolute bottom-4 left-4 bg-white dark:bg-dill-green-dark rounded-lg p-3 shadow-lg z-10">
        <p className="text-xs text-gray-600 dark:text-gray-400">
          💡 Drag bubbles to move them • Click to view details
        </p>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-dill-green-dark rounded-2xl p-6 md:p-8 max-w-2xl w-full shadow-2xl glow-green"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-display font-bold text-dill-green-primary dark:text-dill-green-light mb-2">
                    {selectedProject.name}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {(Array.isArray(selectedProject.category) ? selectedProject.category : [selectedProject.category]).map((cat) => (
                      <span
                        key={cat}
                        className="inline-block px-3 py-1 rounded-full text-sm font-medium text-white"
                        style={{ backgroundColor: categoryColors[cat] || '#3B7A57' }}
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-black/50 rounded-lg transition-colors glow-green-hover"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-6">
                {selectedProject.description}
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-dill-green-dark dark:text-dill-green-light mb-2">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-dill-green-light dark:bg-black/50 text-dill-green-primary dark:text-dill-green-light rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4">
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-dill-green-primary text-white rounded-lg hover:bg-dill-green-hover transition-colors glow-green-hover"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                )}
                {selectedProject.demo && (
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-white dark:bg-black/50 text-dill-green-primary dark:text-dill-green-light border-2 border-dill-green-primary rounded-lg hover:bg-dill-green-light dark:hover:bg-black transition-colors glow-green-hover"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Demo</span>
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

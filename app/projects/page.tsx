'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '@/data/projects'
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

const categories = ['All', 'Backend', 'Smart Contracts',  'Infra', 'NFT' , 'Games', 'Frontend', 'Bots', 'AI'] as const


export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [imageIndices, setImageIndices] = useState<Record<string, number>>({})

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => {
        const projectCategories = Array.isArray(p.category) ? p.category : [p.category]
        return projectCategories.includes(selectedCategory as any)
      })

  return (
    <div className="min-h-screen bg-dill-green-light dark:bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold text-dill-green-dark dark:text-dill-green-light mb-6">
            Projects
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Explore {projects.length}+ Web3 backend projects: blockchain APIs, smart contract backends, DeFi protocols,
            and decentralized infrastructure built with Go and TypeScript
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-lg font-medium transition-all glow-green-hover ${
                selectedCategory === category
                  ? 'bg-dill-green-primary text-white shadow-lg'
                  : 'bg-white dark:bg-dill-green-dark text-gray-700 dark:text-gray-300 hover:bg-dill-green-light dark:hover:bg-black/50'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.02, y: -3 }}
                className="bg-white dark:bg-dill-green-dark rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                {/* Project Image Slider */}
                <div className="relative w-full h-48 overflow-hidden group">
                  {(project.images && project.images.length > 0) ? (
                    <>
                      <AnimatePresence mode="wait" initial={false}>
                        <motion.div
                          key={imageIndices[project.id] || 0}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="relative w-full h-full"
                        >
                          <Image
                            src={project.images[imageIndices[project.id] || 0]}
                            alt={`${project.name} - Image ${(imageIndices[project.id] || 0) + 1}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </motion.div>
                      </AnimatePresence>

                      {/* Navigation Buttons */}
                      {project.images.length > 1 && (
                        <>
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              if (!project.images) return
                              const currentIndex = imageIndices[project.id] || 0
                              setImageIndices({
                                ...imageIndices,
                                [project.id]: currentIndex === 0 ? project.images.length - 1 : currentIndex - 1,
                              })
                            }}
                            className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 bg-black/50 hover:bg-black/70 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10"
                            aria-label="Previous image"
                          >
                            <ChevronLeft className="w-4 h-4" />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              if (!project.images) return
                              const currentIndex = imageIndices[project.id] || 0
                              setImageIndices({
                                ...imageIndices,
                                [project.id]: (currentIndex + 1) % project.images.length,
                              })
                            }}
                            className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-black/50 hover:bg-black/70 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10"
                            aria-label="Next image"
                          >
                            <ChevronRight className="w-4 h-4" />
                          </button>

                          {/* Dots Indicator */}
                          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                            {project.images.map((_, index) => (
                              <button
                                key={index}
                                onClick={(e) => {
                                  e.stopPropagation()
                                  setImageIndices({
                                    ...imageIndices,
                                    [project.id]: index,
                                  })
                                }}
                                className={`w-1.5 h-1.5 rounded-full transition-all ${
                                  (imageIndices[project.id] || 0) === index
                                    ? 'bg-white w-6'
                                    : 'bg-white/50 hover:bg-white/70'
                                }`}
                                aria-label={`Go to image ${index + 1}`}
                              />
                            ))}
                          </div>

                          {/* Image Counter */}
                          <div className="absolute top-2 right-2 px-2 py-1 bg-black/50 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity z-10">
                            {(imageIndices[project.id] || 0) + 1} / {project.images.length}
                          </div>
                        </>
                      )}
                    </>
                  ) : project.image ? (
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-200 via-gray-300 to-gray-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 animate-pulse">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                    </div>
                  )}
                </div>
                
                <div className="p-5">
                  <div className="flex items-start justify-between mb-3 gap-2">
                    <h3 className="text-lg font-semibold text-dill-green-primary dark:text-dill-green-light flex-1">
                      {project.name}
                    </h3>
                    <div className="flex flex-wrap gap-1 justify-end">
                      {(Array.isArray(project.category) ? project.category : [project.category]).map((cat, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-dill-green-light dark:bg-black/50 text-dill-green-primary dark:text-dill-green-light rounded text-xs whitespace-nowrap"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tech.slice(0, 2).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 bg-dill-green-light dark:bg-black/50 text-dill-green-primary dark:text-dill-green-light rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 2 && (
                      <span className="px-2 py-0.5 text-gray-500 dark:text-gray-500 text-xs">
                        +{project.tech.length - 2}
                      </span>
                    )}
                  </div>

                  {/* Project Links */}
                  {(project.demo || project.github) && (
                    <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-200 dark:border-gray-700">
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center space-x-1.5 px-3 py-1.5 bg-dill-green-primary text-white rounded-lg hover:bg-dill-green-hover transition-colors glow-green-hover text-sm font-medium"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Live</span>
                        </a>
                      )}
                      {project.github && !project.demo && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center space-x-1.5 px-3 py-1.5 bg-dill-green-primary text-white rounded-lg hover:bg-dill-green-hover transition-colors glow-green-hover text-sm font-medium"
                        >
                          <Github className="w-4 h-4" />
                          <span>GitHub</span>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}


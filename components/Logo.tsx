'use client'

import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

interface LogoProps {
  className?: string
  size?: number
}

export default function Logo({ className = '', size = 32 }: LogoProps) {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
  const isDark = mounted && theme === 'dark'
  const gradientId = isDark ? 'logoGradientDark' : 'logoGradient'

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B7A57" />
          <stop offset="100%" stopColor="#2D5A42" />
        </linearGradient>
        <linearGradient id="logoGradientDark" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E8F3EC" />
          <stop offset="100%" stopColor="#B8D4C4" />
        </linearGradient>
      </defs>
      
      {/* Outer ring - represents blockchain/network */}
      <circle
        cx="32"
        cy="32"
        r="30"
        stroke="currentColor"
        strokeWidth="2"
        className="text-dill-green-primary dark:text-dill-green-light"
        fill="none"
        opacity="0.3"
      />
      
      {/* Inner geometric J shape */}
      <path
        d="M 28 18 L 28 40 Q 28 48 36 48 L 40 48"
        stroke={`url(#${gradientId})`}
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* Decorative nodes - representing blockchain blocks */}
      <circle cx="28" cy="18" r="2.5" fill={`url(#${gradientId})`} />
      <circle cx="28" cy="40" r="2.5" fill={`url(#${gradientId})`} />
      <circle cx="36" cy="48" r="2.5" fill={`url(#${gradientId})`} />
      
      {/* Connecting lines - representing network connections */}
      <path
        d="M 44 24 L 50 20 M 44 32 L 50 32 M 44 40 L 50 44"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-dill-green-primary dark:text-dill-green-light"
        opacity="0.4"
        strokeLinecap="round"
      />
    </motion.svg>
  )
}


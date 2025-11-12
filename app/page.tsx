'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Code, Database, Zap } from 'lucide-react'
import Link from 'next/link'

const techStack = [
  { name: 'Go', icon: Code },
  { name: 'TypeScript', icon: Code },
  { name: 'Rust', icon: Code },
  { name: 'Solidity', icon: Code },
  { name: 'Solana Web3', icon: Database },
  { name: 'Ethers.js', icon: Code },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dill-green-light via-white to-dill-green-light/50 dark:from-dill-green-dark dark:via-black dark:to-dill-green-dark/50">
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-dill-green-primary/10 dark:bg-dill-green-primary/5"
              style={{
                width: Math.random() * 200 + 50,
                height: Math.random() * 200 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            />
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-display font-bold text-dill-green-dark dark:text-dill-green-light mb-6"
          >
            Hi, I'm{' '}
            <span className="text-dill-green-primary dark:text-dill-green-light">
              Kairos
            </span>
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300 mb-4"
          >
            Senior Web3 Backend Developer
          </motion.p>
          
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12"
          >
            8+ years architecting production-grade Web3 backend systems with Go, TypeScript, and Rust. Built 13+ production
            projects including DeFi platforms, NFT marketplaces, trading terminals, MEV bundlers, and blockchain infrastructure
            across Ethereum, Solana, Bitcoin, and multiple EVM chains.
          </motion.p>

          {/* Tech Stack */}
          <motion.div
            variants={itemVariants}
            className="mb-12"
          >
            <h2 className="text-xl font-semibold text-dill-green-dark dark:text-dill-green-light mb-6">
              Tech Stack
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {techStack.map((tech) => {
                const Icon = tech.icon
                return (
                  <motion.div
                    key={tech.name}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="flex items-center space-x-2 px-6 py-3 bg-white dark:bg-dill-green-dark rounded-lg shadow-md glow-green-hover"
                  >
                    <Icon className="w-5 h-5 text-dill-green-primary dark:text-dill-green-light" />
                    <span className="font-medium text-dill-green-dark dark:text-dill-green-light">
                      {tech.name}
                    </span>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-dill-green-primary text-white rounded-lg font-semibold shadow-lg glow-green-hover"
              >
                View Projects
              </motion.button>
            </Link>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white dark:bg-dill-green-dark text-dill-green-primary dark:text-dill-green-light border-2 border-dill-green-primary rounded-lg font-semibold shadow-lg glow-green-hover"
              >
                Get In Touch
              </motion.button>
            </Link>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="mt-16"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="flex flex-col items-center text-gray-600 dark:text-gray-400"
            >
              <span className="text-sm mb-2">Scroll to explore</span>
              <ArrowDown className="w-6 h-6" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Crypto Inheritance Project Highlight */}
      <div className="relative z-10 bg-white dark:bg-dill-green-dark border-t border-dill-green-light dark:border-dill-green-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-dill-green-dark dark:text-dill-green-light mb-4">
              What I am building
            </h2>
            <div className="max-w-4xl mx-auto bg-dill-green-light dark:bg-black/50 rounded-2xl p-8 md:p-12 shadow-xl glow-green">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-dill-green-primary dark:text-dill-green-light mb-4">
                Crypto Asset Inheritance Platform
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                A non-custodial, multi-chain inheritance and contingency transfer system that lets asset owners
                define beneficiaries and conditions (timelocks, liveness checks, legal proofs) while retaining
                self-custody until the event is triggered. Solving the critical problem of irretrievable crypto
                wealth upon owner's death or incapacitation.
              </p>
              <div className="mb-4 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg inline-block">
                <p className="text-sm text-blue-800 dark:text-blue-300">
                  <strong>Status:</strong> Building MVP Frontend (Next.js 14, React 18, TypeScript)
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-3 mb-6">
                <span className="px-4 py-2 bg-dill-green-primary/20 dark:bg-dill-green-primary/10 text-dill-green-primary dark:text-dill-green-light rounded-full text-sm font-medium">
                  Bitcoin
                </span>
                <span className="px-4 py-2 bg-dill-green-primary/20 dark:bg-dill-green-primary/10 text-dill-green-primary dark:text-dill-green-light rounded-full text-sm font-medium">
                  EVM Chains
                </span>
                <span className="px-4 py-2 bg-dill-green-primary/20 dark:bg-dill-green-primary/10 text-dill-green-primary dark:text-dill-green-light rounded-full text-sm font-medium">
                  Solana
                </span>
                <span className="px-4 py-2 bg-dill-green-primary/20 dark:bg-dill-green-primary/10 text-dill-green-primary dark:text-dill-green-light rounded-full text-sm font-medium">
                  TypeScript
                </span>
                <span className="px-4 py-2 bg-dill-green-primary/20 dark:bg-dill-green-primary/10 text-dill-green-primary dark:text-dill-green-light rounded-full text-sm font-medium">
                  Next.js 15
                </span>
              </div>
              <Link href="/crypto-inheritance">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-dill-green-primary text-white rounded-lg font-semibold glow-green-hover"
                >
                  Learn More
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}


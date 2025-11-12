'use client'

import { motion } from 'framer-motion'
import { Code, Database, Shield, Zap, Network, Settings } from 'lucide-react'

const skills = [
  {
    category: 'Core Languages',
    icon: Code,
    items: ['Go', 'TypeScript', 'JavaScript', 'Rust', 'Solidity'],
  },
  {
    category: 'Web3 & Blockchain',
    icon: Network,
    items: ['Ethers.js', 'Solana Web3', 'BitcoinJS', 'Multi-chain', 'DeFi Protocols', 'NFT Platforms', 'Smart Contracts'],
  },
  {
    category: 'Backend APIs',
    icon: Zap,
    items: ['REST APIs', 'GraphQL', 'WebSocket', 'Blockchain RPC', 'Trading APIs'],
  },
  {
    category: 'Database & Storage',
    icon: Database,
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'Blockchain Indexing'],
  },
  {
    category: 'Infrastructure & Tools',
    icon: Settings,
    items: ['AWS', 'Docker', 'Hardhat', 'Flashbots', 'MEV-Share', 'Jito Bundler'],
  },
  {
    category: 'Frontend & Full-Stack',
    icon: Shield,
    items: ['React', 'Next.js', 'TypeScript', 'Full-Stack Development'],
  },
]

const achievements = [
  {
    title: '13+ Production Projects',
    description: 'Built DeFi platforms, NFT marketplaces, trading terminals, and blockchain infrastructure',
  },
  {
    title: 'Multi-Chain Expertise',
    description: 'Ethereum, Solana, Bitcoin, Polygon, BSC, Arbitrum, Optimism, and Bitcoin Layer 2s',
  },
  {
    title: 'Full-Stack Capability',
    description: 'Backend APIs, smart contracts, trading bots, MEV bundlers, and frontend applications',
  },
  {
    title: 'Diverse Domains',
    description: 'DeFi, NFTs, Gaming, Trading Platforms, AI/ML, and Bitcoin infrastructure',
  },
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

export default function About() {
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
            About Me
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Senior Web3 Backend Developer with 8+ years of experience in Go, TypeScript, and Rust. Architecting
            production-grade blockchain APIs, smart contract backends, trading bots, and decentralized infrastructure
            across DeFi, NFT, gaming, and Bitcoin ecosystems.
          </p>
        </motion.div>

        {/* Professional Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-dill-green-dark rounded-2xl p-8 md:p-12 shadow-xl mb-16 glow-green"
        >
          <h2 className="text-3xl font-display font-bold text-dill-green-primary dark:text-dill-green-light mb-6">
            Professional Summary
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              I'm a Senior Web3 Backend Developer with 8+ years of experience specializing in Go, TypeScript, and Rust,
              architecting and building production-grade blockchain infrastructure and decentralized backend systems.
              I've delivered 13+ production Web3 projects spanning DeFi platforms, NFT marketplaces, trading terminals,
              gaming infrastructure, and blockchain data platforms across Ethereum, Solana, Bitcoin, and multiple EVM chains.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              My expertise spans building scalable blockchain APIs, smart contract backends, multi-chain integration
              systems, MEV bundlers, trading bots, and decentralized infrastructure. I've built DeFi platforms like
              FeeFree (zero-fee DEX) and Ribbon Finance (structured products), NFT platforms including Monkai and Pine
              (NFT financing), trading terminals like ChainPro (hedge fund-grade onchain trading), and Bitcoin infrastructure
              including Signal21 (Bitcoin data platform) and MemeDealer (Rune DEX). I specialize in connecting traditional
              backend systems with blockchain networks, handling complex on-chain and off-chain data synchronization,
              and building robust Web3 infrastructure that scales to production levels.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              My work includes architecting RESTful and GraphQL APIs for blockchain data, implementing smart contracts
              for DeFi and NFT protocols, building trading bots and MEV bundlers using Flashbots and Jito, designing
              optimized database schemas for indexing blockchain transactions, and creating full-stack applications with
              React and Next.js. I've worked with technologies including Go, TypeScript, Rust, Solidity, Solana Web3,
              Ethers.js, PostgreSQL, MongoDB, AWS, and various blockchain tooling. I'm passionate about building
              production-grade infrastructure that powers the decentralized web across multiple blockchain ecosystems.
            </p>
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-dill-green-dark dark:text-dill-green-light text-center mb-12">
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill) => {
              const Icon = skill.icon
              return (
                <motion.div
                  key={skill.category}
                  variants={itemVariants}
                  className="bg-white dark:bg-dill-green-dark rounded-xl p-6 shadow-lg glow-green-hover"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <Icon className="w-6 h-6 text-dill-green-primary dark:text-dill-green-light" />
                    <h3 className="text-xl font-semibold text-dill-green-dark dark:text-dill-green-light">
                      {skill.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 bg-dill-green-light dark:bg-black/50 text-dill-green-primary dark:text-dill-green-light rounded-full text-sm font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-dill-green-dark dark:text-dill-green-light text-center mb-12">
            Key Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white dark:bg-dill-green-dark rounded-xl p-6 shadow-lg text-center glow-green-hover"
              >
                <div className="text-4xl font-bold text-dill-green-primary dark:text-dill-green-light mb-2">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-dill-green-dark dark:text-dill-green-light mb-2">
                  {achievement.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Resume Download */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <a
            href="/resume.pdf"
            download
            className="inline-block px-8 py-4 bg-dill-green-primary text-white rounded-lg font-semibold shadow-lg glow-green-hover hover:bg-dill-green-hover transition-colors"
          >
            Download Resume (PDF)
          </a>
        </motion.div>
      </div>
    </div>
  )
}


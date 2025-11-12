'use client'

import { motion } from 'framer-motion'
import { Code, Settings, Globe, Layers, Bot } from 'lucide-react'

const services = [
  {
    icon: Code,
    title: 'Backend API Development',
    description: 'Build scalable RESTful and GraphQL APIs with proper authentication, rate limiting, and error handling. Expertise in Go, TypeScript, and Python.',
    features: [
      'RESTful & GraphQL APIs',
      'API design & documentation',
      'Authentication & authorization',
      'Rate limiting & caching',
    ],
  },
  {
    icon: Globe,
    title: 'Web3 Backend Integration',
    description: 'Integrate blockchain and Web3 functionality into backend systems, including smart contract interactions and multi-chain support.',
    features: [
      'Blockchain API integration',
      'Smart contract backends',
      'Multi-chain support',
      'Web3 infrastructure',
    ],
  },
  {
    icon: Layers,
    title: 'dApp Development',
    description: 'Develop decentralized applications with robust backend infrastructure, smart contract integration, and seamless user experiences.',
    features: [
      'Full-stack dApp development',
      'Smart contract integration',
      'Wallet connectivity',
      'On-chain & off-chain data',
    ],
  },
  {
    icon: Settings,
    title: 'Backend Infrastructure',
    description: 'Design and deploy scalable backend infrastructure using Docker, Kubernetes, and cloud platforms (AWS, GCP).',
    features: [
      'Container orchestration',
      'Cloud architecture',
      'CI/CD pipelines',
      'Monitoring & logging',
    ],
  },
  {
    icon: Bot,
    title: 'Trading Bot Development',
    description: 'Build high-performance automated trading bots for DeFi, DEXs, and cryptocurrency markets. Expertise in algorithmic trading, MEV strategies, and real-time execution systems.',
    features: [
      'DeFi trading bots',
      'Arbitrage & MEV bots',
      'Yield farming automation',
      'Real-time execution systems',
    ],
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

export default function Services() {
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
            Services
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Web3 backend development services: blockchain APIs, smart contract backends, and decentralized
            infrastructure built with Go and TypeScript
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {services.map((service) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white dark:bg-dill-green-dark rounded-xl p-6 shadow-lg glow-green-hover"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-dill-green-light dark:bg-dill-green-primary/20 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-dill-green-primary dark:text-dill-green-light" />
                  </div>
                  <h3 className="text-xl font-semibold text-dill-green-dark dark:text-dill-green-light">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start space-x-2">
                      <span className="text-dill-green-primary dark:text-dill-green-light mt-1.5 flex-shrink-0">•</span>
                      <span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-dill-green-dark rounded-2xl p-8 md:p-12 shadow-xl glow-green text-center"
        >
          <h2 className="text-3xl font-display font-bold text-dill-green-dark dark:text-dill-green-light mb-4">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your Web3 backend requirements and how I can help build scalable blockchain APIs,
            smart contract backends, and decentralized infrastructure for your dApp or DeFi protocol.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-dill-green-primary text-white rounded-lg font-semibold shadow-lg glow-green-hover hover:bg-dill-green-hover transition-colors"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>
    </div>
  )
}


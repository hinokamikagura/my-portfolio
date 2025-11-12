'use client'

import { motion } from 'framer-motion'
import { Shield, Clock, Users, Lock, CheckCircle, Circle, ArrowLeft, Globe, Code, Database, Zap, FileText, Target, TrendingUp } from 'lucide-react'
import Link from 'next/link'

const progressSteps = [
  {
    id: 1,
    title: 'Phase 0: Research & Prototyping',
    status: 'completed',
    description: 'Research, legal scoping, stack selection, and initial prototypes',
    details: [
      'Completed legal framework research and scoping',
      'Bitcoin PSBT + Miniscript prototype',
      'EVM vault MVP (timelock escrow)',
      'Solana PDA vault MVP',
      'Architecture design and technical stack selection',
    ],
  },
  {
    id: 2,
    title: 'Phase 1: MVP Development',
    status: 'in-progress',
    description: 'Building core platform components and web/mobile interfaces',
    details: [
      'Frontend MVP (Next.js 14, React 18, TypeScript) - In Progress',
      'API Layer (NestJS/Laravel) - Architecture complete',
      'Liveness service & heartbeat system - Design phase',
      'Guardian flows & multi-wallet adapters - Planning',
      'Multi-chain wallet integration (Ledger, MetaMask, Phantom) - Started',
    ],
  },
  {
    id: 3,
    title: 'Phase 2: Mainnet Launch',
    status: 'pending',
    description: 'Security hardening, audits, and production deployment',
    details: [
      'Smart contract audits (Bitcoin, EVM, Solana)',
      'Security review and penetration testing',
      'Mainnet deployment (Bitcoin, Ethereum, EVM L2s, Solana)',
      'Enterprise admin console',
      'Legal reporting and compliance features',
      'SIEM and monitoring hardening',
    ],
  },
  {
    id: 4,
    title: 'Phase 3: Scale & Partnerships',
    status: 'pending',
    description: 'White-label offering, partnerships, and global rollout',
    details: [
      'White-label platform offering',
      'Partner integrations (law firms, family offices)',
      'Global jurisdiction expansion',
      'Advanced features and enterprise APIs',
      'Bug bounty program launch',
    ],
  },
]

const features = [
  {
    icon: Shield,
    title: 'Non-Custodial Architecture',
    description: 'Platform never holds usable private keys. All signing happens on user devices/wallets or via guardians. Self-custody until event trigger.',
  },
  {
    icon: Globe,
    title: 'Multi-Chain Support',
    description: 'Bitcoin (PSBT + Miniscript), Ethereum & EVM L2s (Base/Arbitrum/Optimism/Polygon), and Solana (PDA-based escrow).',
  },
  {
    icon: Users,
    title: 'Programmable Policies',
    description: 'Define beneficiaries, asset lists, distribution ratios, proof requirements, dispute periods, and jurisdictional rules.',
  },
  {
    icon: Clock,
    title: 'Trigger Mechanisms',
    description: 'Liveness checks, legal proofs, guardian quorum, timelock & escrow contracts with chain-native time/height locks.',
  },
  {
    icon: Code,
    title: 'Multi-Wallet Integration',
    description: 'Hardware (Ledger, Trezor, Keystone), app wallets (Phantom, Solflare, Rainbow), desktop (Exodus, Electrum), browser (MetaMask, Rabby).',
  },
  {
    icon: FileText,
    title: 'Compliance & Audit Trail',
    description: 'Tamper-evident logs, encrypted document vault, exportable reports for executors and legal teams.',
  },
]

export default function CryptoInheritance() {
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
            Crypto Asset Inheritance Platform
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-6">
            A non-custodial, multi-chain inheritance and contingency transfer system that lets asset owners
            define beneficiaries and conditions while retaining self-custody until the event is triggered.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-4">
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
              Next.js 14
            </span>
          </div>
          <div className="mt-4 px-6 py-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
            <p className="text-sm text-blue-800 dark:text-blue-300">
              <strong>Current Status:</strong> Building MVP Frontend (Next.js 14, React 18, TypeScript)
            </p>
          </div>
        </motion.div>

        {/* Executive Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 bg-white dark:bg-dill-green-dark rounded-2xl p-8 md:p-12 shadow-xl glow-green"
        >
          <h2 className="text-3xl font-display font-bold text-dill-green-primary dark:text-dill-green-light mb-6">
            Executive Summary
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded">
              <h3 className="text-lg font-semibold text-red-800 dark:text-red-300 mb-2">The Problem</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Estate planning for digital assets is broken. A significant portion of crypto wealth becomes
                irretrievable upon the owner&apos;s death or incapacitation. Private keys die with owners; exchanges/custodians
                add counterparty risk and jurisdictional limits; DIY solutions are error-prone.
              </p>
            </div>
            
            <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 rounded">
              <h3 className="text-lg font-semibold text-green-800 dark:text-green-300 mb-2">The Solution</h3>
              <p className="text-gray-700 dark:text-gray-300">
                A programmable inheritance layer supporting Bitcoin, EVM chains, and Solana, integrating with hardware,
                app, desktop, and browser wallets. The platform provides a non-custodial, multi-chain inheritance and
                contingency transfer system that lets asset owners define beneficiaries and conditions (e.g., timelocks,
                liveness checks, legal proofs) while retaining self-custody until the event is triggered.
              </p>
            </div>

            <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded">
              <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-2">Competitive Moat</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Chain-specific primitives (PSBT + Miniscript on Bitcoin, Account Abstraction & timelock escrow on EVM,
                PDA-based escrow on Solana), legal-tech integrations, and a robust off-chain liveness/oracle framework.
                Non-custodial design ensures no counterparty risk while providing enterprise-grade security and compliance.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="p-4 bg-dill-green-light dark:bg-black/50 rounded-lg">
                <h4 className="font-semibold text-dill-green-dark dark:text-dill-green-light mb-2">Business Model</h4>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li>• Subscription + event fees</li>
                  <li>• B2B white-label offering</li>
                  <li>• Enterprise API licensing</li>
                </ul>
              </div>
              <div className="p-4 bg-dill-green-light dark:bg-black/50 rounded-lg">
                <h4 className="font-semibold text-dill-green-dark dark:text-dill-green-light mb-2">Target Traction</h4>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li>• Pilot with 100 power users</li>
                  <li>• 5 crypto-native funds</li>
                  <li>• $10–20M AUA in first 12 months</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Key Features */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-display font-bold text-dill-green-dark dark:text-dill-green-light mb-8 text-center">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-dill-green-dark rounded-xl p-6 shadow-lg glow-green-hover"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-dill-green-primary/10 dark:bg-dill-green-primary/20 rounded-lg">
                      <Icon className="w-6 h-6 text-dill-green-primary dark:text-dill-green-light" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-dill-green-dark dark:text-dill-green-light mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Progress Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-display font-bold text-dill-green-dark dark:text-dill-green-light mb-8 text-center">
            Development Progress
          </h2>
          <div className="space-y-8">
            {progressSteps.map((step, index) => {
              const isCompleted = step.status === 'completed'
              const isInProgress = step.status === 'in-progress'
              const isPending = step.status === 'pending'

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Timeline Line */}
                  {index < progressSteps.length - 1 && (
                    <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-dill-green-light dark:bg-dill-green-dark" />
                  )}

                  <div className="flex items-start space-x-6">
                    {/* Status Icon */}
                    <div className="relative z-10">
                      {isCompleted ? (
                        <div className="w-12 h-12 rounded-full bg-dill-green-primary flex items-center justify-center shadow-lg glow-green">
                          <CheckCircle className="w-6 h-6 text-white" />
                        </div>
                      ) : isInProgress ? (
                        <div className="w-12 h-12 rounded-full bg-dill-green-primary/80 flex items-center justify-center shadow-lg glow-green animate-pulse">
                          <Clock className="w-6 h-6 text-white" />
                        </div>
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center">
                          <Circle className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 bg-white dark:bg-dill-green-dark rounded-xl p-6 shadow-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold text-dill-green-dark dark:text-dill-green-light">
                          {step.title}
                        </h3>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            isCompleted
                              ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300'
                              : isInProgress
                              ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300'
                              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                          }`}
                        >
                          {step.status === 'completed'
                            ? 'Completed'
                            : step.status === 'in-progress'
                            ? 'In Progress'
                            : 'Pending'}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {step.description}
                      </p>
                      <ul className="space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <li
                            key={detailIndex}
                            className="flex items-start space-x-2 text-sm text-gray-700 dark:text-gray-300"
                          >
                            <span className="text-dill-green-primary dark:text-dill-green-light mt-1">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Technical Stack */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 bg-white dark:bg-dill-green-dark rounded-2xl p-8 md:p-12 shadow-xl glow-green"
        >
          <h2 className="text-3xl font-display font-bold text-dill-green-primary dark:text-dill-green-light mb-6">
            Technical Stack
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-dill-green-dark dark:text-dill-green-light mb-4 flex items-center">
                <Code className="w-5 h-5 mr-2" />
                Frontend & Mobile
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• <strong>Web:</strong> Next.js 15, React 19, TypeScript, Tailwind CSS</li>
                <li>• <strong>Mobile:</strong> React Native (Expo) or Flutter</li>
                <li>• <strong>State:</strong> TanStack Query, Zustand/Redux Toolkit</li>
                <li>• <strong>i18n:</strong> next-i18next, ICU messages</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-dill-green-dark dark:text-dill-green-light mb-4 flex items-center">
                <Database className="w-5 h-5 mr-2" />
                Backend & Infrastructure
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• <strong>API:</strong> NestJS (TypeScript) or Laravel 11 (PHP 8.3)</li>
                <li>• <strong>Database:</strong> PostgreSQL 16, Redis 7</li>
                <li>• <strong>Storage:</strong> S3-compatible (encrypted docs), IPFS/Filecoin</li>
                <li>• <strong>Infra:</strong> Docker/Kubernetes, Terraform, AWS/GCP</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-dill-green-dark dark:text-dill-green-light mb-4 flex items-center">
                <Globe className="w-5 h-5 mr-2" />
                Blockchain Integration
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• <strong>Bitcoin:</strong> PSBT + Miniscript, rust-bitcoin/bdk</li>
                <li>• <strong>EVM:</strong> Solidity 0.8.x, Hardhat/Foundry, ERC-4337</li>
                <li>• <strong>Solana:</strong> Rust/Anchor, PDA escrow, SPL Token</li>
                <li>• <strong>Wallets:</strong> Ledger, Trezor, MetaMask, Phantom, Rainbow</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-dill-green-dark dark:text-dill-green-light mb-4 flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                Security & Monitoring
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• <strong>Auth:</strong> WebAuthn (FIDO2), JWT, RBAC/ABAC</li>
                <li>• <strong>KMS:</strong> AWS KMS/HSM, HashiCorp Vault</li>
                <li>• <strong>Monitoring:</strong> OpenTelemetry, Prometheus, Grafana</li>
                <li>• <strong>SIEM:</strong> CloudTrail, immutable audit logs</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Architecture Overview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 bg-white dark:bg-dill-green-dark rounded-2xl p-8 md:p-12 shadow-xl glow-green"
        >
          <h2 className="text-3xl font-display font-bold text-dill-green-primary dark:text-dill-green-light mb-6">
            Architecture Overview
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A modular system of Web/Mobile clients, an API/Orchestrator, and on-chain components across
              Bitcoin, EVM, and Solana. Wallet adapters integrate hardware, app, desktop, and browser wallets.
              Liveness/oracle services coordinate heartbeats and legal attestations.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="p-4 bg-dill-green-light dark:bg-black/50 rounded-lg">
                <h4 className="font-semibold text-dill-green-dark dark:text-dill-green-light mb-3">On-Chain Modules</h4>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                  <li>• <strong>Bitcoin:</strong> PSBT + Miniscript descriptors</li>
                  <li>• <strong>EVM:</strong> Timelock escrow & Account Abstraction</li>
                  <li>• <strong>Solana:</strong> PDA-based escrow programs</li>
                </ul>
              </div>
              <div className="p-4 bg-dill-green-light dark:bg-black/50 rounded-lg">
                <h4 className="font-semibold text-dill-green-dark dark:text-dill-green-light mb-3">Off-Chain Services</h4>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                  <li>• Liveness heartbeat scheduler</li>
                  <li>• Legal proof oracle integration</li>
                  <li>• Encrypted policy storage</li>
                  <li>• Audit/compliance logging</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center bg-white dark:bg-dill-green-dark rounded-2xl p-8 md:p-12 shadow-xl glow-green"
        >
          <h2 className="text-3xl font-display font-bold text-dill-green-dark dark:text-dill-green-light mb-4">
            Interested in This Project?
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Currently building the MVP frontend. Looking for investors, advisors, or technical partners
            to help bring this platform to market. If you&apos;re interested in learning more or contributing,
            feel free to reach out.
          </p>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-dill-green-primary text-white rounded-lg font-semibold shadow-lg glow-green-hover hover:bg-dill-green-hover transition-colors"
            >
              Get In Touch
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}


'use client'

import Link from 'next/link'
import { Github, MessageCircle, Twitter, Phone } from 'lucide-react'
import { motion } from 'framer-motion'
import Logo from './Logo'

const socialLinks = [
  { name: 'GitHub', icon: Github, href: 'https://github.com/hinokamikagura' },
  { name: 'WhatsApp', icon: Phone, href: 'https://wa.me/13435174872' },
  { name: 'Telegram', icon: MessageCircle, href: 'https://t.me/hinokamikagoora' },
  { name: 'X (Twitter)', icon: Twitter, href: 'https://x.com/hinokamikaguura' },
]

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-dill-green-dark border-t border-dill-green-light dark:border-dill-green-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Logo size={32} />
              <h3 className="text-lg font-display font-bold text-dill-green-primary dark:text-dill-green-light">
                Kairos Stroud
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Senior Web3 Backend Developer with 8+ years of experience in Go, TypeScript, and Rust. Built 13+ production
              projects including DeFi platforms, NFT marketplaces, trading terminals, and blockchain infrastructure
              across Ethereum, Solana, Bitcoin, and multiple EVM chains.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-dill-green-dark dark:text-dill-green-light mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-gray-600 dark:text-gray-400 hover:text-dill-green-primary dark:hover:text-dill-green-light transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-sm text-gray-600 dark:text-gray-400 hover:text-dill-green-primary dark:hover:text-dill-green-light transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-gray-600 dark:text-gray-400 hover:text-dill-green-primary dark:hover:text-dill-green-light transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-600 dark:text-gray-400 hover:text-dill-green-primary dark:hover:text-dill-green-light transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-dill-green-dark dark:text-dill-green-light mb-4">
              Connect
            </h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-lg bg-dill-green-light dark:bg-dill-green-dark hover:bg-dill-green-primary hover:text-white dark:hover:text-white transition-colors"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-dill-green-light dark:border-dill-green-primary/20 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>© {new Date().getFullYear()} Kairos. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}


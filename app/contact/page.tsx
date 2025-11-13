'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Github, MessageCircle, Twitter, Send, Mail, Phone } from 'lucide-react'

const socialLinks = [
  { name: 'GitHub', icon: Github, href: 'https://github.com/hinokamikagura', color: 'hover:text-gray-900 dark:hover:text-white' },
  { name: 'WhatsApp', icon: Phone, href: 'https://wa.me/13435174872', color: 'hover:text-green-600' },
  { name: 'Telegram', icon: MessageCircle, href: 'https://t.me/hinokamikagoora', color: 'hover:text-blue-500' },
  { name: 'X (Twitter)', icon: Twitter, href: 'https://x.com/hinokamikaguura', color: 'hover:text-gray-900 dark:hover:text-white' },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    
    // In a real application, you would send this data to your backend
    console.log('Form submitted:', formData)
    
    setIsSubmitting(false)
    setSubmitStatus('success')
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' })
      setSubmitStatus('idle')
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

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
            Get In Touch
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Have a Web3 project in mind? Let&apos;s discuss how we can build scalable blockchain backends,
            smart contract infrastructure, or decentralized applications together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-dill-green-dark rounded-2xl p-8 shadow-xl glow-green"
          >
            <h2 className="text-2xl font-display font-bold text-dill-green-dark dark:text-dill-green-light mb-6">
              Send a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dill-green-light dark:bg-black/50 border border-dill-green-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-dill-green-primary text-dill-green-dark dark:text-dill-green-light"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dill-green-light dark:bg-black/50 border border-dill-green-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-dill-green-primary text-dill-green-dark dark:text-dill-green-light"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dill-green-light dark:bg-black/50 border border-dill-green-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-dill-green-primary text-dill-green-dark dark:text-dill-green-light"
                  placeholder="Project inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-dill-green-light dark:bg-black/50 border border-dill-green-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-dill-green-primary text-dill-green-dark dark:text-dill-green-light resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-100 dark:bg-green-900/30 border border-green-400 dark:border-green-600 rounded-lg text-green-800 dark:text-green-300"
                >
                  Message sent successfully! I&apos;ll get back to you soon.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-100 dark:bg-red-900/30 border border-red-400 dark:border-red-600 rounded-lg text-red-800 dark:text-red-300"
                >
                  Something went wrong. Please try again.
                </motion.div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 bg-dill-green-primary text-white rounded-lg font-semibold shadow-lg glow-green-hover hover:bg-dill-green-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-white dark:bg-dill-green-dark rounded-2xl p-8 shadow-xl glow-green">
              <h2 className="text-2xl font-display font-bold text-dill-green-dark dark:text-dill-green-light mb-6">
                Contact Information
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-dill-green-primary dark:text-dill-green-light mt-1" />
                  <div>
                    <h3 className="font-semibold text-dill-green-dark dark:text-dill-green-light mb-1">
                      Email
                    </h3>
                    <a
                      href="mailto:kairos.stroud@gmail.com"
                      className="text-gray-600 dark:text-gray-400 hover:text-dill-green-primary dark:hover:text-dill-green-light transition-colors"
                    >
                      kairos.stroud@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-dill-green-dark rounded-2xl p-8 shadow-xl glow-green">
              <h2 className="text-2xl font-display font-bold text-dill-green-dark dark:text-dill-green-light mb-6">
                Connect on Social Media
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex flex-col items-center justify-center p-6 bg-dill-green-light dark:bg-black/50 rounded-xl hover:bg-dill-green-primary hover:text-white dark:hover:text-white transition-all ${social.color}`}
                    >
                      <Icon className="w-8 h-8 mb-2" />
                      <span className="text-sm font-medium">{social.name}</span>
                    </motion.a>
                  )
                })}
              </div>
            </div>

            <div className="bg-white dark:bg-dill-green-dark rounded-2xl p-8 shadow-xl glow-green">
              <h2 className="text-2xl font-display font-bold text-dill-green-dark dark:text-dill-green-light mb-4">
                Response Time
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                I typically respond to inquiries within 24-48 hours. For urgent matters,
                please reach out via WhatsApp, Telegram, or X (Twitter).
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}


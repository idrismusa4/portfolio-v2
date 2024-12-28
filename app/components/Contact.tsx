'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Github } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center">Get in Touch</h2>
        <div className="flex flex-col items-center space-y-6">
          <p className="text-lg sm:text-xl text-gray-300 text-center max-w-2xl mx-auto mb-6 sm:mb-8">
            I&apos;m always open to new opportunities and collaborations. Feel free to reach out!
          </p>
          <div className="flex space-x-6">
            <motion.a
              href="mailto:idrismusa004.com"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-blue-500 text-white p-4 rounded-full"
            >
              <Mail className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/idris-shaaba"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-blue-500 text-white p-4 rounded-full"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://github.com/idrismusa4"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-blue-500 text-white p-4 rounded-full"
            >
              <Github className="w-6 h-6" />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}


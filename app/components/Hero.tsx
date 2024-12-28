'use client'

import { motion } from 'framer-motion'
import TypewriterText from './TypewriterText'
import { Download } from 'lucide-react'
// import Link from 'next/link'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <svg
          className="w-full h-full opacity-20"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <pattern
            id="grid"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 10 0 L 0 0 0 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            />
          </pattern>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-4"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
          Hi, I&apos;m Idris Shaaba
        </h1>
        <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8">
          I&apos;m a <TypewriterText />
        </div>
        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Crafting digital experiences with modern web technologies.
          Focused on creating fast, accessible, and beautiful applications.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <motion.a
            href="#experience"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto bg-blue-500 text-white px-8 py-3 rounded-lg text-lg font-semibold"
          >
            View My Work
          </motion.a>
          <motion.a
            href="/resume.pdf" 
            target='_blank'
            rel='noopener noreferrer'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto bg-gray-700 text-white px-8 py-3 rounded-lg text-lg font-semibold flex items-center justify-center gap-2"
          >
            <Download className="w-5 h-5" />
            Resume
          </motion.a>
        </div>
      </motion.div>

      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full p-1">
          <div className="w-1 h-2 bg-blue-500 rounded-full mx-auto" />
        </div>
      </motion.div>
    </section>
  )
}


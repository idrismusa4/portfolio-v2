'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { path: '/', label: 'Home' },
  { path: '#experience', label: 'Experience' },
  { path: '#education', label: 'Education' },
  { path: '#skills', label: 'Skills' },
  { path: '#projects', label: 'Projects' },
  { path: '#contact', label: 'Contact' },
]

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('/')

  useEffect(() => {
    const observers = new Map()
    
    // Special observer for the home section
    const handleScroll = () => {
      if (window.scrollY < 100) { // Adjust this value as needed
        setActiveSection('/')
      }
    }

    window.addEventListener('scroll', handleScroll)
    
    // Create observers for each section
    navItems.forEach(({ path }) => {
      if (path === '/') return // Skip home section in the regular observers
      
      const element = document.querySelector(path)
      if (!element) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(path)
            }
          })
        },
        {
          rootMargin: '-50% 0px -50% 0px'
        }
      )

      observer.observe(element)
      observers.set(path, observer)
    })

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll)
      observers.forEach((observer) => observer.disconnect())
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-sm">
      <div className="flex justify-between items-center px-6 py-4">
        <Link href="/" className="text-2xl font-bold">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-blue-500"
          >
            {'<'}
          </motion.span>
          Idris
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-blue-500"
          >
            {' />'}
          </motion.span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          <ul className="flex space-x-1">
            {navItems.map(({ path, label }) => (
              <li key={path}>
                <Link
                  href={path}
                  className={`px-4 py-2 rounded-lg transition-colors relative ${
                    activeSection === path ? 'text-blue-400' : 'text-gray-400 hover:text-blue-200'
                  }`}
                >
                  {label}
                  <span className="text-gray-600 ml-1">/</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-gray-400 hover:text-white focus:outline-none"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-800"
          >
            <ul className="flex flex-col py-4">
              {navItems.map(({ path, label }) => (
                <li key={path}>
                  <Link
                    href={path}
                    onClick={closeMenu}
                    className={`block px-6 py-3 transition-colors ${
                      activeSection === path ? 'text-blue-400 bg-blue-500/10' : 'text-gray-400 hover:text-blue-200 hover:bg-blue-500/5'
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}


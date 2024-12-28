'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { path: '/', label: 'Home' },
  { path: '#experience', label: 'Experience' },
  { path: '#education', label: 'Education' },
  { path: '#skills', label: 'Skills' },
  { path: '#projects', label: 'Projects' },
  { path: '#contact', label: 'Contact' },
]

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 bg-[#0a0a0f]/80 backdrop-blur-sm">
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
      <div className="flex items-center space-x-4">
        <ul className="flex space-x-1">
          {navItems.map(({ path, label }) => (
            <li key={path}>
              <Link
                href={path}
                className={`px-4 py-2 rounded-lg transition-colors relative ${
                  pathname === path ? 'text-blue-400' : 'text-gray-400 hover:text-blue-200'
                }`}
              >
                {label}
                <span className="text-gray-600 ml-1">/</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}


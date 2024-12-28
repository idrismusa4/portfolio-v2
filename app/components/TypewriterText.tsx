'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const roles = [
  "Front End Developer",
  "UI/UX Designer",
  "Entrepreneur",
  "Problem Solver"
]

export default function TypewriterText() {
  const [currentRole, setCurrentRole] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [text, setText] = useState('')
  const [delta, setDelta] = useState(150)

  useEffect(() => {
    const ticker = setInterval(() => {
      tick()
    }, delta)

    return () => clearInterval(ticker)
  }, [text, delta, currentRole, isDeleting])

  const tick = () => {
    const fullText = roles[currentRole]
    const updatedText = isDeleting 
      ? text.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1)

    setText(updatedText)

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true)
      setDelta(100)
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false)
      setCurrentRole((prev) => (prev + 1) % roles.length)
      setDelta(150)
    }
  }

  return (
    <motion.span
      className="text-blue-500 block h-[1.2em]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {text}
      <span className="border-r-2 border-blue-500 ml-1 animate-blink" />
    </motion.span>
  )
}


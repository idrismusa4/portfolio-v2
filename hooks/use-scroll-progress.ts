'use client'

import { useState, useEffect } from 'react'
import { getScrollProgress } from '../utils/scroll-progress'

export function useScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setProgress(getScrollProgress())
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return progress
}


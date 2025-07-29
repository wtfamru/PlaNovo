"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"

interface LandingLayoutProps {
  children: React.ReactNode
}

export function LandingLayout({ children }: LandingLayoutProps) {
  const [isVisible, setIsVisible] = useState(false)
  const searchParams = useSearchParams()
  const fromAuth = searchParams.get('fromAuth') === 'true'

  useEffect(() => {
    // Small delay to ensure smooth transition from auth pages
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, fromAuth ? 100 : 0)

    return () => clearTimeout(timer)
  }, [fromAuth])

  return (
    <motion.div
      className="min-h-screen bg-white"
      initial={{ opacity: 0, y: fromAuth ? 100 : 0 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        y: isVisible ? 0 : (fromAuth ? 100 : 0) 
      }}
      transition={{ 
        duration: 0.6, 
        ease: "easeOut",
        delay: fromAuth ? 0.2 : 0
      }}
    >
      {children}
    </motion.div>
  )
} 
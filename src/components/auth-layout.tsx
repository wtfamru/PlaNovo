"use client"

import { usePathname, useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"

interface AuthLayoutProps {
  children: React.ReactNode
}

export function AuthLayout({ children }: AuthLayoutProps) {
  const pathname = usePathname()
  const router = useRouter()

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault()
    
    // Animate out the current page
    const container = document.querySelector('.auth-container') as HTMLElement
    if (container) {
      container.style.transform = 'translateY(-100vh)'
      container.style.transition = 'transform 0.6s ease-in-out'
    }

    // Navigate after animation with fromAuth parameter
    setTimeout(() => {
      router.push('/?fromAuth=true')
    }, 300)
  }

  return (
    <motion.div 
      className="h-screen flex overflow-hidden auth-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Left Column - Background Pattern */}
      <motion.div 
        className="hidden lg:flex lg:w-1/2 bg-planovo-light relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#617073" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Logo */}
        <motion.div 
          className="relative z-10 p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <motion.button
            onClick={handleLogoClick}
            className="text-3xl font-bold font-outfit text-planovo-dark hover:text-planovo-secondary transition-colors cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            PlaNovo
          </motion.button>
          <p className="font-syne text-planovo-secondary mt-2">Agentic AI for modern project management</p>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div 
          className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-planovo-primary/20 to-transparent rounded-full transform translate-x-32 translate-y-32"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
        <motion.div 
          className="absolute top-1/3 right-1/4 w-32 h-32 bg-gradient-to-br from-planovo-accent/30 to-transparent rounded-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        />
      </motion.div>

      {/* Right Column - Auth Form */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
        <div className="max-w-md w-full space-y-6 h-full flex flex-col justify-center">
          {/* Mobile Logo and Back Link */}
          <motion.div 
            className="lg:hidden text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <motion.button
              onClick={handleLogoClick}
              className="text-3xl font-bold font-outfit text-planovo-dark hover:text-planovo-secondary transition-colors cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              PlaNovo
            </motion.button>
            <div className="mt-4">
              <motion.button
                onClick={handleLogoClick}
                className="inline-flex items-center text-sm font-syne text-planovo-secondary hover:text-planovo-dark transition-colors cursor-pointer"
                whileHover={{ x: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                ← Back to Home
              </motion.button>
            </div>
          </motion.div>

          {/* Animated Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={pathname}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="flex-1 flex items-center"
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  )
} 
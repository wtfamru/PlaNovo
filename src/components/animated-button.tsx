"use client"

import Link from "next/link"

interface AnimatedButtonProps {
  href: string
  className?: string
}

export function AnimatedButton({ href, className = "" }: AnimatedButtonProps) {
  return (
    <Link href={href}>
      <button 
        className={`animated-button ${className}`}
        style={{
          width: '200px',
          height: '64px',
          overflow: 'hidden',
          border: 'none',
          color: '#040403',
          background: 'none',
          position: 'relative',
          paddingBottom: '2em',
          cursor: 'pointer',
          fontFamily: 'var(--font-syne)',
          fontWeight: 'bold',
          fontSize: '1.1rem'
        }}
      >
        <div className="text">
          <span>Request a Demo</span>
        </div>
        <div className="clone">
          <span>Sign Up for Free</span>
        </div>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </Link>
  )
} 
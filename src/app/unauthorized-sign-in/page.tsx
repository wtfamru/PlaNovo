"use client"

import { SignIn } from "@clerk/nextjs"
import Link from "next/link"

export default function UnauthorizedSignInPage() {
  return (
    <div className="min-h-screen flex">
      {/* Left Column - Background Pattern */}
      <div className="hidden lg:flex lg:w-1/2 bg-planovo-light relative overflow-hidden">
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
        <div className="relative z-10 p-8">
          <Link href="/" className="text-3xl font-bold font-outfit text-planovo-dark hover:text-planovo-secondary transition-colors">
            PlaNovo
          </Link>
          <p className="font-syne text-planovo-secondary mt-2">Agentic AI for modern project management</p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-planovo-primary/20 to-transparent rounded-full transform translate-x-32 translate-y-32"></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-gradient-to-br from-planovo-accent/30 to-transparent rounded-full"></div>
      </div>

      {/* Right Column - Unauthorized Sign In Form */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-md w-full space-y-8">
          {/* Mobile Logo and Back Link */}
          <div className="lg:hidden text-center">
            <Link href="/" className="text-3xl font-bold font-outfit text-planovo-dark hover:text-planovo-secondary transition-colors">
              PlaNovo
            </Link>
            <div className="mt-4">
              <Link 
                href="/" 
                className="inline-flex items-center text-sm font-syne text-planovo-secondary hover:text-planovo-dark transition-colors"
              >
                ← Back to Home
              </Link>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold font-syne text-planovo-dark text-center">Security Check</h2>
            <p className="mt-2 text-center font-syne text-planovo-secondary">Verify your identity to continue</p>
          </div>

          <SignIn 
            signUpUrl="/signup"
            appearance={{
              elements: {
                formButtonPrimary: "bg-planovo-primary hover:bg-planovo-accent text-planovo-dark font-syne font-semibold py-2 px-4 rounded-md transition-colors",
                card: "shadow-none",
                headerTitle: "hidden",
                headerSubtitle: "hidden",
                socialButtonsBlockButton: "bg-white border border-planovo-light text-planovo-dark hover:bg-planovo-light font-syne font-medium",
                formFieldInput: "font-syne border-planovo-light focus:border-planovo-primary focus:ring-planovo-primary",
                formFieldLabel: "font-syne text-planovo-dark font-medium",
                footerActionLink: "font-syne font-medium text-planovo-dark hover:text-planovo-secondary transition-colors",
                footerAction: "font-syne text-planovo-secondary",
                dividerLine: "bg-planovo-light",
                dividerText: "font-syne text-planovo-secondary",
                alert: "border-planovo-light bg-planovo-light/50",
                alertText: "font-syne text-planovo-dark",
                alertIcon: "text-planovo-secondary",
                formFieldErrorText: "font-syne text-red-600 text-sm",
                formFieldHintText: "font-syne text-planovo-secondary text-sm",
                formResendCodeLink: "font-syne text-planovo-primary hover:text-planovo-accent",
                formFieldAction: "font-syne text-planovo-primary hover:text-planovo-accent",
                formFieldActionRow: "font-syne",
                modalBackdrop: "bg-black/50",
                modalContent: "bg-white rounded-lg shadow-xl",
                modalCloseButton: "text-planovo-secondary hover:text-planovo-dark",
              },
            }}
          />
        </div>
      </div>
    </div>
  )
} 
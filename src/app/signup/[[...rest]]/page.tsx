"use client"

import { SignIn, SignUp } from "@clerk/nextjs";
import { useState } from "react";
import { AuthLayout } from "@/components/auth-layout";

export default function SignUpPage() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <AuthLayout>
      {/* Card Flip Container */}
      <div className="relative perspective-1000 flex-1 flex items-center">
        <div className={`transform-style-preserve-3d transition-transform duration-700 w-full ${isFlipped ? 'rotate-y-180' : ''}`}>
          
          {/* Front Side - Sign Up */}
          <div className="backface-hidden">
            <div className="space-y-4">
              <div>
                <h2 className="text-3xl font-bold font-syne text-planovo-dark text-center">Create Your Account</h2>
                <p className="mt-2 text-center font-syne text-planovo-secondary">Join PlaNovo and start piloting your projects</p>
              </div>

              <SignUp 
                signInUrl="/login"
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
                  },
                }}
              />
            </div>
          </div>

          {/* Back Side - Sign In */}
          <div className="absolute inset-0 backface-hidden rotate-y-180">
            <div className="space-y-4">
              <div>
                <h2 className="text-3xl font-bold font-syne text-planovo-dark text-center">Welcome Back</h2>
                <p className="mt-2 text-center font-syne text-planovo-secondary">Sign in to your account to continue</p>
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
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
} 
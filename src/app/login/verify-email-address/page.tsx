"use client"

import { VerifyEmail } from "@clerk/nextjs"
import Link from "next/link"
import { AuthLayout } from "@/components/auth-layout"

export default function VerifyEmailPage() {
  return (
    <AuthLayout>
      <div className="flex-1 flex items-center">
        <div className="space-y-4 w-full">
          <div>
            <h2 className="text-3xl font-bold font-syne text-planovo-dark text-center">Verify Your Email</h2>
            <p className="mt-2 text-center font-syne text-planovo-secondary">
              We've sent you a verification link. Please check your email and click the link to continue.
            </p>
          </div>

          <VerifyEmail 
            appearance={{
              elements: {
                formButtonPrimary: "bg-planovo-primary hover:bg-planovo-accent text-planovo-dark font-syne font-semibold py-2 px-4 rounded-md transition-colors",
                card: "shadow-none",
                headerTitle: "hidden",
                headerSubtitle: "hidden",
                formFieldInput: "font-syne border-planovo-light focus:border-planovo-primary focus:ring-planovo-primary",
                formFieldLabel: "font-syne text-planovo-dark font-medium",
                footerActionLink: "font-syne font-medium text-planovo-dark hover:text-planovo-secondary transition-colors",
                footerAction: "font-syne text-planovo-secondary",
                dividerLine: "bg-planovo-light",
                dividerText: "font-syne text-planovo-secondary",
              },
            }}
          />

          <div className="text-center">
            <p className="text-sm font-syne text-planovo-secondary">
              Didn't receive the email? Check your spam folder or{" "}
              <Link href="/login" className="font-medium text-planovo-dark hover:text-planovo-secondary transition-colors">
                try signing in again
              </Link>
            </p>
          </div>
        </div>
      </div>
    </AuthLayout>
  )
} 
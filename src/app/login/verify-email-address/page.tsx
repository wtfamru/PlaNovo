"use client"

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
              We&apos;ve sent you a verification link. Please check your email and click the link to continue.
            </p>
          </div>

          <div className="text-center">
            <p className="text-sm font-syne text-planovo-secondary">
              Didn&apos;t receive the email? Check your spam folder or{" "}
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
"use client"

import { SignIn } from "@clerk/nextjs";
import { AuthLayout } from "@/components/auth-layout";

export default function SignInPage() {
  return (
    <AuthLayout>
      <div className="flex-1 flex items-center">
        <div className="space-y-4 w-full">
          <div>
            <h2 className="text-3xl font-bold font-syne text-planovo-dark text-center">Welcome Back</h2>
            <p className="mt-2 text-center font-syne text-planovo-secondary">Sign in to your account to continue</p>
          </div>

          <SignIn 
            signUpUrl="/signup"
            redirectUrl="/dashboard"
            routing="path"
            path="/login"
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
                formFieldErrorText: "font-syne text-red-600 text-sm",
                formFieldHintText: "font-syne text-planovo-secondary text-sm",
                alert: "border-planovo-light bg-planovo-light/50",
                alertText: "font-syne text-planovo-dark",
                alertIcon: "text-planovo-secondary",
                formFieldInputShowPasswordButton: "text-planovo-secondary hover:text-planovo-dark",
                formFieldInputShowPasswordButtonIcon: "text-planovo-secondary",
              },
            }}
          />
        </div>
      </div>
    </AuthLayout>
  );
} 
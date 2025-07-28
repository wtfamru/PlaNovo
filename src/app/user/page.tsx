"use client"

import { UserProfile } from "@clerk/nextjs"
import Link from "next/link"

export default function UserProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-2xl font-bold font-outfit text-planovo-dark hover:text-planovo-secondary transition-colors">
              PlaNovo
            </Link>
            <Link 
              href="/dashboard" 
              className="text-sm font-syne text-planovo-secondary hover:text-planovo-dark transition-colors"
            >
              ← Back to Dashboard
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm border">
          <div className="px-6 py-4 border-b border-gray-200">
            <h1 className="text-2xl font-bold font-syne text-planovo-dark">Profile Settings</h1>
            <p className="mt-1 text-sm font-syne text-planovo-secondary">Manage your account settings and preferences</p>
          </div>
          
          <div className="p-6">
            <UserProfile 
              appearance={{
                elements: {
                  formButtonPrimary: "bg-planovo-primary hover:bg-planovo-accent text-planovo-dark font-syne font-semibold py-2 px-4 rounded-md transition-colors",
                  card: "shadow-none border-0",
                  headerTitle: "font-syne text-planovo-dark font-bold text-xl",
                  headerSubtitle: "font-syne text-planovo-secondary",
                  formFieldInput: "font-syne border-planovo-light focus:border-planovo-primary focus:ring-planovo-primary",
                  formFieldLabel: "font-syne text-planovo-dark font-medium",
                  footerActionLink: "font-syne font-medium text-planovo-dark hover:text-planovo-secondary transition-colors",
                  footerAction: "font-syne text-planovo-secondary",
                  dividerLine: "bg-planovo-light",
                  dividerText: "font-syne text-planovo-secondary",
                  badge: "bg-planovo-light text-planovo-dark font-syne",
                  formFieldLabelRow: "font-syne",
                  formFieldInputShowPasswordButton: "text-planovo-secondary hover:text-planovo-dark",
                  formFieldInputShowPasswordIcon: "text-planovo-secondary",
                  avatarBox: "w-20 h-20",
                  avatarImage: "rounded-full",
                  avatarImageActions: "hidden",
                  userPreviewMainIdentifier: "font-syne font-semibold text-planovo-dark",
                  userPreviewSecondaryIdentifier: "font-syne text-planovo-secondary",
                  userPreviewTextContainer: "font-syne",
                  profileSectionTitle: "font-syne font-semibold text-planovo-dark",
                  profileSectionContent: "font-syne",
                  profileSection: "border-planovo-light",
                  formFieldAction: "font-syne text-planovo-primary hover:text-planovo-accent",
                  formFieldActionRow: "font-syne",
                  formResendCodeLink: "font-syne text-planovo-primary hover:text-planovo-accent",
                  formFieldHintText: "font-syne text-planovo-secondary text-sm",
                  formFieldErrorText: "font-syne text-red-600 text-sm",
                  alertText: "font-syne",
                  alert: "border-planovo-light bg-planovo-light/50",
                  alertIcon: "text-planovo-secondary",
                  modalBackdrop: "bg-black/50",
                  modalContent: "bg-white rounded-lg shadow-xl",
                  modalCloseButton: "text-planovo-secondary hover:text-planovo-dark",
                  pageScrollBox: "scrollbar-thin scrollbar-thumb-planovo-light scrollbar-track-transparent",
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
} 
"use client"

import { useState } from "react"
import { Home, BarChart3, Users, Settings, FileText, Calendar } from "lucide-react"
import { useUser, UserButton } from "@clerk/nextjs"

const navigationItems = [
  { name: "Dashboard", icon: Home, href: "/dashboard", active: true },
  { name: "Projects", icon: FileText, href: "/projects", active: false },
  { name: "Analytics", icon: BarChart3, href: "/analytics", active: false },
  { name: "Team", icon: Users, href: "/team", active: false },
  { name: "Calendar", icon: Calendar, href: "/calendar", active: false },
  { name: "Settings", icon: Settings, href: "/settings", active: false },
]

export function DashboardSidebar() {
  const [activeItem, setActiveItem] = useState("Dashboard")
  const { user, isLoaded } = useUser()

  // Get user display name
  const getUserDisplayName = () => {
    if (!user) return "User"
    return user.fullName || user.firstName || user.emailAddresses[0]?.emailAddress || "User"
  }

  return (
    <div className="w-64 bg-planovo-secondary h-full flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-planovo-secondary/20">
        <h1 className="text-2xl font-bold font-syne text-white">PlaNovo</h1>
        <p className="text-sm font-syne text-white/70 mt-1">AI Project Management</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6">
        <ul className="space-y-2">
          {navigationItems.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => setActiveItem(item.name)}
                className={`w-full flex items-center px-4 py-3 text-sm font-syne rounded-lg transition-colors ${
                  activeItem === item.name
                    ? "bg-planovo-primary text-planovo-dark font-medium"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* User Section - UserButton on left, name on right */}
      <div className="p-4 border-t border-planovo-secondary/20">
        <div className="flex items-center space-x-3">
          {/* UserButton on the left */}
          <UserButton 
            appearance={{
              elements: {
                userButtonAvatarBox: "w-10 h-10",
                userButtonTrigger: "focus:shadow-none p-1 rounded hover:bg-white/10 transition-colors",
                userButtonPopoverCard: "shadow-xl border border-planovo-light bg-white",
                userButtonPopoverActionButton: "font-syne text-planovo-dark hover:bg-planovo-light",
                userButtonPopoverActionButtonText: "font-syne",
                userButtonPopoverFooter: "border-t border-planovo-light",
                userButtonPopoverUserPreview: "font-syne",
                userButtonPopoverUserPreviewMainIdentifier: "font-syne font-medium text-planovo-dark",
                userButtonPopoverUserPreviewSecondaryIdentifier: "font-syne text-planovo-secondary",
              },
            }}
          />
          
          {/* User name on the right */}
          <div className="flex-1 min-w-0">
            <p className="text-sm font-syne font-medium text-white truncate">
              {isLoaded ? getUserDisplayName() : "Loading..."}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

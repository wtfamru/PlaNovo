"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Home, BarChart3, Users, Settings, FileText, Calendar, User, LogOut } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

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
  const router = useRouter()

  const handleLogout = () => {
    // Here you would typically clear authentication tokens
    console.log("Logging out...")
    // Redirect to login page
    router.push("/login")
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

      {/* User Avatar */}
      <div className="p-4 border-t border-planovo-secondary/20">
        <div className="flex items-center space-x-3">
          <Avatar className="w-10 h-10">
            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
            <AvatarFallback className="bg-planovo-primary text-planovo-dark font-syne font-medium">JD</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-syne font-medium text-white truncate">John Doe</p>
            <p className="text-xs font-syne text-white/70 truncate">john@company.com</p>
          </div>
          <button 
            onClick={handleLogout}
            className="text-white/70 hover:text-white transition-colors"
            title="Logout"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

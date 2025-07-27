"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff } from "lucide-react"

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate login process
    try {
      // Here you would typically make an API call to authenticate
      console.log("Login attempt:", { email, password })
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // For demo purposes, accept any email/password combination
      if (email && password) {
        // Redirect to dashboard after successful login
        router.push("/dashboard")
      }
    } catch (error) {
      console.error("Login failed:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <Label htmlFor="email" className="font-syne text-planovo-dark font-medium">
          Email address
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 font-syne border-planovo-light focus:border-planovo-primary focus:ring-planovo-primary"
          placeholder="Enter your email"
          disabled={isLoading}
        />
      </div>

      <div>
        <Label htmlFor="password" className="font-syne text-planovo-dark font-medium">
          Password
        </Label>
        <div className="mt-1 relative">
          <Input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="font-syne border-planovo-light focus:border-planovo-primary focus:ring-planovo-primary pr-10"
            placeholder="Enter your password"
            disabled={isLoading}
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
            onClick={() => setShowPassword(!showPassword)}
            disabled={isLoading}
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4 text-planovo-secondary" />
            ) : (
              <Eye className="h-4 w-4 text-planovo-secondary" />
            )}
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 text-planovo-primary focus:ring-planovo-primary border-planovo-light rounded"
            disabled={isLoading}
          />
          <Label htmlFor="remember-me" className="ml-2 font-syne text-planovo-secondary">
            Remember me
          </Label>
        </div>

        <div className="text-sm">
          <a
            href="#"
            className="font-syne font-medium text-planovo-dark hover:text-planovo-secondary transition-colors"
          >
            Forgot your password?
          </a>
        </div>
      </div>

      <div>
        <Button
          type="submit"
          disabled={isLoading}
          className="w-full bg-planovo-primary hover:bg-planovo-accent text-planovo-dark font-syne font-semibold py-2 px-4 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? "Signing in..." : "Log In"}
        </Button>
      </div>

      <div className="text-center">
        <p className="font-syne text-planovo-secondary">
          {"Don't have an account? "}
          <a href="#" className="font-medium text-planovo-dark hover:text-planovo-secondary transition-colors">
            Sign up
          </a>
        </p>
      </div>
    </form>
  )
}

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"

export function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-planovo-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold font-outfit text-planovo-dark hover:text-planovo-secondary transition-colors">
              PlaNovo
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#features"
                className="font-syne text-planovo-dark hover:text-planovo-secondary px-3 py-2 text-sm font-medium transition-colors"
              >
                Features
              </a>
              <a
                href="#footer"
                className="font-syne text-planovo-dark hover:text-planovo-secondary px-3 py-2 text-sm font-medium transition-colors"
              >
                Contact
              </a>
              <SignedOut>
                <Link href="/auth">
                  <Button variant="outline" className="font-syne font-medium border-planovo-light text-planovo-dark hover:bg-planovo-light">
                    Login
                  </Button>
                </Link>
                <Link href="/auth">
                  <Button className="bg-planovo-primary text-planovo-dark hover:bg-planovo-accent font-syne font-medium">
                    Sign Up
                  </Button>
                </Link>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <SignedOut>
              <Link href="/auth">
                <Button variant="outline" className="font-syne font-medium border-planovo-light text-planovo-dark hover:bg-planovo-light text-sm">
                  Login
                </Button>
              </Link>
              <Link href="/auth">
                <Button className="bg-planovo-primary text-planovo-dark hover:bg-planovo-accent font-syne font-medium text-sm">
                  Sign Up
                </Button>
              </Link>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  )
}

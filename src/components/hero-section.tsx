import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-syne text-planovo-dark mb-6 leading-tight">
            Stop Managing Projects. <span className="block">Start Piloting Them</span>
          </h1>

          <p className="text-lg sm:text-xl font-syne text-planovo-secondary max-w-3xl mx-auto mb-10 leading-relaxed">
            PlaNovo is an agentic AI platform that automates your workflows, from planning and task assignment to
            reporting, freeing your team to focus on building.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/auth">
              <Button
                size="lg"
                className="bg-planovo-primary text-planovo-dark hover:bg-planovo-accent font-syne font-semibold px-8 py-3 text-lg"
              >
                Request a Demo
              </Button>
            </Link>
            <Link href="/auth">
              <button className="font-syne text-planovo-dark hover:text-planovo-secondary underline underline-offset-4 font-medium text-lg">
                Sign Up for Free
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold font-syne text-planovo-dark mb-6">
          Ready to Upgrade Your Workflow?
        </h2>
        <p className="text-lg font-syne text-planovo-secondary mb-8 max-w-2xl mx-auto">
          Join forward-thinking teams who are already transforming their project management with PlaNovo&apos;s AI-powered
          platform.
        </p>
        <Link href="/auth">
          <Button
            size="lg"
            className="bg-planovo-primary text-planovo-dark hover:bg-planovo-accent font-syne font-semibold px-8 py-3 text-lg"
          >
            Request a Demo
          </Button>
        </Link>
      </div>
    </section>
  )
}

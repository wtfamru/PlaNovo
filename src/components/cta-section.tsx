import { AnimatedButton } from "@/components/animated-button"

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
        <div className="flex justify-center">
          <AnimatedButton href="/signup" />
        </div>
      </div>
    </section>
  )
}

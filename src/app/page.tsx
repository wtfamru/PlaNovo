import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { LandingLayout } from "@/components/landing-layout"
import { Suspense } from "react"

export default function Home() {
  return (
    <Suspense fallback={null}>
      <LandingLayout>
        <Navigation />
        <HeroSection />
        <FeaturesSection />
        <CTASection />
        <Footer />
      </LandingLayout>
    </Suspense>
  )
}

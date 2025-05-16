import HeroSection from "@/components/sections/hero-section"
import HowItWorksSection from "@/components/sections/how-it-works-section"
import FeaturesSection from "@/components/sections/features-section"
import DashboardSection from "@/components/sections/dashboard-section"
import TestimonialsSection from "@/components/sections/testimonials-section"
import FooterSection from "@/components/sections/footer-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-background overflow-hidden">
      <HeroSection />
      <HowItWorksSection />
      <FeaturesSection />
      <DashboardSection />
      <TestimonialsSection />
      <FooterSection />
    </main>
  )
}

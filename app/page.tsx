import dynamic from "next/dynamic"
import { SiteShell } from "@/components/layout"
import { HeroSection } from "@/components/sections/hero-section"

function SectionFallback({ minHeight = 360 }: { minHeight?: number }) {
  return (
    <div className="section-ln" style={{ minHeight }} aria-hidden />
  )
}

const ServicesSection = dynamic(
  () =>
    import("@/components/sections/services-section").then(
      (m) => m.ServicesSection
    ),
  { loading: () => <SectionFallback /> }
)

const TestimonialsSection = dynamic(
  () =>
    import("@/components/sections/testimonials-section").then(
      (m) => m.TestimonialsSection
    ),
  { loading: () => <SectionFallback /> }
)

const ContactSection = dynamic(
  () =>
    import("@/components/sections/contact-section").then(
      (m) => m.ContactSection
    ),
  { loading: () => <SectionFallback minHeight={520} /> }
)

export default function HomePage() {
  return (
    <SiteShell>
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
    </SiteShell>
  )
}

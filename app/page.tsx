import dynamic from "next/dynamic"
import { SiteShell } from "@/components/layout"
import { HeroSection } from "@/components/sections/hero-section"

function SectionFallback({ minHeight = 360 }: { minHeight?: number }) {
  return (
    <div
      className="section-ln"
      style={{ minHeight }}
      aria-hidden
    />
  )
}

const AboutSection = dynamic(
  () =>
    import("@/components/sections/about-section").then((m) => m.AboutSection),
  { loading: () => <SectionFallback minHeight={480} /> }
)

const ServicesSection = dynamic(
  () =>
    import("@/components/sections/services-section").then(
      (m) => m.ServicesSection
    ),
  { loading: () => <SectionFallback /> }
)

const ProjectsSection = dynamic(
  () =>
    import("@/components/sections/projects-section").then(
      (m) => m.ProjectsSection
    ),
  { loading: () => <SectionFallback minHeight={420} /> }
)

const ExperienceSection = dynamic(
  () =>
    import("@/components/sections/experience-section").then(
      (m) => m.ExperienceSection
    ),
  { loading: () => <SectionFallback /> }
)

const CertificationsSection = dynamic(
  () =>
    import("@/components/sections/certifications-section").then(
      (m) => m.CertificationsSection
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
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ExperienceSection />
      <CertificationsSection />
      <TestimonialsSection />
      <ContactSection />
    </SiteShell>
  )
}

import { SiteShell } from "@/components/layout"
import {
  HeroSection,
  AboutSection,
  ServicesSection,
  ProjectsSection,
  ExperienceSection,
  CertificationsSection,
  TestimonialsSection,
  ContactSection,
} from "@/components/sections"

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

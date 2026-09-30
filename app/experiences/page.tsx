import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { SiteShell } from "@/components/layout"
import { siteConfig } from "@/data"

export const metadata: Metadata = {
  title: "Expérience & compétences",
  description: `Parcours, stack technique et certifications de ${siteConfig.fullName}, développeur Full-Stack à Casablanca.`,
  alternates: { canonical: `${siteConfig.url}/experiences` },
}

function SectionFallback({ minHeight = 360 }: { minHeight?: number }) {
  return <div className="section-ln" style={{ minHeight }} aria-hidden />
}

const ExperienceSection = dynamic(
  () =>
    import("@/components/sections/experience-section").then(
      (m) => m.ExperienceSection
    ),
  { loading: () => <SectionFallback minHeight={520} /> }
)

const SkillsSection = dynamic(
  () =>
    import("@/components/sections/skills-section").then((m) => m.SkillsSection),
  { loading: () => <SectionFallback /> }
)

const CertificationsSection = dynamic(
  () =>
    import("@/components/sections/certifications-section").then(
      (m) => m.CertificationsSection
    ),
  { loading: () => <SectionFallback /> }
)

export default function ExperiencesPage() {
  return (
    <SiteShell>
      <div className="pt-20 sm:pt-24">
        <ExperienceSection />
        <SkillsSection />
        <CertificationsSection />
      </div>
    </SiteShell>
  )
}

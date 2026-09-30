import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { SiteShell } from "@/components/layout"
import { siteConfig } from "@/data"

export const metadata: Metadata = {
  title: "Projets",
  description: `Études de cas et réalisations web & mobile de ${siteConfig.fullName}, développeur Full-Stack à Casablanca.`,
  alternates: { canonical: `${siteConfig.url}/projects` },
}

function SectionFallback() {
  return (
    <div
      className="section-ln min-h-[100dvh] pt-20 sm:pt-24"
      style={{ minHeight: 480 }}
      aria-hidden
    />
  )
}

const ProjectsSection = dynamic(
  () =>
    import("@/components/sections/projects-section").then(
      (m) => m.ProjectsSection
    ),
  { loading: () => <SectionFallback /> }
)

export default function ProjectsPage() {
  return (
    <SiteShell>
      <ProjectsSection className="min-h-[100dvh] pt-20 sm:pt-24" />
    </SiteShell>
  )
}

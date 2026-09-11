import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { SiteShell } from "@/components/layout"
import { ServiceDetail } from "@/components/services/service-detail"
import {
  getAllServiceIds,
  getProjectsByServiceId,
  getServiceById,
  siteConfig,
} from "@/data"
import { buildServicePageJsonLd } from "@/lib/seo"

type ServicePageProps = {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return getAllServiceIds().map((id) => ({ id }))
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { id } = await params
  const service = getServiceById(id)
  if (!service) return { title: "Service introuvable" }

  const title = service.content?.h1
    ? `${service.content.h1} | Devis MAD`
    : `${service.title} Casablanca | Devis MAD`

  const description =
    service.content?.intro?.[0] ??
    `${service.description} Packs en MAD — Nawfal Addaoui, développeur Full-Stack freelance à Casablanca.`

  return {
    title,
    description,
    alternates: { canonical: `/services/${service.id}` },
    openGraph: {
      title: `${service.content?.h1 ?? service.title} | ${siteConfig.nap.name}`,
      description,
      type: "website",
      locale: "fr_MA",
      url: `/services/${service.id}`,
    },
  }
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { id } = await params
  const service = getServiceById(id)
  if (!service) notFound()

  const relatedProjects = getProjectsByServiceId(service.id)
  const jsonLd = buildServicePageJsonLd(service)

  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServiceDetail service={service} relatedProjects={relatedProjects} />
    </SiteShell>
  )
}

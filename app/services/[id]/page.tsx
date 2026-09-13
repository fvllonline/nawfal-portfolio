import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { SiteShell } from "@/components/layout"
import { ServiceDetail } from "@/components/services/service-detail"
import {
  getAllServiceIds,
  getProjectsByServiceId,
  getServiceById,
  serviceComplementaryIds,
  serviceExtraLinks,
  siteConfig,
} from "@/data"
import {
  buildBreadcrumbJsonLd,
  buildFaqPageJsonLd,
  buildServicePageJsonLd,
} from "@/lib/seo"

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

  const title = service.content?.metaTitle ?? service.title
  const description =
    service.content?.metaDescription ?? service.description

  return {
    title,
    description,
    alternates: { canonical: `/services/${service.id}` },
    openGraph: {
      title: `${title} | ${siteConfig.fullName}`,
      description,
      type: "website",
      locale: "fr_MA",
      url: `/services/${service.id}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.fullName}`,
      description,
    },
  }
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { id } = await params
  const service = getServiceById(id)
  if (!service) notFound()

  const relatedProjects = getProjectsByServiceId(service.id)
  const complementaryServices = (serviceComplementaryIds[service.id] ?? [])
    .map((serviceId) => getServiceById(serviceId))
    .filter((item): item is NonNullable<typeof item> => Boolean(item))
  const extraLinks = serviceExtraLinks[service.id] ?? []
  const crumbs = [
    { name: "Accueil", path: "/" },
    { name: "Services", path: "/#services" },
    { name: service.title, path: `/services/${service.id}` },
  ]
  const jsonLd = [
    buildServicePageJsonLd(service),
    buildBreadcrumbJsonLd(crumbs),
    ...(service.content?.faq?.length
      ? [buildFaqPageJsonLd(service.content.faq)]
      : []),
  ]

  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <ServiceDetail
        service={service}
        relatedProjects={relatedProjects}
        complementaryServices={complementaryServices}
        extraLinks={extraLinks}
      />
    </SiteShell>
  )
}

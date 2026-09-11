import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { SiteShell } from "@/components/layout"
import { ServiceDetail } from "@/components/services/service-detail"
import { getAllServiceIds, getServiceById, siteConfig } from "@/data"

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

  return {
    title: service.title,
    description: service.description,
    openGraph: {
      title: `${service.title} | ${siteConfig.fullName}`,
      description: service.description,
      type: "website",
    },
  }
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { id } = await params
  const service = getServiceById(id)
  if (!service) notFound()

  return (
    <SiteShell>
      <ServiceDetail service={service} />
    </SiteShell>
  )
}

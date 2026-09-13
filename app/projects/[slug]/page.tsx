import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { SiteShell } from "@/components/layout"
import {
  ProjectHero,
  ProjectOverview,
  ProjectFeatures,
  ProjectChallenges,
  ProjectSidebar,
  ProjectGallery,
  RelatedProjects,
  RelatedServices,
  ProjectServiceOffer,
} from "@/components/projects"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import {
  getAllProjectSlugs,
  getProjectBySlug,
  getRelatedProjects,
  getProjectRelatedServiceIds,
  getServiceById,
} from "@/data"
import { buildBreadcrumbJsonLd, buildProjectPageJsonLd } from "@/lib/seo"

type ProjectPageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return { title: "Projet introuvable" }

  const title = `${project.title} — ${project.type}`
  const description = project.shortDescription

  return {
    title,
    description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${title} | Nawfal ADDAOUI`,
      description,
      images: [project.coverImage],
      type: "article",
      locale: "fr_MA",
      url: `/projects/${project.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Nawfal ADDAOUI`,
      description,
      images: [project.coverImage],
    },
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) notFound()

  const related = getRelatedProjects(slug)
  const relatedServiceIds = getProjectRelatedServiceIds(project)
  const primaryService = getServiceById(
    relatedServiceIds[0] ?? project.relatedServiceId
  )
  const relatedServices = relatedServiceIds
    .map((id) => getServiceById(id))
    .filter((service): service is NonNullable<typeof service> => Boolean(service))
  const jsonLd = buildProjectPageJsonLd(project)
  const crumbs = [
    { name: "Accueil", path: "/" },
    { name: "Projets", path: "/#projects" },
    { name: project.title, path: `/projects/${project.slug}` },
  ]

  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([jsonLd, buildBreadcrumbJsonLd(crumbs)]),
        }}
      />
      <article className="container-ln pb-16 pt-24 sm:pb-20 sm:pt-28 md:pt-32">
        <Breadcrumbs
          items={[
            { label: "Accueil", href: "/" },
            { label: "Projets", href: "/#projects" },
            { label: project.title },
          ]}
        />
        <ProjectHero project={project} />

        <div className="mt-12 flex flex-col gap-10 sm:mt-16 sm:gap-12 lg:mt-20 lg:flex-row lg:gap-16">
          <div className="space-y-12 sm:space-y-16 lg:w-2/3">
            <ProjectOverview project={project} />
            <ProjectFeatures features={project.features} />
            {project.challenges && (
              <ProjectChallenges challenges={project.challenges} />
            )}
          </div>

          <div className="lg:w-1/3">
            <div className="lg:sticky lg:top-28">
              <ProjectSidebar
                project={project}
                primaryService={primaryService}
              />
            </div>
          </div>
        </div>

        <ProjectGallery images={project.gallery} title={project.title} />

        {primaryService && relatedServices.length > 0 && (
          <RelatedServices
            projectTitle={project.title}
            primaryService={primaryService}
            services={relatedServices}
          />
        )}

        <RelatedProjects projects={related} />
      </article>

      {primaryService && (
        <ProjectServiceOffer
          projectTitle={project.title}
          projectSlug={project.slug}
          service={primaryService}
        />
      )}
    </SiteShell>
  )
}

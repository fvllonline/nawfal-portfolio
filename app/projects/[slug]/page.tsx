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
import {
  getAllProjectSlugs,
  getProjectBySlug,
  getRelatedProjects,
  getProjectRelatedServiceIds,
  getServiceById,
} from "@/data"
import { buildProjectPageJsonLd } from "@/lib/seo"

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

  const description = `${project.shortDescription} Étude de cas par Nawfal Addaoui, développeur Full-Stack à Casablanca.`

  return {
    title: `${project.title} | Étude de cas — Full-Stack Casablanca`,
    description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.title} | Nawfal Addaoui — Casablanca`,
      description: project.shortDescription,
      images: [project.coverImage],
      type: "article",
      locale: "fr_MA",
      url: `/projects/${project.slug}`,
    },
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) notFound()

  const related = getRelatedProjects(slug)
  const primaryService = getServiceById(project.relatedServiceId)
  const relatedServices = getProjectRelatedServiceIds(project)
    .map((id) => getServiceById(id))
    .filter((service): service is NonNullable<typeof service> => Boolean(service))
  const jsonLd = buildProjectPageJsonLd(project)

  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="container-ln pb-16 pt-24 sm:pb-20 sm:pt-28 md:pt-32">
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
              <ProjectSidebar project={project} />
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

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
} from "@/components/projects"
import {
  getAllProjectSlugs,
  getProjectBySlug,
  getRelatedProjects,
} from "@/data"

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

  return {
    title: project.title,
    description: project.shortDescription,
    openGraph: {
      title: `${project.title} | Nawfal ADDAOUI`,
      description: project.shortDescription,
      images: [project.coverImage],
      type: "article",
    },
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) notFound()

  const related = getRelatedProjects(slug)

  return (
    <SiteShell>
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
        <RelatedProjects projects={related} />
      </article>
    </SiteShell>
  )
}

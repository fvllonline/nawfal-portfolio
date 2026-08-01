"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { getFeaturedProjects } from "@/data"
import { ProjectCard } from "@/components/projects/project-card"
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/motion"

export function ProjectsSection() {
  const projects = getFeaturedProjects()

  return (
    <section id="projects" className="section-ln">
      <div className="container-ln">
        <FadeIn className="mb-10 flex flex-col gap-4 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="label-ln">Work</p>
            <h2 className="heading-lg mt-2">Featured Projects</h2>
            <p className="body-md mt-2">A showcase of recent engineering work.</p>
          </div>
          <Link
            href="/projects/monpasstcf"
            className="label-md-ln group inline-flex items-center gap-2 self-start text-primary transition-all hover:drop-shadow-[0_0_8px_rgba(110,255,192,0.4)] sm:self-auto"
          >
            View Archive
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </FadeIn>

        <Stagger className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <StaggerItem key={project.slug}>
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}

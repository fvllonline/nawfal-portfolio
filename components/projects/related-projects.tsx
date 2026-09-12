"use client"

import Link from "next/link"
import Image from "next/image"
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/motion"
import { LazyMount } from "@/components/ui/lazy-mount"
import type { Project } from "@/lib/types"

export function RelatedProjects({ projects }: { projects: Project[] }) {
  if (!projects.length) return null

  return (
    <LazyMount minHeight={280} rootMargin="200px 0px">
      <FadeIn className="mt-16 border-t border-border pt-16 md:mt-24">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
          <h2 className="heading-lg text-primary">Projets similaires</h2>
          <Link
            href="/#projects"
            className="label-md-ln shrink-0 text-foreground-muted transition-colors hover:text-primary"
          >
            <span className="sm:hidden">Tout voir →</span>
            <span className="hidden sm:inline">Voir tous les projets →</span>
          </Link>
        </div>

        <Stagger className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {projects.map((project) => (
            <StaggerItem key={project.slug}>
              <Link href={`/projects/${project.slug}`} className="group block">
                <div className="glass-card relative mb-4 aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    loading="lazy"
                    className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:opacity-70"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    quality={70}
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                    <span className="rounded-full border border-primary bg-background/90 px-4 py-2 font-mono text-sm text-primary">
                      Voir l’étude de cas
                    </span>
                  </div>
                </div>
                <h3 className="heading-sm transition-colors group-hover:text-primary">
                  {project.title}
                </h3>
                <p className="body-md mt-1 line-clamp-1">
                  {project.shortDescription}
                </p>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </FadeIn>
    </LazyMount>
  )
}

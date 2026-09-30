"use client"

import Link from "next/link"
import Image from "next/image"
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/motion"
import { LazyMount } from "@/components/ui/lazy-mount"
import type { Project } from "@/lib/types"

export function RelatedProjects({ projects }: { projects: Project[] }) {
  if (!projects.length) return null

  return (
    <LazyMount minHeight={200} rootMargin="200px 0px">
      <FadeIn className="mt-12 border-t border-border pt-10 md:mt-16 md:pt-12">
        <div className="mb-5 flex flex-col gap-2 sm:mb-6 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="heading-sm text-primary sm:text-xl">
            Projets similaires
          </h2>
          <Link
            href="/projects"
            className="label-md-ln shrink-0 text-[11px] text-foreground-muted transition-colors hover:text-primary"
          >
            <span className="sm:hidden">Tout voir →</span>
            <span className="hidden sm:inline">Voir tous les projets →</span>
          </Link>
        </div>

        <Stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 md:grid-cols-3">
          {projects.map((project) => (
            <StaggerItem key={project.slug}>
              <article className="group">
                <div className="glass-card relative mb-2.5 aspect-[16/10] overflow-hidden rounded-xl bg-muted">
                  <Image
                    src={project.coverImage}
                    alt=""
                    fill
                    loading="lazy"
                    className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:opacity-70"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 280px"
                    quality={65}
                  />
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                    <span className="rounded-full border border-primary bg-background/90 px-3 py-1 font-mono text-[10px] text-primary">
                      Étude de cas
                    </span>
                  </div>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="absolute inset-0"
                    aria-label={`Découvrir ${project.title}`}
                  />
                </div>
                <h3 className="font-display text-sm font-semibold leading-snug sm:text-[15px]">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="transition-colors hover:text-primary group-hover:text-primary"
                  >
                    {project.title}
                  </Link>
                </h3>
                <p className="mt-1 line-clamp-1 font-mono text-[10px] text-foreground-muted sm:text-[11px]">
                  {project.type}
                </p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </FadeIn>
    </LazyMount>
  )
}

"use client"

import { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { projects } from "@/data"
import { FadeIn } from "@/components/ui/motion"
import { LazyMount } from "@/components/ui/lazy-mount"
import { cn } from "@/lib/utils"
import type { Project } from "@/lib/types"

const PAGE_SIZE = 3
const AUTO_MS = 7000

function chunkProjects(items: Project[], size: number) {
  const pages: Project[][] = []
  for (let i = 0; i < items.length; i += size) {
    pages.push(items.slice(i, i + size))
  }
  return pages
}

const pages = chunkProjects(projects, PAGE_SIZE)

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="glass-card group grid overflow-hidden rounded-2xl border border-border transition-all duration-300 hover:border-primary/35 hover:shadow-[0_0_40px_rgba(0,217,181,0.08)] md:grid-cols-2">
      <Link
        href={`/projects/${project.slug}`}
        className="relative aspect-[16/10] overflow-hidden bg-muted md:aspect-auto md:min-h-[240px]"
        aria-label={`Découvrir ${project.title}`}
      >
        <Image
          src={project.coverImage}
          alt=""
          fill
          loading="lazy"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
          quality={75}
        />
        {project.inProgress && (
          <span className="absolute left-3 top-3 rounded-full border border-primary/40 bg-background/80 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-primary backdrop-blur-md">
            En cours
          </span>
        )}
      </Link>

      <div className="flex flex-col justify-center p-6 sm:p-8">
        <p className="label-ln">{project.type}</p>
        <h3 className="heading-sm mt-2 text-xl sm:text-2xl">
          <Link
            href={`/projects/${project.slug}`}
            className="transition-colors hover:text-primary group-hover:text-primary"
          >
            {project.title}
          </Link>
        </h3>
        <p className="body-md mt-3 line-clamp-3">{project.shortDescription}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <li key={tech} className="chip-muted">
              {tech}
            </li>
          ))}
        </ul>
        <Link
          href={`/projects/${project.slug}`}
          className="label-md-ln mt-6 inline-flex items-center gap-2 text-primary hover:underline"
        >
          Voir le projet
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  )
}

export function ProjectsSection({
  className,
}: {
  className?: string
} = {}) {
  const reduce = useReducedMotion()
  const [page, setPage] = useState(0)
  const [paused, setPaused] = useState(false)
  const pageCount = pages.length

  const goTo = useCallback(
    (index: number) => {
      setPage(((index % pageCount) + pageCount) % pageCount)
    },
    [pageCount]
  )

  const next = useCallback(() => goTo(page + 1), [goTo, page])
  const prev = useCallback(() => goTo(page - 1), [goTo, page])

  useEffect(() => {
    if (reduce || paused || pageCount <= 1) return
    const id = window.setInterval(() => {
      setPage((current) => (current + 1) % pageCount)
    }, AUTO_MS)
    return () => window.clearInterval(id)
  }, [reduce, paused, pageCount])

  return (
    <section
      id="projects"
      className={cn("section-ln relative overflow-hidden", className)}
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image
          src="/bg/bg_projets.png"
          alt=""
          fill
          loading="lazy"
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-background/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/55 to-background/85" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="container-ln relative z-10">
        <FadeIn className="mb-10 flex max-w-3xl flex-col gap-6 sm:mb-14 sm:flex-row sm:items-end sm:justify-between sm:max-w-none">
          <div className="max-w-2xl">
            <p className="label-ln">Réalisations</p>
            <h2 className="heading-lg mt-3">
              Des projets concrets,
              <br />
              <span className="text-primary">une vraie valeur</span>
            </h2>
            <p className="body-md mt-4">
              Études de cas : apps, e-commerce et sites vitrines livrés pour des
              clients et partenaires. Trois projets à la fois, tous accessibles
              via le carrousel.
            </p>
          </div>

          {pageCount > 1 && (
            <div className="flex items-center gap-2 self-start sm:self-auto">
              <button
                type="button"
                onClick={prev}
                aria-label="Projets précédents"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-border text-foreground-muted transition-colors hover:border-primary/40 hover:text-primary"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Projets suivants"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-border text-foreground-muted transition-colors hover:border-primary/40 hover:text-primary"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </FadeIn>

        <LazyMount minHeight={480} rootMargin="200px 0px">
          <div
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocusCapture={() => setPaused(true)}
            onBlurCapture={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
                setPaused(false)
              }
            }}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={page}
                initial={reduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-6 md:space-y-8"
                aria-live="polite"
              >
                {pages[page]?.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </motion.div>
            </AnimatePresence>

            {pageCount > 1 && (
              <div
                className="mt-8 flex items-center justify-center gap-2"
                role="tablist"
                aria-label="Pages de projets"
              >
                {pages.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    role="tab"
                    aria-selected={index === page}
                    aria-label={`Afficher les projets ${index * PAGE_SIZE + 1} à ${Math.min((index + 1) * PAGE_SIZE, projects.length)}`}
                    onClick={() => goTo(index)}
                    className={cn(
                      "h-2 rounded-full transition-all",
                      index === page
                        ? "w-8 bg-primary"
                        : "w-2 bg-foreground-muted/40 hover:bg-primary/50"
                    )}
                  />
                ))}
              </div>
            )}
          </div>
        </LazyMount>
      </div>
    </section>
  )
}

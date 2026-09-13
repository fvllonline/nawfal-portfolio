"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import type { Project } from "@/lib/types"
import { easeOutExpo } from "@/components/ui/motion"

type ProjectCardProps = {
  project: Project
  /** When false, skip the cover fetch (off-screen carousel slides). */
  loadImage?: boolean
}

export function ProjectCard({ project, loadImage = true }: ProjectCardProps) {
  const href = `/projects/${project.slug}`

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: easeOutExpo }}
      className="h-full"
    >
      <article className="glass-card group flex h-full flex-col overflow-hidden rounded-2xl transition-colors duration-300 hover:border-primary/40">
        <div className="relative aspect-[16/10] overflow-hidden bg-muted">
          {loadImage ? (
            <Image
              src={project.coverImage}
              alt=""
              fill
              loading="lazy"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              quality={70}
            />
          ) : null}
          {project.inProgress && (
            <span className="pointer-events-none absolute left-3 top-3 z-10 rounded-full border border-secondary/40 bg-background/80 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-secondary-bright backdrop-blur-md">
              En cours
            </span>
          )}
          <div className="pointer-events-none absolute inset-0 z-[1] flex items-center justify-center bg-primary/20 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
            <span className="rounded-full bg-background px-6 py-2 font-mono text-sm text-primary">
              Voir les détails
            </span>
          </div>
          <Link
            href={href}
            className="absolute inset-0 z-[2]"
            aria-label={`Découvrir ${project.title}`}
          />
        </div>
        <div className="p-6">
          <div className="mb-4 flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((tech) => (
              <span key={tech} className="chip-muted">
                {tech}
              </span>
            ))}
          </div>
          <h3 className="heading-sm">
            <Link
              href={href}
              className="transition-colors hover:text-primary group-hover:text-primary"
            >
              {project.title}
            </Link>
          </h3>
          <p className="body-md mt-2 line-clamp-2">{project.shortDescription}</p>
        </div>
      </article>
    </motion.div>
  )
}

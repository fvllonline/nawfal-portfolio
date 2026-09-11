"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"
import type { Project } from "@/lib/types"
import { easeOutExpo } from "@/components/ui/motion"

export function ProjectHero({ project }: { project: Project }) {
  const reduce = useReducedMotion()
  const enter = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.55, delay, ease: easeOutExpo },
        }

  return (
    <div>
      <motion.div {...enter(0)}>
        <Link
          href="/#projects"
          className="label-md-ln group mb-8 inline-flex items-center gap-2 text-primary transition-opacity hover:opacity-80"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Retour aux projets
        </Link>
      </motion.div>

      <motion.h1 {...enter(0.06)} className="heading-display gradient-text">
        {project.title}
      </motion.h1>

      {project.inProgress && (
        <motion.p
          {...enter(0.09)}
          className="mt-4 inline-flex items-center rounded-full border border-secondary/40 bg-secondary/10 px-3 py-1 font-mono text-xs uppercase tracking-wider text-secondary-bright"
        >
          En cours — pas encore terminé à 100 %
        </motion.p>
      )}

      <motion.p {...enter(0.12)} className="body-lg mt-4 max-w-2xl">
        {project.subtitle}
      </motion.p>

      <motion.div
        {...enter(0.18)}
        className="glass-card relative mt-12 aspect-[16/10] overflow-hidden rounded-2xl md:aspect-[21/9]"
      >
        <Image
          src={project.coverImage}
          alt={`Couverture de ${project.title}`}
          fill
          priority
          fetchPriority="high"
          quality={75}
          className="object-cover"
          sizes="(max-width: 1280px) 100vw, 1200px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-40" />
      </motion.div>
    </div>
  )
}

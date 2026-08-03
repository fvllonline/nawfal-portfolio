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
          Back to Projects
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
          In progress — not 100% finished yet
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
          alt={`${project.title} cover`}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-40" />
      </motion.div>
    </div>
  )
}

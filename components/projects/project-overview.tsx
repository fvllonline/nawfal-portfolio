"use client"

import { FadeIn } from "@/components/ui/motion"
import type { Project } from "@/lib/types"

export function ProjectOverview({ project }: { project: Project }) {
  return (
    <FadeIn>
      <article>
        <h2 className="heading-lg mb-6 text-primary">Aperçu</h2>
        <div className="space-y-4 body-lg leading-relaxed">
          {project.description.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>
      </article>
    </FadeIn>
  )
}

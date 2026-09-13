"use client"

import Link from "next/link"
import { ExternalLink, Github, Rocket } from "lucide-react"
import { FadeIn } from "@/components/ui/motion"
import { getServiceShortLabel } from "@/data"
import type { Project, Service } from "@/lib/types"

export function ProjectSidebar({
  project,
  primaryService,
}: {
  project: Project
  primaryService?: Service
}) {
  return (
    <FadeIn delay={0.15} className="space-y-6">
      <aside className="glass-card space-y-6 rounded-2xl p-6 md:p-8">
        <div>
          <p className="label-ln mb-3 text-foreground-muted">Stack technique</p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="chip-mint">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 border-y border-border py-6">
          <Meta label="Type" value={project.type} />
          <Meta label="Année" value={project.year} />
          <Meta label="Rôle" value={project.role} className="col-span-2" />
          {project.inProgress && (
            <Meta
              label="Statut"
              value="En cours — pas encore terminé"
              className="col-span-2"
            />
          )}
        </div>

        {primaryService && (
          <div>
            <p className="label-ln mb-2 text-foreground-muted">
              Service principal
            </p>
            <Link
              href={`/services/${primaryService.id}`}
              className="text-base font-medium text-primary transition-colors hover:underline"
            >
              {getServiceShortLabel(primaryService.id, primaryService.title)}
            </Link>
          </div>
        )}

        <div className="flex flex-col gap-3">
          {project.liveUrl ? (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-bg inline-flex w-full items-center justify-center gap-2 rounded-xl py-4 font-mono text-sm text-white transition-all hover:shadow-[0_0_20px_rgba(110,255,192,0.4)] active:scale-[0.98]"
            >
              <Rocket className="h-4 w-4" />
              {project.inProgress ? "Aperçu en ligne" : "Démo en ligne"}
              <ExternalLink className="h-3.5 w-3.5 opacity-70" />
            </Link>
          ) : (
            <span className="inline-flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-xl border border-border py-4 font-mono text-sm text-foreground-muted/50">
              Démo en ligne — bientôt
            </span>
          )}

          {project.githubUrl ? (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border-strong py-4 font-mono text-sm text-foreground transition-all hover:border-primary/50 hover:bg-white/5 active:scale-[0.98]"
            >
              <Github className="h-4 w-4" />
              Dépôt GitHub
            </Link>
          ) : null}
        </div>
      </aside>

      {project.quote && (
        <blockquote className="glass-card rounded-2xl border-l-4 border-primary p-6 font-body italic text-foreground-muted">
          &ldquo;{project.quote}&rdquo;
        </blockquote>
      )}
    </FadeIn>
  )
}

function Meta({
  label,
  value,
  className,
}: {
  label: string
  value: string
  className?: string
}) {
  return (
    <div className={className}>
      <p className="label-ln mb-1 text-foreground-muted">{label}</p>
      <p className="text-base font-medium text-foreground">{value}</p>
    </div>
  )
}

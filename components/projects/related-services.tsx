"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/motion"
import { serviceIcons } from "@/components/services/service-icons"
import type { Service } from "@/lib/types"
import { cn } from "@/lib/utils"

type RelatedServicesProps = {
  projectTitle: string
  primaryService: Service
  services: Service[]
}

export function RelatedServices({
  projectTitle,
  primaryService,
  services,
}: RelatedServicesProps) {
  if (!services.length) return null

  return (
    <FadeIn className="mt-16 border-t border-border pt-16 md:mt-24">
      <div className="mb-8 max-w-2xl">
        <p className="label-ln">Services associés</p>
        <h2 className="heading-lg mt-2 text-primary">
          Services utilisés sur {projectTitle}
        </h2>
        <p className="body-md mt-3">
          Le service principal et les offres complémentaires pour un projet
          similaire.
        </p>
      </div>

      <Stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const Icon = serviceIcons[service.icon]
          const isPrimary = service.id === primaryService.id

          return (
            <StaggerItem key={service.id}>
              <Link
                href={`/services/${service.id}`}
                className={cn(
                  "glass-card group relative flex h-full flex-col rounded-2xl border p-5 transition-colors",
                  isPrimary
                    ? "border-primary/50 shadow-[0_0_24px_rgba(0,229,160,0.12)]"
                    : "border-border hover:border-primary/40"
                )}
              >
                {isPrimary && (
                  <span className="absolute -top-2.5 left-4 rounded-full bg-primary px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-primary-foreground">
                    Recommandé
                  </span>
                )}
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="heading-sm text-base transition-colors group-hover:text-primary">
                  {service.title}
                </h3>
                <p className="body-md mt-2 flex-1 line-clamp-3 text-sm">
                  {service.description}
                </p>
                <span className="label-md-ln mt-4 inline-flex items-center gap-2 text-primary">
                  Voir les packs
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </StaggerItem>
          )
        })}
      </Stagger>
    </FadeIn>
  )
}

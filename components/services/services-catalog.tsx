"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { services } from "@/data"
import { serviceIcons } from "@/components/services/service-icons"
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/motion"
import type { Service, ServicePack } from "@/lib/types"
import { cn } from "@/lib/utils"

type ServiceGroup = {
  id: string
  label: string
  hint: string
  serviceIds: string[]
}

/** Calm editorial groups — not a wall of identical cards */
const serviceGroups: ServiceGroup[] = [
  {
    id: "create",
    label: "Créer",
    hint: "Sites, apps et boutiques",
    serviceIds: [
      "website",
      "ecommerce",
      "web_app",
      "mobile_app",
      "wordpress",
    ],
  },
  {
    id: "shape",
    label: "Façonner",
    hint: "Design, UX et modernisation",
    serviceIds: ["uiux", "redesign"],
  },
  {
    id: "grow",
    label: "Faire grandir",
    hint: "Visibilité et acquisition",
    serviceIds: ["seo", "traffic_managing"],
  },
  {
    id: "support",
    label: "Soutenir",
    hint: "API, audit et maintenance",
    serviceIds: ["api_backend", "consulting", "maintenance"],
  },
]

function formatStartingPrice(pack: ServicePack) {
  const amount = new Intl.NumberFormat("fr-MA").format(pack.price)
  const suffix = pack.billing === "monthly" ? " / mois" : ""
  return `${amount} ${pack.currency}${suffix}`
}

function startingPack(service: Service) {
  return [...service.packs].sort((a, b) => a.price - b.price)[0]
}

function resolveGroup(group: ServiceGroup) {
  return group.serviceIds
    .map((id) => services.find((s) => s.id === id))
    .filter((s): s is Service => Boolean(s))
}

export function ServicesCatalog() {
  let index = 0

  return (
    <div className="space-y-16 sm:space-y-20 lg:space-y-24">
      {serviceGroups.map((group) => {
        const items = resolveGroup(group)
        if (!items.length) return null

        return (
          <FadeIn key={group.id}>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
              {/* Sticky group label — breathing room */}
              <div className="lg:col-span-3">
                <div className="lg:sticky lg:top-28">
                  <p className="label-ln">{group.label}</p>
                  <p className="mt-2 max-w-[14rem] font-mono text-xs leading-relaxed text-foreground-muted">
                    {group.hint}
                  </p>
                </div>
              </div>

              {/* Soft list — no heavy card wall */}
              <Stagger
                className="divide-y divide-border/70 border-y border-border/70 lg:col-span-9"
                stagger={0.05}
              >
                {items.map((service) => {
                  index += 1
                  const n = String(index).padStart(2, "0")
                  const Icon = serviceIcons[service.icon]
                  const pack = startingPack(service)

                  return (
                    <StaggerItem key={service.id}>
                      <Link
                        href={`/services/${service.id}`}
                        className={cn(
                          "group grid grid-cols-[auto_1fr_auto] items-center gap-4 py-6 transition-colors sm:gap-6 sm:py-7",
                          "hover:bg-primary/[0.03]"
                        )}
                      >
                        <span className="font-mono text-[11px] tabular-nums text-foreground-muted/70 sm:text-xs">
                          {n}
                        </span>

                        <div className="flex min-w-0 items-start gap-4 sm:gap-5">
                          <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border/80 bg-background/40 text-primary transition-colors group-hover:border-primary/35 group-hover:bg-primary/10 sm:h-11 sm:w-11">
                            <Icon
                              className="h-4 w-4 sm:h-[18px] sm:w-[18px]"
                              aria-hidden
                            />
                          </span>
                          <div className="min-w-0">
                            <h2 className="font-display text-base font-semibold leading-snug text-foreground transition-colors group-hover:text-primary sm:text-lg">
                              {service.title}
                            </h2>
                            <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-foreground-muted sm:line-clamp-1">
                              {service.description}
                            </p>
                            {pack && (
                              <p className="mt-2 font-mono text-[11px] text-foreground-muted sm:hidden">
                                Dès{" "}
                                <span className="text-primary">
                                  {formatStartingPrice(pack)}
                                </span>
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center gap-3 sm:gap-5">
                          {pack && (
                            <p className="hidden text-right font-mono text-xs text-foreground-muted sm:block">
                              Dès{" "}
                              <span className="text-primary">
                                {formatStartingPrice(pack)}
                              </span>
                            </p>
                          )}
                          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground-muted transition-all group-hover:border-primary/40 group-hover:bg-primary/10 group-hover:text-primary">
                            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </span>
                        </div>
                      </Link>
                    </StaggerItem>
                  )
                })}
              </Stagger>
            </div>
          </FadeIn>
        )
      })}
    </div>
  )
}

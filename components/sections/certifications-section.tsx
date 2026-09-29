"use client"

import Image from "next/image"
import { Eye, Globe, Code, Shield, type LucideIcon } from "lucide-react"
import { certifications } from "@/data"
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/motion"
import { LazyMount } from "@/components/ui/lazy-mount"
import type { Certification } from "@/lib/types"
import { cn } from "@/lib/utils"

const categoryMeta: Record<
  Certification["category"],
  { icon: LucideIcon; label: string; hint: string }
> = {
  Langue: {
    icon: Globe,
    label: "Langues",
    hint: "Communication & anglais technique",
  },
  Programmation: {
    icon: Code,
    label: "Programmation",
    hint: "Fondamentaux JS & Python",
  },
  Sécurité: {
    icon: Shield,
    label: "Cybersécurité",
    hint: "Bases & parcours analyste",
  },
  Autre: {
    icon: Code,
    label: "Autre",
    hint: "",
  },
}

const categoryOrder: Certification["category"][] = [
  "Langue",
  "Programmation",
  "Sécurité",
]

function openCert(cert: Certification) {
  if (cert.pdfPath) {
    window.open(cert.pdfPath, "_blank", "noopener,noreferrer")
    return
  }
  cert.pdfPaths?.forEach((path) =>
    window.open(path, "_blank", "noopener,noreferrer")
  )
}

function CertRow({ cert }: { cert: Certification }) {
  const hasPdf = Boolean(cert.pdfPath || cert.pdfPaths?.length)

  return (
    <article
      className={cn(
        "glass-card group flex items-start gap-4 rounded-2xl border border-border p-4 transition-all duration-300",
        "hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[0_0_28px_rgba(0,217,181,0.08)]",
        hasPdf && "cursor-pointer"
      )}
      onClick={hasPdf ? () => openCert(cert) : undefined}
      onKeyDown={
        hasPdf
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault()
                openCert(cert)
              }
            }
          : undefined
      }
      role={hasPdf ? "button" : undefined}
      tabIndex={hasPdf ? 0 : undefined}
      aria-label={
        hasPdf ? `Voir le certificat ${cert.name}` : undefined
      }
    >
      <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-border bg-white">
        <Image
          src={cert.logo}
          alt=""
          fill
          loading="lazy"
          className="object-contain p-1.5"
          sizes="56px"
        />
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="font-display text-sm font-semibold leading-snug text-foreground sm:text-base">
          {cert.name}
        </h3>
        <p className="mt-1 font-mono text-[11px] text-foreground-muted">
          {cert.institution}
        </p>
        {hasPdf && (
          <span className="label-md-ln mt-3 inline-flex items-center gap-1.5 text-[11px] text-primary opacity-80 transition-opacity group-hover:opacity-100">
            <Eye className="h-3.5 w-3.5" aria-hidden />
            Voir le certificat
          </span>
        )}
      </div>
    </article>
  )
}

export function CertificationsSection() {
  const grouped = categoryOrder
    .map((category) => ({
      category,
      items: certifications.filter((c) => c.category === category),
      meta: categoryMeta[category],
    }))
    .filter((g) => g.items.length > 0)

  return (
    <section id="certifications" className="section-ln relative overflow-hidden">
      {/* Subtle ambient without dedicated bg asset */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background-secondary/40 to-background" />
        <div className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/[0.04] blur-3xl" />
      </div>

      <div className="container-ln relative z-10">
        <FadeIn className="mb-10 max-w-2xl sm:mb-14 sm:mx-auto sm:text-center">
          <p className="label-ln">Qualifications</p>
          <h2 className="heading-lg mt-3">
            Mes <span className="text-primary">certifications</span>
          </h2>
          <p className="body-md mt-4 sm:mx-auto sm:max-w-xl">
            Langues, programmation et cybersécurité : credentials vérifiables,
            issus de parcours Cisco Networking Academy et Institut Français.
          </p>
          <p className="mt-4 font-mono text-xs text-foreground-muted">
            {certifications.length} certifications
          </p>
        </FadeIn>

        <LazyMount minHeight={320} rootMargin="180px 0px">
          <Stagger
            className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6 lg:gap-8"
            stagger={0.1}
          >
            {grouped.map(({ category, items, meta }) => {
              const Icon = meta.icon
              return (
                <StaggerItem key={category}>
                  <div className="flex h-full flex-col">
                    <div className="mb-4 flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                        <Icon className="h-[18px] w-[18px]" aria-hidden />
                      </div>
                      <div>
                        <h3 className="heading-sm text-base sm:text-lg">
                          {meta.label}
                        </h3>
                        {meta.hint && (
                          <p className="mt-0.5 font-mono text-[10px] text-foreground-muted sm:text-[11px]">
                            {meta.hint}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col gap-3">
                      {items.map((cert) => (
                        <CertRow key={cert.id} cert={cert} />
                      ))}
                    </div>
                  </div>
                </StaggerItem>
              )
            })}
          </Stagger>
        </LazyMount>
      </div>
    </section>
  )
}

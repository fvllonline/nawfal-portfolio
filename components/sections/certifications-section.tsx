"use client"

import Image from "next/image"
import { Eye, Globe, Code, Shield } from "lucide-react"
import { certifications } from "@/data"
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/motion"
import { LazyMount } from "@/components/ui/lazy-mount"
import type { Certification } from "@/lib/types"

const categoryIcon = {
  Langue: Globe,
  Programmation: Code,
  Sécurité: Shield,
  Autre: Code,
} as const

function openCert(cert: Certification) {
  if (cert.pdfPath) {
    window.open(cert.pdfPath, "_blank", "noopener,noreferrer")
    return
  }
  cert.pdfPaths?.forEach((path) =>
    window.open(path, "_blank", "noopener,noreferrer")
  )
}

export function CertificationsSection() {
  return (
    <section id="certifications" className="section-ln">
      <div className="container-ln">
        <FadeIn className="mb-10 text-center sm:mb-12">
          <p className="label-ln">Qualifications</p>
          <h2 className="heading-lg mt-3">
            Mes <span className="text-primary">certifications</span>
          </h2>
          <p className="body-md mx-auto mt-4 max-w-xl">
            Langues, programmation et cybersécurité.
          </p>
        </FadeIn>

        <LazyMount minHeight={240} rootMargin="180px 0px">
          <Stagger className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
            {certifications.map((cert) => {
              const Icon = categoryIcon[cert.category]
              return (
                <StaggerItem key={cert.id}>
                  <article className="glass-card group flex h-full flex-col items-center rounded-2xl border border-border p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 sm:p-5">
                    <div className="relative mb-3 h-12 w-12 overflow-hidden rounded-xl bg-muted">
                      <Image
                        src={cert.logo}
                        alt={cert.institution}
                        fill
                        loading="lazy"
                        className="object-contain p-1.5"
                        sizes="48px"
                      />
                    </div>
                    <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-4 w-4" aria-hidden />
                    </div>
                    <h3 className="font-display text-sm font-semibold leading-snug text-foreground sm:text-base">
                      {cert.name}
                    </h3>
                    <p className="mt-1 line-clamp-2 font-mono text-[10px] text-foreground-muted">
                      {cert.institution}
                    </p>
                    <span className="mt-2 rounded-full border border-primary/20 bg-primary/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-primary">
                      {cert.category}
                    </span>
                    {(cert.pdfPath || cert.pdfPaths) && (
                      <button
                        type="button"
                        onClick={() => openCert(cert)}
                        className="label-md-ln mt-auto inline-flex items-center gap-1.5 pt-4 text-[11px] text-primary hover:underline"
                      >
                        <Eye className="h-3.5 w-3.5" aria-hidden />
                        Voir
                      </button>
                    )}
                  </article>
                </StaggerItem>
              )
            })}
          </Stagger>
        </LazyMount>
      </div>
    </section>
  )
}

"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import { Eye, Globe, Code, Shield, ChevronLeft, ChevronRight } from "lucide-react"
import { certifications } from "@/data"
import { FadeIn } from "@/components/ui/motion"
import { LazyMount } from "@/components/ui/lazy-mount"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import { useAutoplayInView } from "@/hooks/use-autoplay-in-view"
import type { Certification } from "@/lib/types"
import { cn } from "@/lib/utils"

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
  const [api, setApi] = useState<CarouselApi>()
  const [selected, setSelected] = useState(0)
  const [snapCount, setSnapCount] = useState(0)
  const [autoplayPlugin] = useState(() =>
    Autoplay({
      delay: 6500,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  )

  useAutoplayInView(api)

  useEffect(() => {
    if (!api) return

    const onSelect = () => {
      setSelected(api.selectedScrollSnap())
      setSnapCount(api.scrollSnapList().length)
    }

    onSelect()
    api.on("select", onSelect)
    api.on("reInit", onSelect)

    return () => {
      api.off("select", onSelect)
      api.off("reInit", onSelect)
    }
  }, [api])

  return (
    <section id="certifications" className="section-ln">
      <div className="container-ln">
        <FadeIn className="mb-10 text-center sm:mb-14">
          <p className="label-ln">Qualifications</p>
          <h2 className="heading-lg mt-2">Certifications</h2>
          <p className="body-md mx-auto mt-4 max-w-2xl">
            Certifications professionnelles attestant d&apos;un apprentissage
            continu et d&apos;une expertise technique.
          </p>
          <div className="mt-6 flex justify-center gap-2">
            <button
              type="button"
              aria-label="Certifications précédentes"
              onClick={() => api?.scrollPrev()}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-border text-foreground-muted transition-colors hover:border-primary/40 hover:text-primary"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Certifications suivantes"
              onClick={() => api?.scrollNext()}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-border text-foreground-muted transition-colors hover:border-primary/40 hover:text-primary"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </FadeIn>

        <LazyMount minHeight={300}>
          <FadeIn>
            <Carousel
              setApi={setApi}
              opts={{
                align: "start",
                loop: true,
                dragFree: false,
              }}
              plugins={[autoplayPlugin]}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {certifications.map((cert) => {
                  const Icon = categoryIcon[cert.category]
                  return (
                    <CarouselItem
                      key={cert.id}
                      className="basis-full pl-4 sm:basis-1/2 lg:basis-1/3"
                    >
                      <article className="glass-card glass-card-hover flex h-full min-h-[260px] flex-col rounded-2xl p-6 select-none">
                        <div className="mb-4 flex items-start justify-between gap-4">
                          <div className="relative h-14 w-14 overflow-hidden rounded-xl bg-muted">
                            <Image
                              src={cert.logo}
                              alt={cert.institution}
                              fill
                              loading="lazy"
                              className="object-contain p-1.5"
                              sizes="56px"
                              draggable={false}
                            />
                          </div>
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                          <Icon className="h-5 w-5" />
                        </div>
                      </div>
                      <h4 className="heading-sm text-lg">{cert.name}</h4>
                      <p className="label-md-ln mt-2 text-foreground-muted">
                        {cert.institution}
                      </p>
                      <span className="chip-mint mt-4 w-fit">
                        {cert.category}
                      </span>
                      {(cert.pdfPath || cert.pdfPaths) && (
                        <button
                          type="button"
                          onClick={() => openCert(cert)}
                          className="label-md-ln mt-auto inline-flex items-center gap-2 pt-6 text-primary hover:underline"
                        >
                          <Eye className="h-4 w-4" />
                          Voir le certificat
                        </button>
                      )}
                    </article>
                  </CarouselItem>
                )
              })}
              </CarouselContent>
            </Carousel>

            <div className="mt-8 flex items-center justify-center gap-2">
              {Array.from({ length: snapCount }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Aller à la diapositive ${i + 1}`}
                  aria-current={selected === i}
                  onClick={() => api?.scrollTo(i)}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    selected === i
                      ? "w-6 bg-primary"
                      : "w-2 bg-foreground-muted/30 hover:bg-foreground-muted/50"
                  )}
                />
              ))}
            </div>
          </FadeIn>
        </LazyMount>
      </div>
    </section>
  )
}

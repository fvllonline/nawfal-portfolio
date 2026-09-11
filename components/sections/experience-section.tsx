"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Autoplay from "embla-carousel-autoplay"
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"
import { experiences } from "@/data"
import { FadeIn } from "@/components/ui/motion"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import { useAutoplayInView } from "@/hooks/use-autoplay-in-view"
import type { Experience } from "@/lib/types"
import { cn } from "@/lib/utils"

export function ExperienceSection() {
  const [api, setApi] = useState<CarouselApi>()
  const [selected, setSelected] = useState(0)
  const [snapCount, setSnapCount] = useState(0)
  const [autoplayPlugin] = useState(() =>
    Autoplay({
      delay: 7500,
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
    <section id="experience" className="section-ln">
      <div className="container-ln">
        <FadeIn className="mb-10 text-center sm:mb-14">
          <p className="label-ln">Parcours</p>
          <h2 className="heading-lg mt-2">Expérience au Maroc</h2>
          <p className="body-md mx-auto mt-4 max-w-2xl">
            Stages, collaborations et missions freelance — un parcours ancré à
            Casablanca, orienté produits web & mobile.
          </p>
          <div className="mt-6 flex justify-center gap-2">
            <button
              type="button"
              aria-label="Expériences précédentes"
              onClick={() => api?.scrollPrev()}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-border text-foreground-muted transition-colors hover:border-primary/40 hover:text-primary"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Expériences suivantes"
              onClick={() => api?.scrollNext()}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-border text-foreground-muted transition-colors hover:border-primary/40 hover:text-primary"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </FadeIn>

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
              {experiences.map((exp) => (
                <CarouselItem
                  key={exp.id}
                  className="basis-full pl-4 sm:basis-1/2 lg:basis-1/3"
                >
                  <ExperienceCard exp={exp} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <div className="mt-8 flex items-center justify-center gap-2">
            {Array.from({ length: snapCount }).map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Aller à l'expérience ${i + 1}`}
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
      </div>
    </section>
  )
}

function ExperienceCard({ exp }: { exp: Experience }) {
  const isInternal = exp.link?.startsWith("/")

  return (
    <article className="glass-card glass-card-hover flex h-full min-h-[320px] flex-col rounded-2xl p-5 select-none sm:p-6">
      <div className="mb-4 flex flex-col gap-3">
        <div className="flex flex-wrap items-center gap-2">
          {exp.contractType && (
            <span className="chip-mint">{exp.contractType}</span>
          )}
          {exp.current && (
            <span className="rounded-full border border-primary/40 bg-primary/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-primary">
              En cours
            </span>
          )}
        </div>
        <div>
          <h3 className="heading-sm text-lg leading-snug">{exp.role}</h3>
          <p className="label-md-ln mt-1 text-primary">{exp.company}</p>
        </div>
        <span className="w-fit rounded-full bg-muted px-3 py-1.5 font-mono text-xs text-foreground-muted">
          {exp.period}
        </span>
      </div>

      <p className="body-md line-clamp-4 flex-1">{exp.description}</p>

      {exp.highlights && exp.highlights.length > 0 && (
        <ul className="mt-4 space-y-2">
          {exp.highlights.slice(0, 3).map((item) => (
            <li
              key={item}
              className="flex gap-2 text-sm text-foreground-muted"
            >
              <span
                className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary"
                aria-hidden
              />
              <span className="line-clamp-2">{item}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-4 flex flex-wrap gap-2">
        {exp.technologies.slice(0, 4).map((tech) => (
          <span key={tech} className="chip-muted">
            {tech}
          </span>
        ))}
      </div>

      {exp.link && (
        <Link
          href={exp.link}
          target={isInternal ? undefined : "_blank"}
          rel={isInternal ? undefined : "noopener noreferrer"}
          className="label-md-ln mt-4 inline-flex items-center gap-2 text-primary hover:underline"
        >
          {isInternal ? "Voir le projet" : "Voir le travail"}{" "}
          <ExternalLink className="h-3.5 w-3.5" />
        </Link>
      )}
    </article>
  )
}

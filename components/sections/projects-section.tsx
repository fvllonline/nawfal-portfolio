"use client"

import { useEffect, useState } from "react"
import Autoplay from "embla-carousel-autoplay"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { getFeaturedProjects } from "@/data"
import { ProjectCard } from "@/components/projects/project-card"
import { FadeIn } from "@/components/ui/motion"
import { LazyMount } from "@/components/ui/lazy-mount"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import { useAutoplayInView } from "@/hooks/use-autoplay-in-view"
import { cn } from "@/lib/utils"

/** Keep a small window of covers loaded around the active snap (loop-safe). */
function useLoadedSlideIndices(selected: number, total: number, windowSize = 4) {
  const [loaded, setLoaded] = useState(() => {
    const initial = new Set<number>()
    for (let i = 0; i < Math.min(windowSize, total); i++) initial.add(i)
    return initial
  })

  useEffect(() => {
    if (total === 0) return
    setLoaded((prev) => {
      const next = new Set(prev)
      for (let i = -1; i < windowSize; i++) {
        next.add((selected + i + total) % total)
      }
      return next
    })
  }, [selected, total, windowSize])

  return loaded
}

export function ProjectsSection() {
  const projects = getFeaturedProjects()
  const [api, setApi] = useState<CarouselApi>()
  const [selected, setSelected] = useState(0)
  const [snapCount, setSnapCount] = useState(0)
  const loadedSlides = useLoadedSlideIndices(selected, projects.length)
  const [autoplayPlugin] = useState(() =>
    Autoplay({
      delay: 7000,
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
    <section id="projects" className="section-ln">
      <div className="container-ln">
        <FadeIn className="mb-10 text-center sm:mb-14">
          <p className="label-ln">Réalisations</p>
          <h2 className="heading-lg mt-2">Projets web & mobile</h2>
          <p className="body-md mx-auto mt-4 max-w-2xl">
            Une sélection de réalisations full-stack — apps, e-commerce et sites
            vitrines livrés pour des clients et partenaires, depuis Casablanca.
          </p>
          <div className="mt-6 flex justify-center gap-2">
            <button
              type="button"
              aria-label="Projets précédents"
              onClick={() => api?.scrollPrev()}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-border text-foreground-muted transition-colors hover:border-primary/40 hover:text-primary"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Projets suivants"
              onClick={() => api?.scrollNext()}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-border text-foreground-muted transition-colors hover:border-primary/40 hover:text-primary"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </FadeIn>

        <LazyMount minHeight={360}>
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
                {projects.map((project, index) => (
                  <CarouselItem
                    key={project.slug}
                    className="basis-full pl-4 sm:basis-1/2 lg:basis-1/3"
                  >
                    <div className="h-full select-none">
                      <ProjectCard
                        project={project}
                        loadImage={loadedSlides.has(index)}
                      />
                    </div>
                  </CarouselItem>
                ))}
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

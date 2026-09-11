"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Autoplay from "embla-carousel-autoplay"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { services } from "@/data"
import { FadeIn } from "@/components/ui/motion"
import { serviceIcons } from "@/components/services/service-icons"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import { useAutoplayInView } from "@/hooks/use-autoplay-in-view"
import { cn } from "@/lib/utils"

export function ServicesSection() {
  const [api, setApi] = useState<CarouselApi>()
  const [selected, setSelected] = useState(0)
  const [snapCount, setSnapCount] = useState(0)
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
    <section id="services" className="section-ln">
      <div className="container-ln">
        <FadeIn className="mb-10 text-center sm:mb-14">
          <p className="label-ln">Expertises</p>
          <h2 className="heading-lg mt-2">Expertise spécialisée</h2>
          <p className="body-md mx-auto mt-4 max-w-2xl">
            Découvrez mes services, comparez les packs et demandez un devis
            adapté à votre projet.
          </p>
          <div className="mt-6 flex justify-center gap-2">
            <button
              type="button"
              aria-label="Services précédents"
              onClick={() => api?.scrollPrev()}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-border text-foreground-muted transition-colors hover:border-primary/40 hover:text-primary"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Services suivants"
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
              {services.map((service) => {
                const Icon = serviceIcons[service.icon]
                return (
                  <CarouselItem
                    key={service.id}
                    className="basis-full pl-4 sm:basis-1/2 lg:basis-1/3"
                  >
                    <Link
                      href={`/services/${service.id}`}
                      className="glass-card group flex h-full min-h-[260px] flex-col rounded-2xl border border-border p-6 transition-colors hover:border-primary/40 select-none"
                    >
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="heading-sm text-lg transition-colors group-hover:text-primary">
                        {service.title}
                      </h3>
                      <p className="body-md mt-2 flex-1 line-clamp-3">
                        {service.description}
                      </p>
                      <span className="label-md-ln mt-5 inline-flex items-center gap-2 text-primary">
                        Voir les packs
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </Link>
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
                aria-label={`Aller au service ${i + 1}`}
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

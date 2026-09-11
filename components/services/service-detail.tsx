"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight, Check } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"
import { serviceGeneralTerms } from "@/data"
import { FadeIn, easeOutExpo } from "@/components/ui/motion"
import { ServicePackCard } from "@/components/services/service-pack-card"
import { serviceIcons } from "@/components/services/service-icons"
import type { Project, Service } from "@/lib/types"

type ServiceDetailProps = {
  service: Service
  relatedProjects?: Project[]
}

export function ServiceDetail({
  service,
  relatedProjects = [],
}: ServiceDetailProps) {
  const reduce = useReducedMotion()
  const Icon = serviceIcons[service.icon]
  const content = service.content

  const enter = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.55, delay, ease: easeOutExpo },
        }

  return (
    <article className="container-ln pb-16 pt-24 sm:pb-20 sm:pt-28 md:pt-32">
      <motion.div {...enter(0)}>
        <Link
          href="/#services"
          className="label-md-ln group mb-8 inline-flex items-center gap-2 text-primary transition-opacity hover:opacity-80"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Retour aux services
        </Link>
      </motion.div>

      <motion.div {...enter(0.06)} className="mb-10 max-w-3xl sm:mb-14">
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <Icon className="h-7 w-7" />
        </div>
        <p className="label-ln">Service · Casablanca, Maroc</p>
        <h1 className="heading-display mt-2 gradient-text">
          {content?.h1 ?? service.title}
        </h1>
        <p className="body-lg mt-4">{service.description}</p>
      </motion.div>

      {content && (
        <FadeIn className="mb-12 max-w-3xl space-y-10 sm:mb-16">
          <div className="space-y-4">
            {content.intro.map((paragraph) => (
              <p key={paragraph.slice(0, 36)} className="body-lg">
                {paragraph}
              </p>
            ))}
          </div>

          <div>
            <h2 className="heading-lg text-primary">Ce que vous gagnez</h2>
            <ul className="mt-5 space-y-3">
              {content.benefits.map((item) => (
                <li key={item} className="flex gap-3 text-foreground-muted">
                  <Check
                    className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                    aria-hidden
                  />
                  <span className="body-md text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="heading-lg text-primary">Pour qui ?</h2>
            <ul className="mt-5 space-y-3">
              {content.idealFor.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span className="body-md text-foreground-muted">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="heading-lg text-primary">Déroulement</h2>
            <ol className="mt-5 space-y-3">
              {content.process.map((step, index) => (
                <li key={step} className="flex gap-4">
                  <span className="font-mono text-sm text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="body-md text-foreground">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </FadeIn>
      )}

      <FadeIn>
        <div className="mb-6 flex flex-col gap-2 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="heading-lg text-primary">Packs & tarifs (MAD)</h2>
            <p className="body-md mt-2 max-w-2xl">
              Comparez Starter, Pro et Business, puis demandez un devis adapté à
              Casablanca et au Maroc.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
          {service.packs.map((pack) => (
            <ServicePackCard
              key={`${service.id}-${pack.name}`}
              serviceTitle={service.title}
              pack={pack}
            />
          ))}
        </div>
      </FadeIn>

      {relatedProjects.length > 0 && (
        <FadeIn delay={0.08} className="mt-12 sm:mt-16">
          <h2 className="heading-lg text-primary">Projets liés</h2>
          <p className="body-md mt-2 max-w-2xl">
            Exemples concrets liés à ce service — réalisés en Full-Stack.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group block"
              >
                <div className="glass-card relative mb-3 aspect-[16/10] overflow-hidden rounded-2xl bg-muted">
                  <Image
                    src={project.coverImage}
                    alt={`${project.title} — projet ${service.title}`}
                    fill
                    loading="lazy"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    quality={70}
                  />
                </div>
                <h3 className="heading-sm transition-colors group-hover:text-primary">
                  {project.title}
                </h3>
                <p className="body-md mt-1 line-clamp-2 text-foreground-muted">
                  {project.shortDescription}
                </p>
              </Link>
            ))}
          </div>
        </FadeIn>
      )}

      <FadeIn delay={0.1} className="mt-10 sm:mt-12">
        <div className="glass-card rounded-2xl border border-border p-5 sm:p-6">
          <p className="label-ln mb-4 text-foreground-muted">
            Conditions générales
          </p>
          <ul className="grid gap-3 text-sm text-foreground-muted sm:grid-cols-2">
            <li>
              <span className="text-foreground">Devise :</span>{" "}
              {serviceGeneralTerms.currency}
            </li>
            <li>
              <span className="text-foreground">Paiement :</span>{" "}
              {serviceGeneralTerms.payment}
            </li>
            <li>
              <span className="text-foreground">Support :</span>{" "}
              {serviceGeneralTerms.supportAfterDelivery}
            </li>
            <li>
              <span className="text-foreground">Devis sur mesure :</span>{" "}
              disponible
            </li>
          </ul>
          <p className="mt-4 text-xs leading-relaxed text-foreground-muted/80">
            {serviceGeneralTerms.note}
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.15} className="mt-10 flex flex-col items-center gap-4 sm:mt-12">
        <Link
          href="/#contact"
          className="gradient-bg glow-sm inline-flex min-h-12 items-center justify-center rounded-xl px-8 py-3 font-mono text-sm text-white"
        >
          Demander un devis
        </Link>
        <Link
          href="/#contact"
          className="label-md-ln group inline-flex items-center gap-2 text-primary hover:underline"
        >
          Une question ? Contactez-moi à Casablanca
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </FadeIn>
    </article>
  )
}

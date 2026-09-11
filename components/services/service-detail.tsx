"use client"

import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"
import { serviceGeneralTerms } from "@/data"
import { FadeIn, easeOutExpo } from "@/components/ui/motion"
import { ServicePackCard } from "@/components/services/service-pack-card"
import { serviceIcons } from "@/components/services/service-icons"
import type { Service } from "@/lib/types"

export function ServiceDetail({ service }: { service: Service }) {
  const reduce = useReducedMotion()
  const Icon = serviceIcons[service.icon]

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
        <p className="label-ln">Service</p>
        <h1 className="heading-display mt-2 gradient-text">{service.title}</h1>
        <p className="body-lg mt-4">{service.description}</p>
      </motion.div>

      <FadeIn>
        <div className="mb-6 flex flex-col gap-2 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="heading-lg text-primary">Packs disponibles</h2>
            <p className="body-md mt-2 max-w-2xl">
              Comparez Starter, Pro et Business, puis demandez un devis.
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

      <FadeIn delay={0.1} className="mt-10 sm:mt-12">
        <div className="glass-card rounded-2xl border border-border p-5 sm:p-6">
          <p className="label-ln mb-4 text-foreground-muted">
            Conditions générales
          </p>
          <ul className="grid gap-3 text-sm text-foreground-muted sm:grid-cols-2">
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
            <li>
              <span className="text-foreground">Maintenance :</span> packs
              mensuels disponibles
            </li>
          </ul>
          <p className="mt-4 text-xs leading-relaxed text-foreground-muted/80">
            {serviceGeneralTerms.note}
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.15} className="mt-10 flex justify-center sm:mt-12">
        <Link
          href="/#contact"
          className="label-md-ln group inline-flex items-center gap-2 text-primary hover:underline"
        >
          Une question ? Contactez-moi
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </FadeIn>
    </article>
  )
}

"use client"

import { useMemo, useState } from "react"
import {
  Check,
  Clock,
  Globe,
  Layout,
  MessageSquare,
  Palette,
  RefreshCw,
  Search,
  Server,
  ShoppingBag,
  Smartphone,
  Wrench,
  type LucideIcon,
} from "lucide-react"
import { FaWordpress } from "react-icons/fa"
import { AnimatePresence, motion } from "framer-motion"
import { services, serviceGeneralTerms } from "@/data"
import { FadeIn } from "@/components/ui/motion"
import type { Service, ServicePack } from "@/lib/types"
import { requestQuote } from "@/lib/quote-request"
import { cn } from "@/lib/utils"
import type { ComponentType } from "react"

const serviceIcons: Record<
  Service["icon"],
  ComponentType<{ className?: string }> | LucideIcon
> = {
  globe: Globe,
  "shopping-bag": ShoppingBag,
  layout: Layout,
  smartphone: Smartphone,
  search: Search,
  refresh: RefreshCw,
  wrench: Wrench,
  palette: Palette,
  wordpress: FaWordpress,
  server: Server,
  "message-square": MessageSquare,
}

function formatPrice(pack: ServicePack) {
  const amount = new Intl.NumberFormat("fr-MA").format(pack.price)
  const suffix = pack.billing === "monthly" ? " / mois" : ""
  return `${amount} ${pack.currency}${suffix}`
}

export function ServicesSection() {
  const [selectedId, setSelectedId] = useState(services[0]?.id ?? "website")

  const selected = useMemo(
    () => services.find((s) => s.id === selectedId) ?? services[0],
    [selectedId]
  )

  return (
    <section id="services" className="section-ln">
      <div className="container-ln">
        <FadeIn className="mb-10 text-center sm:mb-14">
          <p className="label-ln">Expertises</p>
          <h2 className="heading-lg mt-2">Expertise spécialisée</h2>
          <p className="body-md mx-auto mt-4 max-w-2xl">
            Choisissez un service, comparez les packs Starter / Pro / Business,
            puis demandez un devis adapté à votre projet.
          </p>
        </FadeIn>

        {/* Service chooser */}
        <FadeIn>
          <div className="mb-8 flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] sm:mb-10 sm:flex-wrap sm:justify-center sm:overflow-visible [&::-webkit-scrollbar]:hidden">
            {services.map((service) => {
              const Icon = serviceIcons[service.icon]
              const active = service.id === selected.id
              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => setSelectedId(service.id)}
                  className={cn(
                    "inline-flex shrink-0 items-center gap-2 rounded-xl border px-3.5 py-2.5 font-mono text-xs transition-all sm:text-[13px]",
                    active
                      ? "border-primary/50 bg-primary/10 text-primary"
                      : "border-border text-foreground-muted hover:border-primary/30 hover:text-foreground"
                  )}
                  aria-pressed={active}
                >
                  <Icon className="h-3.5 w-3.5" />
                  {service.title}
                </button>
              )
            })}
          </div>
        </FadeIn>

        <AnimatePresence mode="wait">
          <motion.div
            key={selected.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
          >
            <div className="mb-8 max-w-3xl sm:mb-10 sm:mx-auto sm:text-center">
              <h3 className="heading-sm text-xl sm:text-2xl">{selected.title}</h3>
              <p className="body-md mt-3">{selected.description}</p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
              {selected.packs.map((pack) => (
                <PackCard
                  key={`${selected.id}-${pack.name}`}
                  serviceTitle={selected.title}
                  pack={pack}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <FadeIn delay={0.1} className="mt-10 sm:mt-12">
          <div className="glass-card rounded-2xl border border-border p-5 sm:p-6">
            <p className="label-ln mb-4 text-foreground-muted">Conditions générales</p>
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
                <span className="text-foreground">Maintenance :</span>{" "}
                packs mensuels disponibles
              </li>
            </ul>
            <p className="mt-4 text-xs leading-relaxed text-foreground-muted/80">
              {serviceGeneralTerms.note}
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

function PackCard({
  serviceTitle,
  pack,
}: {
  serviceTitle: string
  pack: ServicePack
}) {
  const priceLabel = formatPrice(pack)

  return (
    <article
      className={cn(
        "glass-card relative flex h-full flex-col rounded-2xl border p-5 sm:p-6",
        pack.popular
          ? "border-primary/50 shadow-[0_0_30px_rgba(0,229,160,0.12)]"
          : "border-border"
      )}
    >
      {pack.popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-primary-foreground">
          Populaire
        </span>
      )}

      <div className="mb-5">
        <h4 className="font-display text-xl font-semibold text-foreground">
          {pack.name}
        </h4>
        <p className="mt-3 font-mono text-2xl font-bold text-primary sm:text-3xl">
          {priceLabel}
        </p>
        {(pack.delivery || pack.billing === "monthly") && (
          <p className="mt-2 inline-flex items-center gap-1.5 text-xs text-foreground-muted">
            <Clock className="h-3.5 w-3.5" />
            {pack.billing === "monthly"
              ? "Abonnement mensuel"
              : `Délai : ${pack.delivery}`}
          </p>
        )}
      </div>

      <ul className="mb-6 flex flex-1 flex-col gap-2.5">
        {pack.features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-2 text-sm text-foreground-muted"
          >
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={() =>
          requestQuote({
            service: serviceTitle,
            pack: pack.name,
            priceLabel,
          })
        }
        className={cn(
          "inline-flex w-full items-center justify-center rounded-xl py-3 font-mono text-sm transition-all active:scale-[0.98]",
          pack.popular
            ? "gradient-bg text-white hover:shadow-[0_0_20px_rgba(110,255,192,0.35)]"
            : "border border-border-strong text-foreground hover:border-primary/50 hover:text-primary"
        )}
      >
        Demander un devis
      </button>
    </article>
  )
}

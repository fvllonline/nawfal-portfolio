"use client"

import { Check, Clock } from "lucide-react"
import type { ServicePack } from "@/lib/types"
import { requestQuote } from "@/lib/quote-request"
import { cn } from "@/lib/utils"

export function formatPackPrice(pack: ServicePack) {
  const amount = new Intl.NumberFormat("fr-MA").format(pack.price)
  const suffix = pack.billing === "monthly" ? " / mois" : ""
  return `${amount} ${pack.currency}${suffix}`
}

export function ServicePackCard({
  serviceTitle,
  pack,
}: {
  serviceTitle: string
  pack: ServicePack
}) {
  const priceLabel = formatPackPrice(pack)

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
        <h3 className="font-display text-xl font-semibold text-foreground">
          {pack.name}
        </h3>
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

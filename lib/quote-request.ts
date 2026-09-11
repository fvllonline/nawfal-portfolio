export type QuoteRequestDetail = {
  service: string
  pack: string
  priceLabel?: string
}

export const QUOTE_REQUEST_EVENT = "quote-request"

export function buildQuoteSubject(service: string, pack: string) {
  return `Demande de devis — ${service} · Pack ${pack}`
}

export function buildQuoteMessage(
  service: string,
  pack: string,
  priceLabel?: string
) {
  const priceLine = priceLabel ? `\nTarif indiqué : ${priceLabel}` : ""
  return `Bonjour Nawfal,

Je souhaite obtenir un devis pour le service suivant :

• Service : ${service}
• Pack : ${pack}${priceLine}

Merci de me préciser les prochaines étapes, le délai confirmé et les modalités.

Cordialement,`
}

/** Prefill contact form + scroll to #contact (works on same page) */
export function requestQuote(detail: QuoteRequestDetail) {
  if (typeof window === "undefined") return

  const params = new URLSearchParams({
    service: detail.service,
    pack: detail.pack,
  })
  if (detail.priceLabel) params.set("price", detail.priceLabel)

  const url = `/?${params.toString()}#contact`
  window.history.pushState({}, "", url)
  window.dispatchEvent(
    new CustomEvent<QuoteRequestDetail>(QUOTE_REQUEST_EVENT, { detail })
  )

  window.requestAnimationFrame(() => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
    window.setTimeout(() => {
      document.getElementById("name")?.focus()
    }, 450)
  })
}

export function readQuoteFromUrl(): QuoteRequestDetail | null {
  if (typeof window === "undefined") return null
  const params = new URLSearchParams(window.location.search)
  const service = params.get("service")
  const pack = params.get("pack")
  if (!service || !pack) return null
  return {
    service,
    pack,
    priceLabel: params.get("price") ?? undefined,
  }
}

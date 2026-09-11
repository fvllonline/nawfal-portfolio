import { siteConfig } from "@/data"

/** Absolute URL helper for schema / OG assets */
export function absoluteUrl(path = "/") {
  const base = siteConfig.url.replace(/\/$/, "")
  if (!path || path === "/") return base
  return `${base}${path.startsWith("/") ? path : `/${path}`}`
}

function postalAddress() {
  const { nap } = siteConfig
  return {
    "@type": "PostalAddress" as const,
    ...(nap.streetAddress ? { streetAddress: nap.streetAddress } : {}),
    addressLocality: nap.addressLocality,
    addressRegion: nap.addressRegion,
    addressCountry: nap.addressCountry,
  }
}

/**
 * Person + ProfessionalService JSON-LD for local SEO (Casablanca / Maroc).
 * NAP aligns with footer / contact / future Google Business Profile.
 */
export function buildSiteJsonLd() {
  const personId = absoluteUrl("/#person")
  const serviceId = absoluteUrl("/#professional-service")
  const portrait = absoluteUrl(siteConfig.portrait)
  const address = postalAddress()

  const person = {
    "@type": "Person",
    "@id": personId,
    name: siteConfig.nap.name,
    alternateName: siteConfig.fullName,
    url: siteConfig.url,
    image: portrait,
    jobTitle: "Développeur Full-Stack",
    description: siteConfig.seoDescription,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address,
    homeLocation: {
      "@type": "Place",
      name: siteConfig.nap.addressLocality,
      address,
      geo: {
        "@type": "GeoCoordinates",
        latitude: siteConfig.nap.geo.latitude,
        longitude: siteConfig.nap.geo.longitude,
      },
    },
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
    sameAs: [
      siteConfig.github,
      siteConfig.linkedin,
      ...siteConfig.socials
        .filter((s) => s.href.startsWith("http"))
        .map((s) => s.href),
    ].filter((v, i, arr) => arr.indexOf(v) === i),
    knowsAbout: [
      "React",
      "Next.js",
      "Laravel",
      "React Native",
      "Développement Full-Stack",
      "Développement Web",
      "Développement Mobile",
      "Casablanca",
      "Maroc",
    ],
  }

  const professionalService = {
    "@type": "ProfessionalService",
    "@id": serviceId,
    name: `${siteConfig.nap.name} — Développement Full-Stack Casablanca`,
    alternateName: "Nawfal Addaoui Freelance",
    url: siteConfig.url,
    image: portrait,
    description: siteConfig.seoDescription,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    priceRange: "$$",
    currenciesAccepted: "MAD",
    paymentAccepted: "Bank Transfer, Cash",
    areaServed: [
      {
        "@type": "City",
        name: "Casablanca",
        containedInPlace: {
          "@type": "AdministrativeArea",
          name: "Casablanca-Settat",
        },
      },
      {
        "@type": "Country",
        name: "Maroc",
      },
    ],
    address,
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.nap.geo.latitude,
      longitude: siteConfig.nap.geo.longitude,
    },
    founder: { "@id": personId },
    provider: { "@id": personId },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: siteConfig.phone,
      email: siteConfig.email,
      areaServed: "MA",
      availableLanguage: ["French", "Arabic", "English"],
    },
    serviceType: [
      "Développement web",
      "Développement mobile",
      "Applications React / Next.js",
      "Backend Laravel / API",
      "E-commerce",
    ],
    knowsLanguage: ["fr", "en", "ar"],
  }

  return {
    "@context": "https://schema.org",
    "@graph": [person, professionalService],
  }
}

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
    ],
  }

  const professionalService = {
    "@type": "ProfessionalService",
    "@id": serviceId,
    name: `${siteConfig.nap.name} — Développeur Full-Stack`,
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

  const website = {
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    url: siteConfig.url,
    name: siteConfig.fullName,
    alternateName: siteConfig.name,
    inLanguage: "fr",
    description: siteConfig.seoDescription,
    publisher: { "@id": personId },
  }

  return {
    "@context": "https://schema.org",
    "@graph": [website, person, professionalService],
  }
}

export function buildFaqPageJsonLd(
  items: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }
}

/** JSON-LD Service Offer pour une page /services/[id] */
export function buildServicePageJsonLd(service: {
  id: string
  title: string
  description: string
  content?: { h1: string; intro: string[]; metaDescription?: string }
  packs: { name: string; price: number; currency: string }[]
}) {
  const url = absoluteUrl(`/services/${service.id}`)
  const name = service.content?.h1 ?? service.title
  const description =
    service.content?.metaDescription ??
    service.content?.intro?.[0] ??
    service.description

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: {
      "@type": "Person",
      name: siteConfig.nap.name,
      url: siteConfig.url,
      telephone: siteConfig.phone,
      address: postalAddress(),
    },
    areaServed: [
      { "@type": "City", name: "Casablanca" },
      { "@type": "Country", name: "Maroc" },
    ],
    offers: service.packs.map((pack) => ({
      "@type": "Offer",
      name: pack.name,
      price: pack.price,
      priceCurrency: pack.currency,
      url,
      availability: "https://schema.org/InStock",
    })),
  }
}

/** JSON-LD CreativeWork pour une étude de cas projet */
export function buildProjectPageJsonLd(project: {
  slug: string
  title: string
  shortDescription: string
  description: string[]
  coverImage: string
  technologies: string[]
  year: string
  liveUrl?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description.join(" "),
    url: absoluteUrl(`/projects/${project.slug}`),
    image: absoluteUrl(project.coverImage),
    dateCreated: project.year,
    keywords: project.technologies.join(", "),
    author: {
      "@type": "Person",
      name: siteConfig.nap.name,
      url: siteConfig.url,
      jobTitle: "Développeur Full-Stack",
      address: postalAddress(),
    },
    ...(project.liveUrl
      ? { sameAs: [project.liveUrl] }
      : {}),
    about: project.shortDescription,
  }
}

export function buildBreadcrumbJsonLd(
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}


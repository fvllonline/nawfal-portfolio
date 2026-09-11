import { siteConfig } from "@/data"

/** Absolute URL helper for schema / OG assets */
export function absoluteUrl(path = "/") {
  const base = siteConfig.url.replace(/\/$/, "")
  if (!path || path === "/") return base
  return `${base}${path.startsWith("/") ? path : `/${path}`}`
}

/**
 * Person + ProfessionalService JSON-LD for local SEO (Casablanca / Maroc).
 */
export function buildSiteJsonLd() {
  const personId = absoluteUrl("/#person")
  const serviceId = absoluteUrl("/#professional-service")
  const portrait = absoluteUrl(siteConfig.portrait)

  const person = {
    "@type": "Person",
    "@id": personId,
    name: siteConfig.fullName,
    url: siteConfig.url,
    image: portrait,
    jobTitle: siteConfig.title,
    description: siteConfig.seoDescription,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Casablanca",
      addressRegion: "Casablanca-Settat",
      addressCountry: "MA",
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
    name: `${siteConfig.fullName} — Développement Full-Stack`,
    url: siteConfig.url,
    image: portrait,
    description: siteConfig.seoDescription,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    priceRange: "$$",
    areaServed: [
      {
        "@type": "City",
        name: "Casablanca",
      },
      {
        "@type": "Country",
        name: "Maroc",
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Casablanca",
      addressRegion: "Casablanca-Settat",
      addressCountry: "MA",
    },
    founder: { "@id": personId },
    provider: { "@id": personId },
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

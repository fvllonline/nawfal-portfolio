import { buildSiteJsonLd } from "@/lib/seo"

/** Injects WebSite + Person + ProfessionalService structured data. */
export function JsonLd() {
  const data = buildSiteJsonLd()

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

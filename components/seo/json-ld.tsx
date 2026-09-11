import { buildSiteJsonLd } from "@/lib/seo"

/** Injects Person + ProfessionalService structured data into the document. */
export function JsonLd() {
  const data = buildSiteJsonLd()

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

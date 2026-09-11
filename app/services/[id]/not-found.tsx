import Link from "next/link"
import { SiteShell } from "@/components/layout"

export default function ServiceNotFound() {
  return (
    <SiteShell>
      <div className="container-ln flex min-h-[70vh] flex-col items-center justify-center py-32 text-center">
        <p className="label-ln">404</p>
        <h1 className="heading-lg mt-4">Service introuvable</h1>
        <p className="body-md mt-4 max-w-md">
          Ce service n&apos;existe pas ou a peut-être été déplacé.
        </p>
        <Link
          href="/#services"
          className="gradient-bg mt-8 rounded-xl px-8 py-4 font-mono text-sm text-white transition-transform hover:scale-105"
        >
          Retour aux services
        </Link>
      </div>
    </SiteShell>
  )
}

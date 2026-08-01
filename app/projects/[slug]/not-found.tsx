import Link from "next/link"
import { SiteShell } from "@/components/layout"

export default function ProjectNotFound() {
  return (
    <SiteShell>
      <div className="container-ln flex min-h-[70vh] flex-col items-center justify-center py-32 text-center">
        <p className="label-ln">404</p>
        <h1 className="heading-lg mt-4">Project not found</h1>
        <p className="body-md mt-4 max-w-md">
          This case study doesn&apos;t exist or may have been moved.
        </p>
        <Link
          href="/#projects"
          className="gradient-bg mt-8 rounded-xl px-8 py-4 font-mono text-sm text-white transition-transform hover:scale-105"
        >
          Back to Projects
        </Link>
      </div>
    </SiteShell>
  )
}

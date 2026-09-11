import type { ReactNode } from "react"
import { Navbar } from "./navbar"
import { Footer } from "./footer"
import { HashScroll } from "./hash-scroll"
import { ScrollProgress } from "./scroll-progress"
import { PageTransition } from "@/components/ui/motion"

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:text-primary-foreground"
      >
        Aller au contenu
      </a>
      <ScrollProgress />
      <HashScroll />
      <Navbar />
      <main id="main-content" className="min-h-screen overflow-x-hidden">
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
    </>
  )
}

import type { ReactNode } from "react"
import { Navbar } from "./navbar"
import { Footer } from "./footer"
import { HashScroll } from "./hash-scroll"
import { ScrollProgress } from "./scroll-progress"
import { PageTransition } from "@/components/ui/motion"

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
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

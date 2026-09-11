import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { siteConfig } from "@/data"
import { fontDisplay, fontSans, fontMono } from "@/lib/fonts"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.fullName} — ${siteConfig.title}`,
    template: `%s | ${siteConfig.fullName}`,
  },
  description: siteConfig.tagline,
  keywords: [
    "Développeur Full Stack",
    "React",
    "Laravel",
    "Next.js",
    "Développement web",
    "Nawfal ADDAOUI",
    "Casablanca",
  ],
  authors: [{ name: siteConfig.fullName }],
  creator: siteConfig.fullName,
  icons: {
    icon: "/favicon.webp",
    shortcut: "/favicon.webp",
    apple: "/favicon-48.png",
  },
  openGraph: {
    title: `${siteConfig.fullName} — ${siteConfig.title}`,
    description: siteConfig.tagline,
    url: siteConfig.url,
    siteName: `Portfolio de ${siteConfig.fullName}`,
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.fullName} — ${siteConfig.title}`,
    description: siteConfig.tagline,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="fr"
      className={`dark scroll-smooth ${fontDisplay.variable} ${fontSans.variable} ${fontMono.variable}`}
    >
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}

import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { siteConfig } from "@/data"
import { JsonLd } from "@/components/seo/json-ld"
import { fontDisplay, fontSans, fontMono } from "@/lib/fonts"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.seoTitle,
    template: `%s | ${siteConfig.fullName}`,
  },
  description: siteConfig.seoDescription,
  authors: [{ name: siteConfig.fullName, url: siteConfig.url }],
  creator: siteConfig.fullName,
  publisher: siteConfig.fullName,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.webp",
    shortcut: "/favicon.webp",
    apple: "/favicon-48.png",
  },
  openGraph: {
    title: siteConfig.seoTitle,
    description: siteConfig.seoDescription,
    url: siteConfig.url,
    siteName: `Portfolio de ${siteConfig.fullName}`,
    locale: "fr_MA",
    type: "website",
    images: [
      {
        url: siteConfig.portrait,
        width: 800,
        height: 1000,
        alt: `Portrait de ${siteConfig.fullName}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seoTitle,
    description: siteConfig.seoDescription,
    images: [siteConfig.portrait],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: [
      "obwN9wt-SNXYXET0ocB7bcTXWWfUdeibGTwyqljKpoc",
      "F93dj9IsECh8aVFrjXbkBa94ntNc25fR2MP7alexayw",
    ],
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
        <JsonLd />
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}

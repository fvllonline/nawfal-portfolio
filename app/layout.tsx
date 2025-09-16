import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Nawfal ADDAOUI - Full Stack Web Developer",
  description:
    "Creative and adaptable developer passionate about building modern web solutions. Specializing in React, Laravel, and full-stack development.",
  keywords: ["Full Stack Developer", "React", "Laravel", "Next.js", "Web Development", "Nawfal ADDAOUI"],
  authors: [{ name: "Nawfal ADDAOUI" }],
  creator: "Nawfal ADDAOUI",
  openGraph: {
    title: "Nawfal ADDAOUI - Full Stack Web Developer",
    description: "Creative and adaptable developer passionate about building modern web solutions.",
    url: "https://nawfalsportfolio.vercel.app",
    siteName: "Nawfal ADDAOUI Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nawfal ADDAOUI - Full Stack Web Developer",
    description: "Creative and adaptable developer passionate about building modern web solutions.",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}

import { DM_Sans, Hanken_Grotesk, JetBrains_Mono } from "next/font/google"

/** Display — headlines & hero (Lumina Noir) */
export const fontDisplay = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  weight: ["600", "700", "800"],
  display: "swap",
})

/** Body — readable dark-mode copy */
export const fontSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

/** Labels / meta — developer precision */
export const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["500"],
  display: "swap",
})

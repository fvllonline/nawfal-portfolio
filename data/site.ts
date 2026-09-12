import type { SiteConfig } from "@/lib/types"

export const siteConfig: SiteConfig = {
  name: "NAWFAL",
  fullName: "Nawfal ADDAOUI",
  title: "Développeur Full-Stack à Casablanca",
  location: "Casablanca, Maroc",
  email: "naoufaladdaoui@gmail.com",
  phone: "+212631108355",
  phoneDisplay: "+212 631-108355",
  tagline:
    "Développeur Full-Stack à Casablanca : je conçois des sites web, apps et APIs performants avec React, Next.js et Laravel — pour startups et entreprises au Maroc.",
  seoTitle:
    "Nawfal Addaoui | Développeur Full-Stack Casablanca | React, Next.js, Laravel",
  seoDescription:
    "Développeur Full-Stack basé à Casablanca. Spécialiste React, Next.js, Laravel et React Native. Portfolio de projets web & mobile. Disponible pour missions freelance et collaborations.",
  availability: "Disponible pour missions freelance · Casablanca & Maroc",
  bio: "Développeur Full-Stack passionné basé à Casablanca, spécialisé en React, Laravel et Next.js. Créatif, adaptable et motivé pour contribuer à des projets innovants qui allient fonctionnalité et esthétique.",
  url: "https://nawfal.online",
  github: "https://github.com/fvllonline",
  linkedin: "https://www.linkedin.com/in/nawfal-addaoui-40b651248/",
  portrait: "/PRFLN.webp",
  nap: {
    name: "Nawfal Addaoui",
    addressLocality: "Casablanca",
    addressRegion: "Casablanca-Settat",
    addressCountry: "MA",
    addressCountryName: "Maroc",
    addressLine: "Casablanca, Casablanca-Settat, Maroc",
    // Centre-ville Casablanca — service area (pas de local commercial)
    geo: {
      latitude: 33.5731,
      longitude: -7.5898,
    },
  },
  cv: {
    fr: "/CV-NAWFAL-French.pdf",
    en: "/CV-NAWFAL-English.pdf",
    de: "/CV-NAWFAL-Deutsch.pdf",
  },
  socials: [
    { label: "GitHub", href: "https://github.com/fvllonline", icon: "github" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/nawfal-addaoui-40b651248/",
      icon: "linkedin",
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/naoufal.addaoui.3",
      icon: "facebook",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/fvllonline/",
      icon: "instagram",
    },
    { label: "Email", href: "mailto:naoufaladdaoui@gmail.com", icon: "mail" },
    { label: "Téléphone", href: "tel:+212631108355", icon: "phone" },
  ],
  formspreeEndpoint: "https://formspree.io/f/movdjqaa",
}

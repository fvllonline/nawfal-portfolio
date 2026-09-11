import type { SoftSkill, Language } from "@/lib/types"

export const aboutContent = {
  label: "À propos",
  heading: "Construire pour le",
  headingAccent: "futur",
  paragraphs: [
    "Je suis un développeur Full-Stack passionné basé à Casablanca, spécialisé en React, Laravel et Next.js. Ma philosophie repose sur l’alliance entre fonctionnalité et esthétique : chaque pixel doit avoir un sens.",
    "Créatif, adaptable et enthousiaste à l’idée de contribuer à des projets innovants — je conçois des solutions web modernes qui scalent et plaisent aux utilisateurs.",
  ],
  portrait: "/PRFLN.webp",
  workspaceImage: "/herobg.webp",
  skillBars: [
    { name: "Frontend / UI-UX", level: 95 },
    { name: "Backend & APIs", level: 88 },
  ],
}

export const softSkills: SoftSkill[] = [
  { name: "Adaptabilité", icon: "zap" },
  { name: "Esprit d’équipe", icon: "users" },
  { name: "Créativité", icon: "lightbulb" },
  { name: "Résolution de problèmes", icon: "zap" },
]

export const languages: Language[] = [
  { name: "Arabe", level: 100, label: "Langue maternelle" },
  { name: "Français", level: 95, label: "Courant" },
  { name: "Anglais", level: 85, label: "Bonne maîtrise" },
]

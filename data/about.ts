import type { SoftSkill, Language } from "@/lib/types"

export const aboutContent = {
  label: "À propos",
  heading: "Du web au mobile,",
  headingAccent: "une stack complète",
  paragraphs: [
    "Je suis Nawfal Addaoui, développeur Full-Stack basé à Casablanca (Maroc). Je conçois et développe des produits web et mobile avec React, Next.js, Laravel et React Native — du prototype au déploiement.",
    "Mon approche : allier performance technique et expérience utilisateur. Chaque interface doit être claire, rapide et adaptée aux besoins réels des clients marocains comme internationaux.",
    "Disponible en freelance pour sites vitrines, e-commerce, applications web/mobile et APIs. Que vous soyez à Casablanca, ailleurs au Maroc ou en remote, je m’intègre facilement à votre équipe ou je porte le projet de bout en bout.",
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

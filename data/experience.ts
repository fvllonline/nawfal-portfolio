import type { Experience, Education } from "@/lib/types"

/** Expériences professionnelles — issues du CV */
export const experiences: Experience[] = [
  {
    id: "alvon-collaboration",
    year: "2026",
    period: "2026 — Présent",
    company: "Alvon Digital Group",
    role: "Développeur Full-Stack & Mobile",
    contractType: "Contrat de collaboration",
    description:
      "Développement et maintenance d’applications mobiles, conception d’architecture technique, optimisation des performances et participation aux décisions produit stratégiques.",
    highlights: [
      "Développer et maintenir des applications mobiles",
      "Concevoir l’architecture technique et optimiser les performances",
      "Contribuer aux décisions produit stratégiques",
    ],
    technologies: ["React Native", "Next.js", "Express.js", "Mobile", "Architecture"],
    current: true,
  },
  {
    id: "alvon-pfe",
    year: "2026",
    period: "2026 — 2 mois",
    company: "Alvon Digital Group",
    role: "Développeur Full-Stack — Stage PFE",
    contractType: "Stage PFE",
    description:
      "Conception et développement de MonPassTCF, plateforme de préparation au TCF : architecture full-stack (Express.js, React Native, Next.js), intégration IA (Groq), fonctionnalités sociales en temps réel, gamification et tableau de bord administrateur.",
    highlights: [
      "Réalisation end-to-end de MonPassTCF — préparation au TCF",
      "Architecture full-stack avec Express.js, React Native & Next.js",
      "Intégration IA via Groq, social temps réel & gamification",
      "Livraison d’un dashboard d’administration",
    ],
    technologies: [
      "Express.js",
      "React Native",
      "Next.js",
      "Groq AI",
      "Temps réel",
    ],
    link: "/projects/monpasstcf",
  },
  {
    id: "adam-adventure",
    year: "2025",
    period: "2025 — 1 mois",
    company: "Adam Adventure Tours & Tourism",
    role: "Développeur Web — Stage",
    contractType: "Stage",
    description:
      "Conception et développement d’un site vitrine de bout en bout : analyse des besoins, choix technologiques, design graphique, intégration Next.js, déploiement Vercel et maintenance.",
    highlights: [
      "Analyse des besoins et choix technologiques",
      "Design graphique et intégration Next.js",
      "Déploiement sur Vercel avec maintenance continue",
    ],
    technologies: ["Next.js", "Vercel", "React", "UI Design"],
    link: "/projects/adam-adventure-tours",
  },
  {
    id: "mb-way",
    year: "2025",
    period: "2025 — 2 mois",
    company: "MB Way",
    role: "Développeur Backend & Brand Designer — Stage PFE",
    contractType: "Stage PFE",
    description:
      "Développement backend de l’application Quick Stay (Laravel) ; création de l’identité visuelle complète, logo et charte graphique.",
    highlights: [
      "Développement backend Quick Stay avec Laravel",
      "Conception du logo et de la charte graphique complète",
    ],
    technologies: ["Laravel", "PHP", "MySQL", "Branding", "Logo Design"],
    link: "/projects/quick-stay",
  },
]

/** Formation — issue du CV */
export const education: Education[] = [
  {
    id: "sup2i",
    period: "2025–2026",
    institution: "SUP2I – École Supérieure d'Ingénierie et Innovation",
    degree: "Licence en Développement Informatique",
    status: "En cours",
  },
  {
    id: "ifiag",
    period: "2023–2025",
    institution:
      "IFIAG – Institut de Formation d’Informatique Appliquée et de Gestion",
    degree: "Diplôme de Technicien Spécialisé en Développement Informatique",
    status: "Terminé",
  },
  {
    id: "el-baroudi",
    period: "2021–2022",
    institution: "Lycée El Baroudi",
    degree: "Baccalauréat en Sciences Physiques – BIOF",
    status: "Terminé",
  },
]

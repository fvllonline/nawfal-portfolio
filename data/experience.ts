import type { Experience, Education } from "@/lib/types"

/** Career experiences — sourced from NAWFAL_CV_FrenshV.pdf */
export const experiences: Experience[] = [
  {
    id: "alvon-collaboration",
    year: "2026",
    period: "2026 — Present",
    company: "Alvon Digital Group",
    role: "Full-Stack & Mobile Developer",
    contractType: "Collaboration Contract",
    description:
      "Development and maintenance of mobile applications, technical architecture design, performance optimization, and participation in strategic product decisions.",
    highlights: [
      "Develop and maintain mobile applications",
      "Design technical architecture and optimize performance",
      "Contribute to strategic product decisions",
    ],
    technologies: ["React Native", "Next.js", "Express.js", "Mobile", "Architecture"],
    current: true,
  },
  {
    id: "alvon-pfe",
    year: "2026",
    period: "2026 — 2 months",
    company: "Alvon Digital Group",
    role: "Full-Stack Developer — PFE Internship",
    contractType: "PFE Internship",
    description:
      "Designed and developed MonPassTCF, a TCF exam preparation platform: full-stack architecture (Express.js, React Native, Next.js), AI integration (Groq), real-time social features, gamification, and an admin dashboard.",
    highlights: [
      "Built MonPassTCF — TCF preparation platform end-to-end",
      "Full-stack architecture with Express.js, React Native & Next.js",
      "Integrated AI via Groq, real-time social features & gamification",
      "Delivered an administration dashboard",
    ],
    technologies: [
      "Express.js",
      "React Native",
      "Next.js",
      "Groq AI",
      "Real-time",
    ],
    link: "/projects/monpasstcf",
  },
  {
    id: "adam-adventure",
    year: "2025",
    period: "2025 — 1 month",
    company: "Adam Adventure Tours & Tourism",
    role: "Web Developer — Internship",
    contractType: "Internship",
    description:
      "End-to-end design and development of a showcase website: needs analysis, technology choices, graphic design, Next.js integration, Vercel deployment, and ongoing maintenance.",
    highlights: [
      "Needs analysis and technology selection",
      "Graphic design and Next.js integration",
      "Deployed on Vercel with continuous maintenance",
    ],
    technologies: ["Next.js", "Vercel", "React", "UI Design"],
    link: "/projects/adam-adventure-tours",
  },
  {
    id: "mb-way",
    year: "2025",
    period: "2025 — 2 months",
    company: "MB Way",
    role: "Backend Developer & Brand Designer — PFE Internship",
    contractType: "PFE Internship",
    description:
      "Backend developer for the Quick Stay application (Laravel); created the full visual identity including logo and complete brand guidelines.",
    highlights: [
      "Backend development for Quick Stay with Laravel",
      "Designed logo and complete brand identity / graphic charter",
    ],
    technologies: ["Laravel", "PHP", "MySQL", "Branding", "Logo Design"],
    link: "/projects/quick-stay",
  },
]

/** Education — sourced from NAWFAL_CV_FrenshV.pdf */
export const education: Education[] = [
  {
    id: "sup2i",
    period: "2025–2026",
    institution: "SUP2I – École Supérieure d'Ingénierie et Innovation",
    degree: "Licence en Développement Informatique",
    status: "Current",
  },
  {
    id: "ifiag",
    period: "2023–2025",
    institution:
      "IFIAG – Institut de Formation d’Informatique Appliquée et de Gestion",
    degree: "Diplôme de Technicien Spécialisé en Développement Informatique",
    status: "Completed",
  },
  {
    id: "el-baroudi",
    period: "2021–2022",
    institution: "Lycée El Baroudi",
    degree: "Baccalauréat en Sciences Physiques – BIOF",
    status: "Completed",
  },
]

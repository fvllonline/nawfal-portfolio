import type { Project } from "@/lib/types"

/**
 * Projets mis en avant — contenus issus du CV et des briefs.
 */
export const projects: Project[] = [
  {
    slug: "monpasstcf",
    title: "MonPassTCF",
    subtitle:
      "Application mobile de préparation au TCF — s’entraîner, suivre sa progression et rester prêt le jour J.",
    shortDescription:
      "App mobile de préparation au TCF — projet full-stack réalisé à Casablanca (React Native, Next.js, IA).",
    description: [
      "MonPassTCF est un produit ed-tech mobile-first conçu pour aider les candidats — notamment au Maroc — à préparer le Test de Connaissance du Français (TCF). Il couvre compréhension orale, écrite, structures et expression écrite avec une approche structurée et data-driven.",
      "Réalisé durant un stage PFE chez Alvon Digital Group à Casablanca, la plateforme combine une architecture full-stack (Express.js, React Native, Next.js), une intégration IA via Groq, des fonctionnalités sociales en temps réel, de la gamification et un dashboard administrateur.",
      "L’objectif : une expérience d’étude premium, sans distractions, digne d’une vraie app — en mobilité comme à la maison.",
    ],
    coverImage: "/MonPassTCF/miniature-monpasstcf.webp",
    gallery: [
      "/MonPassTCF/1.webp",
      "/MonPassTCF/2.webp",
      "/MonPassTCF/3.webp",
      "/MonPassTCF/4.webp",
      "/MonPassTCF/5.webp",
      "/MonPassTCF/7.webp",
      "/MonPassTCF/8.webp",
      "/MonPassTCF/9.webp",
      "/MonPassTCF/10.webp",
      "/MonPassTCF/11.webp",
      "/MonPassTCF/12.webp",
    ],
    technologies: [
      "React Native",
      "Next.js",
      "Express.js",
      "Groq AI",
      "MySQL",
    ],
    type: "Application mobile",
    year: "2026",
    role: "Développeur Full-Stack",
    liveUrl: "https://lnkd.in/p/e3FwCSgD",
    features: [
      {
        title: "Simulations adaptatives",
        description:
          "Simulations chronométrées qui reproduisent le format et le niveau du vrai TCF.",
        icon: "zap",
      },
      {
        title: "Pratique assistée par IA",
        description:
          "Assistance powered by Groq pour guider les apprenants et renforcer les points faibles.",
        icon: "sparkles",
      },
      {
        title: "Suivi de progression",
        description:
          "Tableaux de bord clairs pour suivre l’évolution au niveau CECR.",
        icon: "chart",
      },
      {
        title: "Social & gamification",
        description:
          "Fonctionnalités sociales en temps réel et gamification pour garder la motivation.",
        icon: "users",
      },
    ],
    challenges: [
      {
        challenge: "Fonctionnalités temps réel sur mobile",
        challengeDetail:
          "Offrir du social et de la sync sans dégrader batterie ni UX sur des appareils mid-range.",
        solution: "Stack temps réel optimisée",
        solutionDetail:
          "Payloads API allégés et mises à jour sélectives pour garder l’app réactive sous charge.",
      },
    ],
    quote:
      "Un compagnon d’étude qui a le feeling d’un produit — pas juste une pile de PDF.",
    relatedServiceId: "mobile_app",
    relatedServiceIds: ["web_app", "uiux", "api_backend"],
    featured: true,
  },
  {
    slug: "quick-stay",
    title: "Quick Stay",
    subtitle:
      "Stage de fin d’études — APIs backend Laravel, documentation technique et identité visuelle complète.",
    shortDescription:
      "Backend Laravel & branding pour Quick Stay — stage full-stack à Casablanca (APIs REST, Postman, identité visuelle).",
    description: [
      "Durant mon stage de fin d’études à Casablanca, j’ai participé activement au développement de l’application web Quick Stay, avec une forte implication sur la conception technique et la réalisation du backend.",
      "Côté organisation : rédaction du cahier des charges fonctionnel et technique, coordination des tâches en équipe, création du logo et définition de la charte graphique complète.",
      "Côté backend : conception et implémentation d’APIs REST robustes avec Laravel (routes, contrôleurs, modèles, middlewares), tests approfondis via Postman, et documentation technique complète sous format Excel. Ce stage a renforcé mes compétences backend et mon travail d’équipe.",
    ],
    coverImage: "/QuickSTAY/miniature-quickstay.webp",
    gallery: ["/QuickSTAY/1-screen-repository.webp"],
    technologies: [
      "Laravel",
      "PHP",
      "API REST",
      "Postman",
      "MySQL",
      "Branding",
    ],
    type: "Application web",
    year: "2025",
    role: "Développeur Backend & Brand Designer",
    githubUrl: "https://github.com/fvllonline/QUICKSTAY-backend-project",
    features: [
      {
        title: "Cahier des charges & coordination",
        description:
          "Rédaction des spécifications fonctionnelles et techniques, répartition des tâches en équipe.",
        icon: "file-text",
      },
      {
        title: "APIs REST Laravel",
        description:
          "Backend structuré : routes, contrôleurs, modèles et middlewares pour des endpoints fiables.",
        icon: "server",
      },
      {
        title: "Tests Postman & docs",
        description:
          "Tests approfondis des endpoints et documentation technique complète (requêtes/réponses) en Excel.",
        icon: "chart",
      },
      {
        title: "Identité de marque",
        description:
          "Logo et charte graphique complète pour une identité cohérente de Quick Stay.",
        icon: "palette",
      },
    ],
    challenges: [
      {
        challenge: "Surface API fiable",
        challengeDetail:
          "Les APIs devaient rester cohérentes face à un usage réel et des règles métier évolutives.",
        solution: "Architecture Laravel structurée",
        solutionDetail:
          "Structure claire des ressources, middlewares et contrats validés via Postman avant livraison.",
      },
      {
        challenge: "Alignement produit + marque",
        challengeDetail:
          "L’app avait besoin à la fois de solides fondations backend et d’une identité visuelle forte.",
        solution: "Double livraison",
        solutionDetail:
          "Deux axes menés de bout en bout : engineering (APIs, docs) et design (logo, charte).",
      },
    ],
    quote:
      "Un backend solide se fait oublier quand il fonctionne — la doc et le design le font durer.",
    relatedServiceId: "api_backend",
    relatedServiceIds: ["web_app", "uiux", "consulting"],
    featured: true,
  },
  {
    slug: "breezoria",
    title: "Breezoria",
    subtitle:
      "Boutique e-commerce moderne pensée pour la conversion, la vitesse et un parcours d’achat fluide.",
    shortDescription:
      "E-commerce Next.js pensé pour la conversion — vitrine produit livrée depuis Casablanca.",
    description: [
      "Breezoria est un site e-commerce personnalisable, axé sur une présentation produit claire et un chemin sans friction de la découverte à l’achat — adapté aux marques qui veulent vendre en ligne au Maroc ou à l’international.",
      "La vitrine mise sur la performance, le responsive et une structure merchandising adaptée à une marque en croissance.",
    ],
    coverImage: "/Breezoria/miniature-breezoria.webp",
    gallery: [
      "/Breezoria/1-landing-page.webp",
      "/Breezoria/2-product-details.webp",
      "/Breezoria/3-panier.webp",
      "/Breezoria/4-formulaire.webp",
    ],
    technologies: ["Next.js", "Tailwind CSS", "React", "Vercel"],
    type: "Site e-commerce",
    year: "2025",
    role: "Développeur Full-Stack",
    liveUrl: "https://breezoria.vercel.app/",
    features: [
      {
        title: "Catalogue produits",
        description:
          "Catalogue navigable avec catégories claires et pages détail produit.",
        icon: "shopping-bag",
      },
      {
        title: "Panier & commande",
        description:
          "Parcours panier fluide, pensé pour mobile et desktop.",
        icon: "credit-card",
      },
      {
        title: "Vitrine responsive",
        description:
          "UI mobile-first qui reste nette aussi sur grand écran.",
        icon: "smartphone",
      },
      {
        title: "UI prête pour la marque",
        description:
          "Layout personnalisable pour le branding et les campagnes saisonnières.",
        icon: "palette",
      },
    ],
    challenges: [
      {
        challenge: "Vitesse vs médias produits riches",
        challengeDetail:
          "Des images produit haute qualité risquaient de ralentir le premier chargement sur mobile.",
        solution: "Médias optimisés",
        solutionDetail:
          "Lazy-loading et priorisation du contenu above-the-fold pour préserver les Core Web Vitals.",
      },
    ],
    quote: "Une boutique e-com doit sembler évidente dès le premier scroll.",
    relatedServiceId: "ecommerce",
    relatedServiceIds: ["website", "seo", "maintenance"],
    featured: true,
  },
  {
    slug: "zacastore",
    title: "ZacaStore",
    subtitle:
      "Site e-commerce en cours de développement — catalogue, panier et UX boutique.",
    shortDescription:
      "Site e-commerce encore en développement (pas terminé à 100 %) — aperçu en ligne disponible.",
    description: [
      "ZacaStore est un site e-commerce conçu pour une hiérarchie produit claire et une expérience d’achat rapide.",
      "Il mise sur une vitrine propre, des pages produit responsive et un parcours de commande simple sur tous les appareils.",
      "Note : ce projet est encore en développement actif et n’est pas terminé à 100 % — la démo en ligne reflète un travail en cours.",
    ],
    coverImage: "/ZacaStore/miniature-zacastore.webp",
    gallery: [
      "/ZacaStore/1-landing-page.webp",
      "/ZacaStore/2-products.webp",
      "/ZacaStore/3-about.webp",
      "/ZacaStore/4-product1.webp",
      "/ZacaStore/5-product2.webp",
      "/ZacaStore/6-panier.webp",
      "/ZacaStore/7-formulaire.webp",
    ],
    technologies: ["Next.js", "Tailwind CSS", "React", "MySQL"],
    type: "Site e-commerce",
    year: "2025",
    role: "Développeur Full-Stack",
    liveUrl: "https://zacastore.vercel.app/",
    inProgress: true,
    features: [
      {
        title: "Grille boutique",
        description:
          "Listing produits avec filtres et hiérarchie visuelle claire.",
        icon: "layout-dashboard",
      },
      {
        title: "Pages produit",
        description:
          "Fiches détaillées avec images, prix et appels à l’action.",
        icon: "shopping-bag",
      },
      {
        title: "Expérience panier",
        description:
          "Panier persistant et chemin simple vers la commande.",
        icon: "credit-card",
      },
      {
        title: "Structure admin-ready",
        description:
          "Architecture préparée pour la gestion catalogue et des commandes.",
        icon: "server",
      },
    ],
    challenges: [
      {
        challenge: "Clarté du catalogue",
        challengeDetail:
          "Trop de produits sans structure font rebondir les acheteurs rapidement.",
        solution: "UI merchandising claire",
        solutionDetail:
          "Catégories organisées et cartes scannables pour trouver vite ce qu’il faut.",
      },
    ],
    quote: "Un bon e-commerce, c’est de la clarté — produits d’abord, friction en dernier.",
    relatedServiceId: "ecommerce",
    relatedServiceIds: ["website", "seo", "uiux"],
    featured: true,
  },
  {
    slug: "dupond-cafe",
    title: "Dupond Café",
    subtitle:
      "Site vitrine pour un café artisanal — ambiance, menu et présence digitale chaleureuse.",
    shortDescription:
      "Site vitrine Dupond Café avec visuels élégants et storytelling de marque clair.",
    description: [
      "Dupond Café est un site vitrine qui présente l’ambiance du café, les points forts du menu et la personnalité de la marque en ligne.",
      "Réalisé avec React + Vite et Tailwind CSS, déployé sur Vercel, il privilégie des visuels élégants et un parcours visiteur simple.",
    ],
    coverImage: "/DupondCafe/miniature-dupondcafe.webp",
    gallery: [
      "/DupondCafe/1-landing-page.webp",
      "/DupondCafe/2-menu.webp",
      "/DupondCafe/3-gallery.webp",
      "/DupondCafe/4-contact.webp",
    ],
    technologies: ["React", "Vite", "Tailwind CSS", "Vercel"],
    type: "Site vitrine",
    year: "2024",
    role: "Développeur Frontend",
    liveUrl: "https://dupondcafe.vercel.app/",
    features: [
      {
        title: "Storytelling de marque",
        description:
          "Mise en page chaleureuse qui reflète l’identité artisanale du café.",
        icon: "coffee",
      },
      {
        title: "Highlights du menu",
        description:
          "Présentation claire des signatures et des offres.",
        icon: "file-text",
      },
      {
        title: "Design responsive",
        description:
          "Rendu net sur téléphone, tablette et desktop.",
        icon: "monitor",
      },
    ],
    challenges: [
      {
        challenge: "Ambiance en ligne",
        challengeDetail:
          "Transposer l’ambiance d’un café physique dans une expérience web légère.",
        solution: "Layout visual-first",
        solutionDetail:
          "Hiérarchie photo forte et typographie retenue pour rester accueillant sans alourdir le chargement.",
      },
    ],
    quote: "Un site de café doit donner l’impression d’entrer avant même d’arriver.",
    relatedServiceId: "website",
    relatedServiceIds: ["uiux", "seo", "wordpress"],
    featured: true,
  },
  {
    slug: "adam-adventure-tours",
    title: "Adam Adventure Tours",
    subtitle:
      "Site vitrine pour une marque tourisme — de l’analyse des besoins au déploiement Next.js.",
    shortDescription:
      "Site vitrine tourisme Next.js pour Adam Adventure Tours — présence digitale professionnelle au Maroc.",
    description: [
      "Conception et développement de bout en bout du site vitrine Adam Adventure Tours & Tourism durant un stage — une marque tourisme qui s’adresse à des voyageurs au Maroc et à l’étranger.",
      "Périmètre : analyse des besoins, choix technologiques, design graphique, intégration Next.js, déploiement Vercel et maintenance.",
      "Résultat : une présence tourisme rapide et professionnelle, prête à accueillir visiteurs et clients en ligne.",
    ],
    coverImage: "/AdamAdventureTours/miniature-adamadventuretours.webp",
    gallery: [
      "/AdamAdventureTours/1-landing-page.webp",
      "/AdamAdventureTours/2-about.webp",
      "/AdamAdventureTours/3-services.webp",
      "/AdamAdventureTours/4-tours.webp",
      "/AdamAdventureTours/5-details-tour.webp",
      "/AdamAdventureTours/6-packages.webp",
      "/AdamAdventureTours/7-contact.webp",
    ],
    technologies: ["Next.js", "React", "Vercel", "UI Design"],
    type: "Site vitrine",
    year: "2025",
    role: "Développeur Web",
    liveUrl: "https://www.adamadventuretours.com/",
    features: [
      {
        title: "Vitrine de marque",
        description:
          "Présentation claire des circuits, de l’ambiance et de l’offre tourisme.",
        icon: "sparkles",
      },
      {
        title: "Design sur mesure",
        description:
          "Design graphique aligné sur l’identité de la marque voyage.",
        icon: "palette",
      },
      {
        title: "Next.js + Vercel",
        description:
          "Stack moderne avec déploiement rapide et maintenance simple.",
        icon: "zap",
      },
    ],
    challenges: [
      {
        challenge: "Du brief au site live",
        challengeDetail:
          "Livrer un site vitrine complet dans une fenêtre de stage courte.",
        solution: "Pipeline de livraison concentré",
        solutionDetail:
          "Périmètre serré : analyse → design → build Next.js → ship Vercel → maintenance.",
      },
    ],
    quote: "Une marque tourisme mérite un site aussi invitant que la destination.",
    relatedServiceId: "website",
    relatedServiceIds: ["seo", "uiux", "maintenance"],
    featured: true,
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug)
}

export function getRelatedProjects(slug: string, limit = 3): Project[] {
  return projects.filter((project) => project.slug !== slug).slice(0, limit)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured)
}

export function getProjectRelatedServiceIds(project: Project): string[] {
  const ids = [
    project.relatedServiceId,
    ...(project.relatedServiceIds ?? []),
  ]
  return [...new Set(ids.filter(Boolean))]
}

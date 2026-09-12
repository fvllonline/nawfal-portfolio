import type { ServicePageContent } from "@/lib/types"

/**
 * Contenu SEO / autorité pour chaque page service (Casablanca & Maroc).
 */
export const servicePageContent: Record<string, ServicePageContent> = {
  website: {
    h1: "Création de site vitrine à Casablanca",
    intro: [
      "Vous cherchez un développeur pour créer un site vitrine ou une landing page à Casablanca ? Je conçois des sites rapides, responsive et pensés pour convertir — startups, TPE/PME et indépendants au Maroc.",
      "Stack moderne (React, Next.js ou WordPress selon le besoin), design soigné, SEO technique de base et mise en ligne incluse. Packs clairs en MAD, devis sur mesure si votre projet sort du cadre.",
    ],
    seeAlso: {
      before: "Pour vendre en ligne plutôt qu’une simple vitrine, voir aussi la ",
      href: "/services/ecommerce",
      label: "création de site e-commerce",
      after: ".",
    },
    benefits: [
      "Site professionnel livré en 1 à 3 semaines selon le pack",
      "Design responsive (mobile, tablette, desktop)",
      "SEO technique de base et performances soignées",
      "Formulaire de contact et analytics prêts à l’emploi",
    ],
    idealFor: [
      "Entreprises et freelances à Casablanca qui veulent une présence en ligne crédible",
      "Lancement d’un produit ou d’un service au Maroc",
      "Remplacement d’un site obsolète ou non responsive",
    ],
    process: [
      "Brief & objectifs (identité, pages, ton)",
      "Maquette / direction visuelle",
      "Développement & intégration",
      "Tests, SEO technique, déploiement",
    ],
  },
  ecommerce: {
    h1: "Création de site e-commerce à Casablanca",
    intro: [
      "Boutique en ligne pour vendre au Maroc et à l’international : catalogue, panier, parcours de commande et vitrine produit claire.",
      "Je développe des e-commerces performants (Next.js / stack moderne) avec une UX mobile-first — essentiel pour les acheteurs marocains.",
    ],
    seeAlso: {
      before: "Une fois la boutique en ligne, le ",
      href: "/services/seo",
      label: "SEO & l’optimisation",
      after: " aident à attirer du trafic qualifié à Casablanca et au Maroc.",
    },
    benefits: [
      "Parcours d’achat fluide et catalogue structuré",
      "Design conversion-oriented, pensé mobile",
      "Base technique scalable pour faire grandir la boutique",
      "Tarifs en MAD avec packs Starter / Pro / Business",
    ],
    idealFor: [
      "Marques et commerces qui veulent démarrer la vente en ligne",
      "Catalogues produits à Casablanca et au Maroc",
      "Projets e-commerce sur mesure (hors template basique)",
    ],
    process: [
      "Analyse catalogue & parcours client",
      "Architecture produit / panier / checkout",
      "Développement & intégrations",
      "Recette, perf, mise en ligne",
    ],
  },
  web_app: {
    h1: "Développement d’application web Full-Stack à Casablanca",
    intro: [
      "Applications web, SaaS, dashboards et plateformes métier — conçues et développées en Full-Stack depuis Casablanca.",
      "React / Next.js côté front, Laravel ou Node côté API : une architecture claire, sécurisée et maintenable pour votre équipe.",
    ],
    seeAlso: {
      before: "Le socle data et l’auth passent souvent par un ",
      href: "/services/api_backend",
      label: "développement API & backend",
      after: " dédié.",
    },
    benefits: [
      "Produit sur mesure adapté à vos process métier",
      "Stack moderne et documentée",
      "Auth, rôles et données structurées",
      "Accompagnement du MVP à la montée en charge",
    ],
    idealFor: [
      "Startups et PME qui digitalisent un process",
      "Outils internes (CRM léger, back-office, portail)",
      "MVP web à lancer rapidement au Maroc",
    ],
    process: [
      "Cadrage fonctionnel & technique",
      "Architecture & modèles de données",
      "Développement itératif",
      "Tests, déploiement, handoff",
    ],
  },
  mobile_app: {
    h1: "Développement d’application mobile à Casablanca",
    intro: [
      "Applications Android & iOS avec React Native / Expo — une base unique, deux stores, coût maîtrisé.",
      "De la maquette à la publication, je livre des apps mobiles pour startups et entreprises au Maroc, avec une UX soignée.",
    ],
    seeAlso: {
      before: "Exemple concret : l’étude de cas ",
      href: "/projects/monpasstcf",
      label: "MonPassTCF",
      after: ", app mobile full-stack réalisée à Casablanca.",
    },
    benefits: [
      "Cross-platform (Android + iOS)",
      "Intégration API / backend",
      "UI native-feeling et performances",
      "Packs avec option publication stores",
    ],
    idealFor: [
      "Produits ed-tech, marketplace, services de proximité",
      "Complément mobile d’un site ou d’une web app",
      "MVP mobile financé en MAD",
    ],
    process: [
      "Parcours utilisateur & écrans clés",
      "Setup React Native / Expo",
      "Features, API, tests devices",
      "Build & accompagnement publication",
    ],
  },
  seo: {
    h1: "SEO & optimisation de site à Casablanca",
    intro: [
      "Améliorer la visibilité de votre site sur Google au Maroc : technique, on-page, performances et SEO local (Casablanca).",
      "Audit concret, corrections prioritaires, schema, Search Console — sans jargon inutile, avec un plan d’action clair.",
    ],
    seeAlso: {
      before: "Si le site est trop daté pour bien se positionner, une ",
      href: "/services/redesign",
      label: "refonte de site",
      after: " peut être le bon point de départ.",
    },
    benefits: [
      "Audit technique actionnable",
      "Title, meta, headings et structure",
      "Perf (Core Web Vitals) et images",
      "Option SEO local Casablanca / Maroc",
    ],
    idealFor: [
      "Sites déjà en ligne mais peu visibles",
      "Entreprises locales qui veulent apparaître sur « + Casablanca »",
      "Avant/après une refonte",
    ],
    process: [
      "Audit & priorisation",
      "Corrections techniques / on-page",
      "Mesure (Search Console, Analytics)",
      "Rapport et prochaines étapes",
    ],
  },
  redesign: {
    h1: "Refonte de site web à Casablanca",
    intro: [
      "Votre site est lent, daté ou peu clair ? Je modernise design, UX, performances et SEO technique — sans perdre votre contenu utile.",
      "Refonte progressive ou complète, migration soignée, résultat professionnel pour marques et entreprises au Maroc.",
    ],
    seeAlso: {
      before: "Exemple de vitrine modernisée : ",
      href: "/projects/adam-adventure-tours",
      label: "Adam Adventure Tours",
      after: ".",
    },
    benefits: [
      "Nouveau look + meilleure conversion",
      "Mobile-first et perf",
      "SEO technique repris",
      "Migration maîtrisée",
    ],
    idealFor: [
      "Sites WordPress / HTML vieillissants",
      "Marques qui changent d’identité",
      "Passage à une stack moderne (Next.js…)",
    ],
    process: [
      "Audit de l’existant",
      "Nouvelle structure & design",
      "Rebuild / migration",
      "Recette SEO & mise en ligne",
    ],
  },
  maintenance: {
    h1: "Maintenance de site web à Casablanca",
    intro: [
      "Mises à jour, sauvegardes, corrections et petites évolutions — un forfait mensuel en MAD pour garder votre site fiable.",
      "Idéal si vous n’avez pas d’équipe tech en interne à Casablanca ou au Maroc.",
    ],
    seeAlso: {
      before: "Souvent après une ",
      href: "/services/website",
      label: "création de site vitrine",
      after: " ou un e-commerce déjà en ligne.",
    },
    benefits: [
      "Sérénité technique au mois",
      "Correctifs et évolutions limitées incluses selon pack",
      "Monitoring et perf (packs Pro+)",
      "Support email prioritaire",
    ],
    idealFor: [
      "Sites vitrine et e-commerce déjà en production",
      "Après livraison d’un projet avec moi",
      "Entreprises sans développeur dédié",
    ],
    process: [
      "Prise en main & inventaire",
      "Routine mensuelle (updates, backups)",
      "Tickets / demandes",
      "Rapport selon pack",
    ],
  },
  uiux: {
    h1: "UI/UX Design à Casablanca",
    intro: [
      "Interfaces Figma claires et modernes pour le web et le mobile — avant le développement, pour éviter les allers-retours coûteux.",
      "Design system, prototypes cliquables et handoff développeur pour startups et agences au Maroc.",
    ],
    seeAlso: {
      before: "Côté produit livré, voir le projet ",
      href: "/projects/dupond-cafe",
      label: "Dupond Café",
      after: " — vitrine et identité visuelle.",
    },
    benefits: [
      "Maquettes desktop + mobile",
      "Prototype pour valider le parcours",
      "Composants réutilisables",
      "Handoff propre pour le dev",
    ],
    idealFor: [
      "Avant de coder une app ou un site",
      "Refonte UX d’un produit existant",
      "Équipes qui ont besoin d’un design system",
    ],
    process: [
      "Recherche / brief",
      "Wireframes & UI",
      "Prototype",
      "Handoff & itérations",
    ],
  },
  wordpress: {
    h1: "Création de site WordPress à Casablanca",
    intro: [
      "Sites WordPress professionnels, responsives et administrables — pour entreprises qui veulent éditer leur contenu facilement.",
      "Installation, thème, pages, SEO de base et formation : packs en MAD adaptés au marché marocain.",
    ],
    seeAlso: {
      before: "Pour un site plus sur mesure (hors CMS), voir la ",
      href: "/services/website",
      label: "création de site vitrine",
      after: ".",
    },
    benefits: [
      "Autonomie de contenu (admin WP)",
      "Design responsive",
      "SEO & perf de base",
      "Option WooCommerce sur packs avancés",
    ],
    idealFor: [
      "TPE/PME à Casablanca",
      "Blogs et sites institutionnels",
      "Besoin d’éditer sans développeur au quotidien",
    ],
    process: [
      "Cadrage pages & contenu",
      "Setup WP + design",
      "Contenu & plugins essentiels",
      "Formation & mise en ligne",
    ],
  },
  api_backend: {
    h1: "Développement API & backend à Casablanca",
    intro: [
      "APIs REST robustes (Laravel / Node) pour alimenter web apps et mobiles — auth, rôles, validation, documentation.",
      "Backend pensé pour la prod : sécurité, tests, déploiement. Expérience concrète depuis Casablanca.",
    ],
    seeAlso: {
      before: "Voir le projet ",
      href: "/projects/quick-stay",
      label: "Quick Stay",
      after: " — APIs REST Laravel, documentation et identité visuelle.",
    },
    benefits: [
      "API documentée et testée",
      "Auth et gestion des rôles",
      "Architecture claire et scalable",
      "Intégration front / mobile facilitée",
    ],
    idealFor: [
      "Apps qui ont besoin d’un vrai backend",
      "Équipes front sans ressource API",
      "Refonte ou structuration d’un legacy",
    ],
    process: [
      "Modélisation & contrats API",
      "Implémentation (routes, models…)",
      "Tests Postman / automatisés",
      "Docs & déploiement",
    ],
  },
  consulting: {
    h1: "Consulting & audit technique à Casablanca",
    intro: [
      "Un regard extérieur sur votre projet web : perf, SEO, UX, architecture et sécurité — avec un plan d’action priorisé.",
      "Utile avant une refonte, un recrutement ou un lancement. Accompagnement possible après l’audit.",
    ],
    seeAlso: {
      before: "Si l’audit conclut à un rebuild, je peux enchaîner sur une ",
      href: "/services/redesign",
      label: "refonte de site",
      after: ".",
    },
    benefits: [
      "Diagnostic clair et priorisé",
      "Recommandations actionnables",
      "Couverture technique + SEO + UX (packs Pro+)",
      "Option accompagnement post-audit",
    ],
    idealFor: [
      "Fondateurs non-tech qui veulent y voir clair",
      "Équipes qui stagnent sur la perf ou la dette",
      "Due diligence légère avant scale",
    ],
    process: [
      "Collecte accès & contexte",
      "Audit (code / site / stack)",
      "Rapport & priorités",
      "Restitution + suite optionnelle",
    ],
  },
}

export function getServicePageContent(
  id: string
): ServicePageContent | undefined {
  return servicePageContent[id]
}

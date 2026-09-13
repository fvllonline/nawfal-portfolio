import type { ServicePageContent } from "@/lib/types"

/**
 * Contenu des pages service — une intention principale par URL.
 * La localisation (Casablanca / Maroc) est dans le label, le NAP et 1 phrase d’intro max.
 */
export const servicePageContent: Record<string, ServicePageContent> = {
  website: {
    h1: "Création de site vitrine",
    metaTitle: "Création de site web à Casablanca",
    metaDescription:
      "Site vitrine ou landing page : design responsive, SEO technique et mise en ligne. Packs dès 4 000 MAD — Nawfal Addaoui, freelance à Casablanca.",
    intro: [
      "Vous avez besoin d’un site pour présenter votre activité, un produit ou un service — clairement, sur mobile comme sur desktop. Je conçois des vitrines et landing pages rapides, pensées pour le contact et la conversion.",
      "Stack au choix selon le projet : React / Next.js pour un site sur mesure, ou WordPress si vous voulez éditer le contenu au quotidien. SEO technique de base et mise en ligne inclus. Packs en MAD, devis si le périmètre sort du cadre.",
    ],
    technologies: ["React", "Next.js", "Tailwind CSS", "WordPress"],
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
      "Entreprises et indépendants qui veulent une présence crédible",
      "Lancement d’un produit ou d’un service au Maroc",
      "Remplacement d’un site obsolète ou non responsive",
    ],
    process: [
      "Brief & objectifs (identité, pages, ton)",
      "Maquette / direction visuelle",
      "Développement & intégration",
      "Tests, SEO technique, déploiement",
    ],
    faq: [
      {
        question: "Combien coûte un site vitrine ?",
        answer:
          "Les packs commencent à 4 000 MAD pour une landing page (Starter), 7 500 MAD pour un site de 4 à 6 pages (Pro) et 13 000 MAD pour un site plus complet (Business). Un devis précise le périmètre si votre besoin sort de ces cadres.",
      },
      {
        question: "Quel délai pour un site web ?",
        answer:
          "Environ 5 à 7 jours pour une landing, 10 à 14 jours pour un site Pro, 2 à 3 semaines pour un site Business — selon la disponibilité des contenus et le nombre d’allers-retours.",
      },
      {
        question: "Quelle différence entre un site vitrine et une boutique e-commerce ?",
        answer:
          "La vitrine présente l’activité et oriente vers le contact. L’e-commerce ajoute catalogue, panier et commande. Si vous vendez en ligne, l’offre boutique est plus adaptée.",
      },
      {
        question: "Next.js ou WordPress ?",
        answer:
          "Next.js (ou React) pour un site sur mesure, rapide et maîtrisé. WordPress si vous voulez modifier textes et pages vous-même dans un CMS. Je propose les deux, selon l’usage réel.",
      },
    ],
  },
  ecommerce: {
    h1: "Boutique e-commerce sur mesure",
    metaTitle: "Création de site e-commerce",
    metaDescription:
      "Boutique en ligne : catalogue, panier et commande. Packs dès 12 000 MAD, UX mobile-first — pour vendre au Maroc et à l’international.",
    intro: [
      "Une boutique en ligne sert à vendre : catalogue lisible, fiches produit, panier et parcours de commande. Je développe des e-commerces performants, d’abord pensés pour le mobile — le canal d’achat le plus courant au Maroc.",
      "Stack moderne (Next.js / React), administration du catalogue selon le pack, et base technique qui peut grandir. Les passerelles de paiement se calent au devis selon votre activité.",
    ],
    technologies: ["Next.js", "React", "Tailwind CSS"],
    seeAlso: {
      before: "Une fois la boutique en ligne, le ",
      href: "/services/seo",
      label: "SEO & l’optimisation",
      after: " aident à attirer du trafic qualifié.",
    },
    benefits: [
      "Parcours d’achat fluide et catalogue structuré",
      "Design orienté conversion, pensé mobile",
      "Base technique scalable pour faire grandir la boutique",
      "Tarifs en MAD avec packs Starter / Pro / Business",
    ],
    idealFor: [
      "Marques et commerces qui démarrent la vente en ligne",
      "Catalogues produits au Maroc ou à l’export",
      "Projets e-commerce sur mesure (hors template basique)",
    ],
    process: [
      "Analyse catalogue & parcours client",
      "Architecture produit / panier / checkout",
      "Développement & intégrations",
      "Recette, perf, mise en ligne",
    ],
    faq: [
      {
        question: "Combien coûte une boutique en ligne ?",
        answer:
          "Les packs partent de 12 000 MAD (Starter : catalogue, panier, commande, paiement en ligne), 20 000 MAD (Pro) et 32 000 MAD (Business). Le devis ajuste catalogue, stocks et intégrations.",
      },
      {
        question: "Le paiement en ligne est-il inclus ?",
        answer:
          "Oui, le pack Starter prévoit déjà un système de commande et le paiement en ligne. La passerelle exacte (banque, agrégateur, etc.) se choisit selon votre activité et se précise au devis.",
      },
    ],
  },
  web_app: {
    h1: "Applications web Full-Stack",
    metaTitle: "Développement d’application web",
    metaDescription:
      "SaaS, dashboards et outils métier en React / Next.js et Laravel. Packs dès 18 000 MAD — du cadrage au déploiement.",
    intro: [
      "Applications web, SaaS, dashboards et plateformes métier : un produit qui sert vos process, pas seulement une vitrine. Front React / Next.js, API Laravel ou Node, architecture claire pour que votre équipe puisse reprendre le projet.",
      "Je travaille en Full-Stack depuis Casablanca : cadrage, modèles de données, auth, rôles, puis itérations jusqu’au déploiement.",
    ],
    technologies: ["React", "Next.js", "Laravel", "Node.js"],
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
      "MVP web à lancer rapidement",
    ],
    process: [
      "Cadrage fonctionnel & technique",
      "Architecture & modèles de données",
      "Développement itératif",
      "Tests, déploiement, handoff",
    ],
  },
  mobile_app: {
    h1: "Applications mobiles React Native",
    metaTitle: "Développement d’application mobile",
    metaDescription:
      "Apps Android et iOS avec React Native / Expo. Packs dès 15 000 MAD — une base, deux stores, UX soignée.",
    intro: [
      "Une application Android et iOS à partir d’une seule base React Native / Expo : délai et budget plus raisonnables qu’un double développement natif, avec une interface proche du natif.",
      "De la maquette à la publication (packs avancés), je livre des apps pour startups et entreprises au Maroc — auth, API, notifications selon le périmètre.",
    ],
    technologies: ["React Native", "Expo", "TypeScript"],
    seeAlso: {
      before: "Exemple concret : l’étude de cas ",
      href: "/projects/monpasstcf",
      label: "MonPassTCF",
      after: ", app mobile de préparation au TCF.",
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
    faq: [
      {
        question: "Combien coûte une application mobile ?",
        answer:
          "À partir de 15 000 MAD pour un Starter (4 à 5 écrans, Android + iOS), 28 000 MAD en Pro (auth, API, notifications) et 50 000 MAD en Business (backend, dashboard, publication stores). Le devis suit le nombre d’écrans et d’intégrations.",
      },
      {
        question: "Pourquoi React Native plutôt que du natif ?",
        answer:
          "Une base de code pour les deux stores, moins de double maintenance, un time-to-market plus court. C’est la stack utilisée sur MonPassTCF. Un projet 100 % natif se discute si une contrainte le justifie vraiment.",
      },
    ],
  },
  seo: {
    h1: "SEO technique et visibilité",
    metaTitle: "SEO et optimisation de site",
    metaDescription:
      "Audit et corrections SEO : technique, on-page, performances. Packs dès 2 500 MAD — pour mieux apparaître sur Google au Maroc.",
    intro: [
      "Un site lent, mal structuré ou sans balises claires reste invisible, même avec un bon design. J’audite le technique, l’on-page et les performances, puis je corrige ce qui bloque vraiment l’indexation et le clic.",
      "Plan d’action priorisé, Search Console, schema si pertinent. Le SEO local (ville + métier) se traite quand vous avez une zone d’activité réelle — pas en répétant la ville partout.",
    ],
    technologies: ["Search Console", "Core Web Vitals", "Schema.org"],
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
      "Mesure via Search Console et Analytics",
    ],
    idealFor: [
      "Sites déjà en ligne mais peu visibles",
      "Entreprises locales qui veulent apparaître sur des recherches de proximité",
      "Avant ou après une refonte",
    ],
    process: [
      "Audit & priorisation",
      "Corrections techniques / on-page",
      "Mesure (Search Console, Analytics)",
      "Rapport et prochaines étapes",
    ],
  },
  redesign: {
    h1: "Refonte de site existant",
    metaTitle: "Refonte de site web",
    metaDescription:
      "Moderniser un site lent ou daté : design, UX, performances et SEO technique, sans perdre le contenu utile. Packs dès 5 000 MAD.",
    intro: [
      "Votre site est lent, daté ou peu clair ? La refonte sert à moderniser le design, l’UX et la technique — pas à tout jeter. On garde ce qui convertit, on reconstruit ce qui bloque.",
      "Refonte progressive ou complète, migration soignée, stack moderne (souvent Next.js) quand l’existant ne tient plus.",
    ],
    technologies: ["Next.js", "React", "SEO technique"],
    seeAlso: {
      before: "Exemple de vitrine modernisée : ",
      href: "/projects/adam-adventure-tours",
      label: "Adam Adventure Tours",
      after: ".",
    },
    benefits: [
      "Nouveau look + meilleure lisibilité",
      "Mobile-first et performances",
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
    h1: "Maintenance et suivi de site",
    metaTitle: "Maintenance de site web",
    metaDescription:
      "Forfait mensuel : mises à jour, sauvegardes, correctifs. Dès 800 MAD / mois — pour un site déjà en ligne, sans équipe tech interne.",
    intro: [
      "Un site livré n’est pas « fini » : mises à jour, sauvegardes, petits bugs, évolutions mineures. Un forfait mensuel en MAD évite de tout traiter en urgence.",
      "Utile si vous n’avez pas de développeur en interne — que le site ait été fait avec moi ou ailleurs, après un inventaire.",
    ],
    technologies: ["Sauvegardes", "Mises à jour", "Monitoring"],
    seeAlso: {
      before: "Souvent après une ",
      href: "/services/website",
      label: "création de site vitrine",
      after: " ou un e-commerce déjà en ligne.",
    },
    benefits: [
      "Sérénité technique au mois",
      "Correctifs et évolutions limitées selon pack",
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
    faq: [
      {
        question: "Que comprend la maintenance mensuelle ?",
        answer:
          "Selon le pack (800, 1 500 ou 3 000 MAD / mois) : mises à jour, sauvegardes, correctifs et un volume d’évolutions limité. Les packs Pro et Business ajoutent davantage de suivi et de réactivité.",
      },
    ],
  },
  uiux: {
    h1: "Design UI/UX produit",
    metaTitle: "UI/UX Design web et mobile",
    metaDescription:
      "Maquettes Figma, prototypes et design system avant le développement. Packs dès 2 500 MAD — pour valider le parcours sans coder trop tôt.",
    intro: [
      "Des interfaces Figma claires pour le web et le mobile, avant d’écrire une ligne de code. Ça évite les allers-retours coûteux une fois le développement lancé.",
      "Wireframes, UI, prototype cliquable et handoff pour l’équipe de dev. Ce n’est pas une offre « graphiste / print » : le livrable sert un produit digital.",
    ],
    technologies: ["Figma", "Design system", "Prototypes"],
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
    h1: "Sites WordPress administrables",
    metaTitle: "Création de site WordPress",
    metaDescription:
      "Site WordPress professionnel, éditable sans développeur. Packs dès 4 000 MAD — thème, pages, SEO de base et formation.",
    intro: [
      "WordPress convient quand vous voulez modifier textes, pages et actualités vous-même, sans passer par un développeur à chaque changement. Je livre un site administrable, responsive, avec l’essentiel des plugins — pas un thème surchargé.",
      "Si vous voulez un site plus sur mesure, plus rapide, ou une app, Next.js reste souvent le meilleur choix. Les deux offres ne se remplacent pas : CMS éditable vs stack applicative.",
    ],
    technologies: ["WordPress", "WooCommerce"],
    seeAlso: {
      before: "Pour un site plus sur mesure (hors CMS), voir les ",
      href: "/services/website",
      label: "sites vitrines Next.js",
      after: ".",
    },
    benefits: [
      "Autonomie de contenu (admin WP)",
      "Design responsive",
      "SEO & perf de base",
      "Option WooCommerce sur packs avancés",
    ],
    idealFor: [
      "TPE / PME qui éditent souvent leur contenu",
      "Blogs et sites institutionnels",
      "Besoin d’un CMS connu de l’équipe",
    ],
    process: [
      "Cadrage pages & contenu",
      "Setup WP + design",
      "Contenu & plugins essentiels",
      "Formation & mise en ligne",
    ],
  },
  api_backend: {
    h1: "API REST et backend",
    metaTitle: "Développeur Laravel et API",
    metaDescription:
      "APIs REST Laravel ou Node : auth, rôles, tests et documentation. Packs dès 6 000 MAD — pour apps web et mobiles.",
    intro: [
      "Un front ou une app mobile a besoin d’un vrai backend : auth, rôles, validation, documentation. Je construis des APIs REST (Laravel ou Node) pensées pour la prod — pas un prototype jetable.",
      "Contrats clairs, tests Postman, déploiement. Référence concrète : le backend Laravel de Quick Stay.",
    ],
    technologies: ["Laravel", "PHP", "Node.js", "Postman"],
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
    h1: "Audit technique et conseil",
    metaTitle: "Audit technique de site web",
    metaDescription:
      "Regard extérieur sur perf, SEO, UX et architecture, avec un plan d’action priorisé. Packs dès 1 500 MAD.",
    intro: [
      "Un regard extérieur avant une refonte, un recrutement ou un lancement : performance, SEO, UX, architecture, sécurité — puis un plan d’action ordonné, pas un rapport de 40 pages illisible.",
      "L’accompagnement après l’audit est optionnel. Si le diagnostic pointe un rebuild, on enchaîne sur une refonte ou un nouveau développement.",
    ],
    technologies: ["Audit", "Architecture", "SEO", "UX"],
    seeAlso: {
      before: "Si l’audit conclut à un rebuild, je peux enchaîner sur une ",
      href: "/services/redesign",
      label: "modernisation de site existant",
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
      "Équipes bloquées sur la perf ou la dette",
      "Due diligence légère avant de scaler",
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

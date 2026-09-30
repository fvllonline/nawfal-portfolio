export type FreelancePlatform = {
  id: string
  name: string
  tagline: string
  description: string
  href: string
  logo: string
}

export const freelancePlatforms: FreelancePlatform[] = [
  {
    id: "upwork",
    name: "Upwork",
    tagline: "Profil international",
    description:
      "Missions remote Full-Stack : sites, apps et APIs pour clients internationaux.",
    href: "https://www.upwork.com/freelancers/~0111fe11a7f035e6e8?mp_source=share",
    logo: "/logo_upwork.png",
  },
  {
    id: "freelancer",
    name: "Freelancer",
    tagline: "Projets à la carte",
    description:
      "Développement web & mobile, livraisons cadrées et communication claire.",
    href: "https://www.freelancer.com/u/nawfaladdaoui17?frm=nawfaladdaoui17&sb=t",
    logo: "/logo_freelancer.png",
  },
  {
    id: "fiverr",
    name: "Fiverr",
    tagline: "Gigs & packs rapides",
    description:
      "Offres prêtes à commander pour landings, sites et besoins ponctuels.",
    href: "https://fr.fiverr.com/s/wbk6PdD",
    logo: "/logo_fiverr.png",
  },
  {
    id: "malt",
    name: "Malt",
    tagline: "Freelance francophone",
    description:
      "Profil Malt FR pour collabs avec startups et entreprises en France & Europe.",
    href: "https://www.malt.fr/profile/nawfaladdaoui1",
    logo: "/logo_malt.png",
  },
]

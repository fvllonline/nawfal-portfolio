# REDESIGN_PLAN.md

> Portfolio : [nawfal.online](https://nawfal.online)  
> Stack : Next.js 15 (App Router) · React 19 · Tailwind CSS v4 · Framer Motion · TypeScript  
> Statut : **Phase 1 — Analyse terminée. Aucune modification de code dans cette phase.**  
> Référence visuelle : brief utilisateur + prototype `prototype-new-design/homepage_nawfal_addaoui_desktop/screen.png` (layout / ambiance uniquement).

---

## 1. Architecture actuelle

### Stack & outillage

| Couche | Technologie |
|---|---|
| Framework | Next.js `15.5.18` (App Router) |
| UI | React 19, Tailwind CSS 4, Framer Motion |
| Formulaires | react-hook-form patterns + Formspree (`siteConfig.formspreeEndpoint`) |
| Carrousels | Embla (`embla-carousel-react` + autoplay) — encore actifs sur Projets / Expérience / Certifications |
| Icons | Lucide React (+ `react-icons` peu utilisé) |
| Analytics | `@vercel/analytics` |
| SEO | Metadata API, `sitemap.ts`, `robots.ts`, JSON-LD (`Person`, `ProfessionalService`, `WebSite`, `Service`, `CreativeWork`, `FAQPage`, `BreadcrumbList`) |

### Arborescence utile

```
app/
  layout.tsx          → metadata globale, fonts, JsonLd
  page.tsx            → homepage (sections dynamiques)
  projects/[slug]/    → études de cas
  services/[id]/      → pages service + packs MAD
  api/contact/        → route API (Formspree côté client est la voie réelle)
  sitemap.ts, robots.ts
components/
  layout/             → SiteShell, Navbar, Footer, HashScroll, ScrollProgress
  sections/           → Hero, About, Services, Projects, Experience, Certs, Testimonials, Contact
  projects/           → cards, detail page blocks, gallery, related
  services/           → ServiceDetail, packs, FAQ, icons
  seo/                → JsonLd, NapBlock, Breadcrumbs
  ui/                 → motion, carousel, lazy-mount, shadcn-like primitives
data/                 → source de vérité métier (site, projects, services, experience…)
lib/                  → fonts, seo helpers, design-tokens, quote-request, types
public/               → images WebP, CVs PDF, certificats PDF
prototype-new-design/ → maquettes HTML/PNG (référence visuelle, pas de runtime)
```

### Routing public

| Route | Rôle |
|---|---|
| `/` | Landing one-page (sections ancrées) |
| `/projects/[slug]` | Étude de cas (6 projets) |
| `/services/[id]` | Fiche service + packs (11 services) |
| `/api/contact` | Endpoint (le formulaire homepage utilise Formspree) |

### Design system actuel (« Lumina Noir »)

- Background : `#0B0F19`
- Primary : `#00E5A0` (+ bright `#6EFFC0`)
- **Secondary violet** : `#7B61FF` (à retirer / neutraliser selon le brief)
- Text : `#F8FAFC` / muted `#94A3B8`
- Glass cards, radius 16px, section gap 120px
- Fonts : **Hanken Grotesk** (display), **DM Sans** (body), **JetBrains Mono** (labels)

---

## 2. Sections existantes (homepage)

Ordre actuel dans `app/page.tsx` :

| # | Section | ID ancre | Layout actuel |
|---|---|---|---|
| 1 | Navbar | — | Sticky, blur, 7 liens, hamburger mobile |
| 2 | Hero | `#home` | Centré, full-bleed `herobg.webp`, H1 = nom |
| 3 | About | `#about` | Portrait + texte + skill bars + soft skills |
| 4 | Services | `#services` | **Bento asymétrique** (déjà refait, plus de carousel) |
| 5 | Projects | `#projects` | **Carousel Embla** de `ProjectCard` |
| 6 | Experience | `#experience` | **Carousel Embla** |
| 7 | Certifications | `#certifications` | **Carousel Embla** |
| 8 | Testimonials | `#testimonials` | Grille / cards |
| 9 | Contact | `#contact` | 50/50 info + formulaire Formspree (+ quote prérempli) |
| 10 | Footer | — | NAP + liens services / projets / contact / CV |

**Manque vs brief redesign :** section dédiée **Compétences / Technologies** (les stacks existent surtout dans `projects[].technologies` et le hero).

---

## 3. Composants réutilisables

### À conserver / adapter

| Composant | Usage |
|---|---|
| `SiteShell` | Wrapper navbar + main + footer |
| `Navbar` / `Footer` | Redesign structure, garder hash scroll + active section |
| `FadeIn`, `Stagger`, `StaggerItem`, `PageTransition` | Animations scroll (déjà Framer Motion) |
| `LazyMount` | Perf below-fold |
| `ProjectCard` | Remplacer / réécrire pour layout horizontal premium |
| `serviceIcons` | Icônes services |
| `NapBlock` | NAP local SEO (contact / footer) |
| `JsonLd` / breadcrumbs | SEO — ne pas casser |
| `ServiceDetail` + packs + FAQ | Pages `/services/[id]` (hors homepage, à harmoniser tokens) |
| Project detail blocks | Pages `/projects/[slug]` (harmoniser palette) |
| `quote-request` + Contact form prefill | Fonctionnalité devis |

### Legacy / peu utiles pour le redesign

- `components/_legacy/*`
- Embla carousel sur Experience / Projects / Certifications (à retirer)
- Accent **violet** (`--secondary`) dans tokens et glows

---

## 4. Assets disponibles

### Images

| Asset | Usage |
|---|---|
| `/PRFLN.webp` | Portrait Nawfal |
| `/herobg.webp` | Fond hero / workspace |
| `/Mina.webp`, `/Youness.webp`, `/Ayman.webp` | Avatars témoignages |
| `/tcf.webp`, `/cisco.webp` | Logos certifications |
| `/MonPassTCF/*`, `/QuickSTAY/*`, `/Breezoria/*`, `/ZacaStore/*`, `/DupondCafe/*`, `/AdamAdventureTours/*` | Covers + galeries projets |
| `/favicon.webp`, `/favicon-48.png` | Favicons |

### Documents

- CVs : `CV-NAWFAL-French.pdf`, `English`, `Deutsch`
- Certificats PDF sous `/public/certifs/`

### Projets **réels** (source de vérité)

1. **MonPassTCF** — Application mobile  
2. **Quick Stay** — Application web  
3. **Breezoria** — Site e-commerce  
4. **ZacaStore** — Site e-commerce (en cours)  
5. **Dupond Café** — Site vitrine  
6. **Adam Adventure Tours** — Site vitrine  

**Absents du repo (ne pas inventer) :** AutoBidder, ProtectAssistance.

### Expériences réelles

1. Alvon Digital Group — Full-Stack & Mobile (collaboration, depuis 2026)  
2. Alvon Digital Group — Stage PFE (MonPassTCF)  
3. Adam Adventure Tours — Stage web  
4. MB Way — Backend & Brand (Quick Stay)

### Certifications réelles

TCF TP-B2 · English For IT 1&2 · JS Essentials 1&2 · Python Essentials 1&2 · Intro CyberSecurity · Junior CyberSecurity Analyst

### Témoignages réels

Mina (MB Way) · Youness (Adam Adventure) · Ayman (LionsGeek)

---

## 5. Ce qui doit être conservé

- Toutes les **données métier** (`data/*`) : textes, prix MAD, packs, dates, rôles, liens live/GitHub
- Routes `/projects/*` et `/services/*` + maillage interne + schema
- Formulaire contact **Formspree** + préremplissage devis (`QUOTE_REQUEST_EVENT`)
- NAP / SEO local / `llms.txt` / Search Console tokens
- CVs téléchargeables, PDFs certificats
- Performance : `dynamic()` sections, `LazyMount`, images WebP, Next/Image
- Accessibilité de base (skip/main, aria labels, reduced motion)
- Contenu FR (`lang="fr"`)

---

## 6. Ce qui doit être redesigné

### Tokens & ambiance

| Actuel | Cible brief |
|---|---|
| `#0B0F19` | `#080B14` / `#0B0F19` |
| Surfaces glass `#131A2B` | `#101522` / `#141927` / `#181D2A` |
| Primary `#00E5A0` | `#00D9B5` (+ secondaire `#00BFA5`) |
| Text muted `#94A3B8` | `#8D96A8` |
| Secondary **violet** `#7B61FF` | **Supprimer** comme accent principal |
| Hero centré nom | Hero **2 colonnes** : typo expressive + visuel |
| About séparé | Intégré / reformulé dans le récit (ou fusionné avec Skills) |
| Services bento 11 cards | Homepage : **4 cartes** groupées (mapper sans perdre les 11 pages `/services`) |
| Projects carousel | Blocs **horizontaux** image | contenu |
| Experience carousel | **Timeline verticale** teal |
| Certs carousel | Grille compacte badges |
| Pas de section Skills | **Nouvelle section** pills + éventuel terminal décoratif |
| Nav 7 liens | Nav simplifiée + CTA « Me contacter → » |

### Typographie

- Conserver Hanken / DM Sans / JetBrains **ou** basculer affichage vers Manrope/Inter si besoin d’alignement screenshot — décision à figer en Phase 2 (préférence : **garder Hanken+DM** pour éviter FOUC / rework fonts, ajuster scale).

---

## 7. Nouveaux composants nécessaires

```
components/
  sections/
    hero-section.tsx          → rewrite 2-col
    services-section.tsx      → 4 cards + lien vers catalogue complet
    projects-section.tsx      → list horizontal ProjectRow
    experience-section.tsx    → ExperienceTimeline
    skills-section.tsx        → NOUVEAU
    certifications-section.tsx→ compact grid
    testimonials-section.tsx  → 3 cards glass
    contact-section.tsx       → polish layout (garder Formspree)
  layout/
    navbar.tsx                → brand split + CTA
    footer.tsx                → minimal
  ui/
    section-header.tsx        → NOUVEAU (eyebrow + H2 + accent)
    skill-badge.tsx           → NOUVEAU
    experience-timeline.tsx   → NOUVEAU
    project-row.tsx           → NOUVEAU (ou rewrite project-card)
```

**Data helpers à ajouter (sans inventer de faits) :**

- `data/skills.ts` (ou dérivé) : liste de techs **extraite** des projets + stacks déjà cités (React, Next.js, Laravel, React Native, Express, MySQL, Tailwind, Figma…).  
  - **Ne pas** ajouter Java / C# / .NET / Prisma / Bootstrap Studio s’ils n’apparaissent pas réellement dans le portfolio.

**Stats Hero :** uniquement des chiffres justifiables (ex. projets featured = 6, disponibilité freelance, années depuis première expérience listée). Pas de vanity metrics inventés.

---

## 8. Plan d’implémentation

### Étape A — Fondations (tokens)

1. Mettre à jour `app/globals.css` + `lib/design-tokens.ts` (palette turquoise, surfaces, retrait violet).
2. Remplacer glows `bg-secondary` violet par teal/cyan subtil.
3. Vérifier contrastes (texte `#8D96A8` sur `#080B14`).

### Étape B — Shell

4. Navbar : `Nawfal` + `ADDAOUI` accent ; liens Accueil / Projets / Expérience / Compétences / Avis ; CTA droite.
5. Footer minimal + copyright dynamique.
6. Mettre à jour `data/navigation.ts` (ancres).

### Étape C — Sections homepage (ordre brief)

7. **Hero** 2-col + CTAs + tech badges + stats prudentes.  
8. **Services** : 4 cartes mappées depuis services réels, ex. :  
   - Développement Web ← `website` / `web_app`  
   - Applications Mobiles ← `mobile_app`  
   - Bases de données / API ← `api_backend`  
   - UI/UX & Design ← `uiux`  
   + lien « Voir tous les services » vers `#services` détail ou pages `/services/*`.  
9. **Projets** : rows horizontales (cover réelle + tech + lien `/projects/slug`).  
10. **Expérience** : timeline verticale (données `experiences`).  
11. **Compétences** : nouvelle section.  
12. **Certifications** : grille dense.  
13. **Avis** : 3 cards existantes.  
14. **Contact** : layout 50/50, conserver Formspree + quote.  

### Étape D — Pages filles

15. Harmoniser tokens sur `/projects/[slug]` et `/services/[id]` (pas de redesign structurel lourd sauf incohérence visuelle).

### Étape E — Qualité

16. Responsive 1440 → 320.  
17. `tsc` + `build`.  
18. Audit : ancres Crawlmouse non régressées, SEO schema intact.  
19. Rédiger `REDESIGN_REPORT.md`.

### Ordre de livraison (comme demandé)

1. Analyse + ce plan ✅  
2. Validation des changements prévus (cette étape)  
3. Implémentation **section par section** (Hero → … → Footer)  
4. Responsive  
5. Non-régression fonctionnalités  
6. Audit UI/UX final + rapport  

---

## 9. Risques éventuels

| Risque | Mitigation |
|---|---|
| Brief cite projets / stacks absents (AutoBidder, Java, C#…) | Utiliser **uniquement** `data/` ; documenter dans le rapport |
| 11 services vs 4 cards homepage | Mapper 4 familles + garder pages `/services/[id]` intactes |
| Section About actuelle riche (SEO local) | Ne pas supprimer le contenu : le redistribuer (Hero sous-titre / Skills / Contact) |
| Accent violet encore dans CSS / motion | Sweep global des tokens |
| Embla encore importé | Retirer des 3 sections restantes ; garder package si utilisé ailleurs (ou prune) |
| Hero title marketing (« Des idées… ») vs SEO « Développeur Full-Stack Casablanca » | Title SEO (`metadata`) inchangé ; H1 visible marketing + sous-ligne métier locale |
| Formspree + champs Subject | Conserver champs actuels ; UI seulement |
| Perf : plus d’images projets en full-width rows | `sizes`, lazy, `quality` contrôlés |
| Regressions Crawlmouse / ancres | Ne pas re-wrapper descriptions dans des `<Link>` |

---

## 10. Décisions à valider avant code

1. **Titre Hero** : utiliser le copy marketing du brief (« Des idées / en applications / qui comptent. ») tout en gardant le nom Nawfal visible (eyebrow ou ligne secondaire) ?  
2. **About** : fusionner dans Hero/Skills, ou garder une section courte ?  
3. **Fonts** : conserver Hanken + DM Sans, ou migrer vers Inter/Manrope ?  
4. **Projets homepage** : afficher les **6** projets ou seulement un sous-ensemble « featured » ?  
5. Confirmation : **aucun** ajout d’AutoBidder / ProtectAssistance / stacks non présentes.

---

## Décisions validées (2026-09-29)

1. **Hero** : copy exact « Des idées / en applications / qui comptent. » + Nawfal ADDAOUI visible (navbar + hero).
2. **About** : pas de grosse section séparée — redistribuer vers Hero / Compétences / Contact.
3. **Fonts** : garder Hanken Grotesk + DM Sans + JetBrains Mono.
4. **Projets** : les 6 projets réels, layout premium, pas de carousel.
5. **Données** : uniquement le repo — aucun projet/stack inventé.

## Étape 3 — Changements fichier par fichier

### Tokens / config
| Fichier | Action |
|---|---|
| `app/globals.css` | Palette `#080B14`, `#00D9B5`, surfaces, retirer violet |
| `lib/design-tokens.ts` | Miroir JS des tokens |
| `data/navigation.ts` | Liens : Accueil, Projets, Expérience, Compétences, Avis + Contact CTA |

### Layout
| Fichier | Action |
|---|---|
| `components/layout/navbar.tsx` | Brand Nawfal + ADDAOUI accent, CTA « Me contacter → » |
| `components/layout/footer.tsx` | Footer minimal |

### Homepage sections
| Fichier | Action |
|---|---|
| `components/sections/hero-section.tsx` | Rewrite 2-col + stats + tech badges |
| `components/sections/about-section.tsx` | Retirer de `page.tsx` (contenu redistribué) |
| `components/sections/services-section.tsx` | 4 cartes familles |
| `components/sections/projects-section.tsx` | 6 rows horizontales |
| `components/sections/experience-section.tsx` | Timeline verticale |
| `components/sections/skills-section.tsx` | **Nouveau** |
| `components/sections/certifications-section.tsx` | Grille compacte |
| `components/sections/testimonials-section.tsx` | 3 cards glass |
| `components/sections/contact-section.tsx` | Polish 50/50, garder Formspree |
| `app/page.tsx` | Nouvel ordre de sections |
| `data/skills.ts` | **Nouveau** — techs dérivées des données réelles |

### UI helpers (nouveaux)
| Fichier | Action |
|---|---|
| `components/ui/section-header.tsx` | Eyebrow + H2 accent |
| `components/sections/skills-section.tsx` | Pills + terminal décoratif optionnel |

**Prochaines étapes :** tokens → Hero → shell → sections restantes → `REDESIGN_REPORT.md`.

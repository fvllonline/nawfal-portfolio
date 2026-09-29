# REDESIGN_REPORT.md

> Portfolio redesign — nawfal.online  
> Status: **implemented** · verified with `npx tsc --noEmit` + `npm run build` (exit 0)

---

## Decisions locked in

| Topic | Choice |
|---|---|
| Hero copy | “Des idées / en applications / qui comptent.” + **Nawfal ADDAOUI** visible |
| About | Removed as homepage section; content redistributed (Hero + Skills) |
| Fonts | Keep Hanken Grotesk / DM Sans / JetBrains Mono |
| Projects | All **6** real projects, no carousel |
| Data honesty | No invented projects, stacks, or services |

---

## Design system

- Palette: teal-only (`#080B14` bg, `#00D9B5` / `#00BFA5` accents). Violet secondary removed from tokens.
- Tokens: `app/globals.css` + `lib/design-tokens.ts`
- Carousels removed from homepage Services / Projects / Experience / Certifications

---

## Homepage order (`app/page.tsx`)

1. Hero (`#home`)
2. Services (`#services`) — 4 cards → real `/services/[id]` pages
3. Projects (`#projects`) — grid of 6
4. Experience (`#experience`) — vertical timeline
5. Skills (`#skills`) — pills from real stacks + soft skills
6. Certifications (`#certifications`)
7. Testimonials (`#testimonials`)
8. Contact (`#contact`) — form + **NapBlock** (SEO NAP retained)

Navbar anchors updated (Skills instead of About). Footer minimal; NAP lives in Contact.

---

## Key files touched

| Area | Files |
|---|---|
| Tokens | `app/globals.css`, `lib/design-tokens.ts` |
| Shell | `components/layout/navbar.tsx`, `footer.tsx`, nav config |
| Sections | `hero-section`, `services-section`, `projects-section`, `experience-section`, `skills-section`, `certifications-section`, `testimonials-section`, `contact-section` |
| Data | `data/skills.ts` (`skillPills`, `homepageServiceCards`), exports in `data/index.ts` |
| Page | `app/page.tsx` (no About; SkillsSection added) |

---

## Verification

- TypeScript: clean
- Production build: 24/24 static pages generated
- Em dashes: cleared from source UI/data (plan PNG / plan doc may still contain them)
- SEO: NapBlock on Contact; schema routes unchanged

---

## Follow-ups (optional)

- Visual QA on mobile breakpoints (Hero 2-col → stack)
- Decide whether to delete unused `about-section.tsx` or keep for archive
- Embla remains available via `components/ui/carousel.tsx` for non-homepage use only

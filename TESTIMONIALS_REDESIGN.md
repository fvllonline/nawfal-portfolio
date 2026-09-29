# TESTIMONIALS_REDESIGN.md

> Section uniquement : `#testimonials`  
> Statut : **implemented**  
> Référence : image WhatsApp (concept interaction / composition uniquement, pas de copie visuelle)

---

## 1. Architecture actuelle

| Élément | Détail |
|---|---|
| Section | `components/sections/testimonials-section.tsx` (client) |
| Export | `components/sections/index.ts` → `TestimonialsSection` |
| Page | `app/page.tsx` (dynamic import, inchangé) |
| Data | `data/testimonials.ts` → export via `data/index.ts` |
| Type | `lib/types.ts` → `Testimonial` |
| Fond | `/bg/bg_testi.png` (conservé) |
| Motion | Framer Motion déjà en place (`FadeIn`, `AnimatePresence`, `useReducedMotion`) |
| Images | `next/image` |

**Layout actuel :** grille `1 / 2 / 4` colonnes, une carte glass par témoignage (tous les textes visibles en même temps).

**Hors scope :** navbar, autres sections, data métier hors testimonials, routes projet/service.

---

## 2. Données utilisées (réelles uniquement)

Source unique : `data/testimonials.ts` (4 entrées). Aucune donnée inventée.

| id | Nom | Rôle / entreprise | Image | LinkedIn |
|---|---|---|---|---|
| `mina` | Mme BOUJNAH Mina | Fondatrice / CEO de MB Way | `/Mina.webp` | oui |
| `youness` | M. BENNAY Youness | Fondateur / CEO de Adam Adventure Tours & Tourism | `/Youness.webp` | oui |
| `ayman` | M. BOUJJAR Ayman | Développeur Web Full Stack LionsGeek | `/Ayman.webp` | oui |
| `issraa` | Mlle. Issraa KASS | Community Manager Breezoria | `/issraa_kass.jpg` | oui |

Champs utilisés tels quels : `id`, `name`, `role`, `company`, `content`, `rating`, `image`, `linkedin`.

Pas de duplication dans un second fichier. Positions d’avatars = config UI locale dans le composant (pas dans `data/`).

---

## 3. Composants nécessaires

Tout reste sous `components/sections/` (ou sous-dossier léger si utile). Export public inchangé : `TestimonialsSection`.

| Composant | Rôle |
|---|---|
| `TestimonialsSection` | Shell section, bg, titre, state `activeId`, layout desktop/mobile |
| `TestimonialAvatar` (interne ou fichier dédié) | Bouton accessible + image + états idle/hover/active + float |
| `TestimonialQuoteCard` | Carte glass centrale (étoiles, quote, nom, rôle, LinkedIn) |
| Connecteurs | SVG décoratif `aria-hidden` dans la section (pas de composant obligatoire) |

Fichiers proposés :

```
components/sections/testimonials-section.tsx   ← rewrite
components/sections/testimonial-avatar.tsx     ← nouveau (optionnel si tout reste inline)
components/sections/testimonial-quote-card.tsx ← nouveau (optionnel)
```

Préférence : **1 fichier principal + 2 sous-composants locaux** dans le même dossier, pour rester lisible sans sur-architecturer.

---

## 4. Composition visuelle

### Contenu central (inchangé / aligné portfolio)

- Label : `Témoignages` (existant via `label-ln`)
- Titre : `Ce qu'ils disent de moi` (existant, accent `text-primary` sur « de moi »)
- Sous-titre nouveau (court, factuel) :
  > « Quelques mots de ceux avec qui j’ai eu le plaisir de collaborer. »

### Desktop (≥ 1024px)

Zone relative haute (~520–620px) :

```
        ○ mina                         ○ youness

                   Témoignages
              Ce qu'ils disent de moi
                 [sous-titre]

      ○ ayman     [ CARTE ACTIVE ]     ○ issraa
```

- Positions en `%` (top/left), asymétriques, tailles 56 / 64 / 72 px
- Lignes SVG très fines (`stroke` primary ~8–12% opacity) du centre vers 2–3 avatars
- Une seule carte au centre (sous le titre), pas un tooltip collé à chaque avatar (plus stable responsive + cohérent glass portfolio)

### Tablet

Même logique, positions resserrées, zone un peu plus basse, tailles d’avatars réduites.

### Mobile (≤ 768px)

```
        ○  ○  ○  ○     ← rangée d’avatars (touch ≥ 44px)

           TITRE
         sous-titre

      ┌─────────────────┐
      │ carte active    │
      └─────────────────┘
```

Pas d’absolute chaos : avatars en flex wrap centré au-dessus / ou au-dessus + dessous selon hauteur. Zéro overflow horizontal.

---

## 5. Comportement desktop

| Action | Effet |
|---|---|
| Chargement | `activeId = testimonials[0].id` (Mina) |
| Hover avatar | `setActiveId` → carte swap + avatar actif |
| Click / focus | même sélection (souris + clavier) |
| Leave section | conserve le dernier actif (pas de flash vide) |

Avatar **actif** : `scale(1.08)`, border primary plus nette, halo soft (anneaux turquoise subtils), glow léger.  
Avatars **inactifs** : opacity ~0.55–0.7, glow réduit.

---

## 6. Comportement mobile

- **Tap** = sélection sticky jusqu’au prochain tap
- Pas de dépendance au hover
- Targets ≥ 44×44
- Carte toujours sous le titre, pleine largeur container

---

## 7. Animations

| Élément | Motion |
|---|---|
| Avatars | float Y ±4–6px, durée 4–6s, delays décalés ; `useReducedMotion` → off |
| Hover | scale 1.08 + border/glow (CSS transition ~200ms) |
| Carte | `AnimatePresence mode="wait"` : out opacity→0 / y→8 ; in opacity 0→1 / y 8→0 ; 350–450ms, easing portfolio `[0.22, 1, 0.36, 1]` |
| Fond | conserver overlays actuels sur `/bg/bg_testi.png` |

Aucune nouvelle dépendance.

---

## 8. Design carte (système existant)

- Classes : `glass-card`, `border-border`, radius `rounded-2xl`
- Quote Lucide en watermark `text-primary/15–20`
- Stars `fill-primary` selon `rating`
- Texte : `content` réel
- Footer : mini avatar + `name` + `role company` + lien LinkedIn si présent
- Palette : tokens CSS actuels uniquement (pas de violet / orange / etc.)

---

## 9. Accessibilité

- Avatar = `<button type="button">`
- `aria-label={`Témoignage de ${name}`}`
- `aria-pressed={active}`
- `aria-controls` + `id` sur la carte
- `focus-visible:ring` primary
- Tab / Enter / Space natifs via button
- Carte : `aria-live="polite"`

---

## 10. Performance

- `next/image` + `sizes` adaptés (avatars ~64–80px)
- `loading="lazy"` sur images hors premier paint critique (section déjà lazy via `LazyMount` éventuel)
- Conserver `LazyMount` autour de la zone interactive
- Pas d’autoplay lourde ; float CSS/FM léger

---

## 11. Stratégie responsive (résumé)

| Breakpoint | Layout |
|---|---|
| `< md` | Avatars en rangée(s) + carte full width |
| `md–lg` | Stage absolu compact + carte centrale |
| `≥ lg` | Stage organique large + connecteurs SVG |

---

## 12. Fichiers touchés à l’implémentation

1. `components/sections/testimonials-section.tsx` (rewrite)
2. Éventuellement `testimonial-avatar.tsx` / `testimonial-quote-card.tsx`
3. `TESTIMONIALS_REDESIGN.md` → statut « implemented » après coup

**Non touchés :** `data/testimonials.ts` (sauf si besoin mineur non prévu), `page.tsx`, autres sections, tokens globaux.

---

## 13. Critères de done

- [ ] 4 avatars réels, 4 contenus réels
- [ ] Un seul témoignage visible à la fois
- [ ] Hover desktop + tap mobile
- [ ] Premier témoignage pré-sélectionné
- [ ] Fond `bg_testi` conservé
- [ ] Cohérence glass / teal / typo
- [ ] A11y clavier
- [ ] Pas de scroll horizontal mobile
- [ ] Aucune autre section modifiée

---

## Prochaine étape

Implémentation livrée :

- `components/sections/testimonials-section.tsx`
- `components/sections/testimonial-avatar.tsx`
- `components/sections/testimonial-quote-card.tsx`

Données inchangées dans `data/testimonials.ts`.

---
name: Lumina Noir
colors:
  surface: '#101415'
  surface-dim: '#101415'
  surface-bright: '#363a3b'
  surface-container-lowest: '#0b0f10'
  surface-container-low: '#191c1e'
  surface-container: '#1d2022'
  surface-container-high: '#272a2c'
  surface-container-highest: '#323537'
  on-surface: '#e0e3e5'
  on-surface-variant: '#bacbbf'
  inverse-surface: '#e0e3e5'
  inverse-on-surface: '#2d3133'
  outline: '#84958a'
  outline-variant: '#3b4a41'
  surface-tint: '#00e29e'
  primary: '#6effc0'
  on-primary: '#003824'
  primary-container: '#00e5a0'
  on-primary-container: '#006141'
  inverse-primary: '#006c49'
  secondary: '#c9bfff'
  on-secondary: '#2e009c'
  secondary-container: '#4720ca'
  on-secondary-container: '#baaeff'
  tertiary: '#dfe5fd'
  on-tertiary: '#293042'
  tertiary-container: '#c2c9e0'
  on-tertiary-container: '#4d5468'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#47ffb8'
  primary-fixed-dim: '#00e29e'
  on-primary-fixed: '#002114'
  on-primary-fixed-variant: '#005236'
  secondary-fixed: '#e5deff'
  secondary-fixed-dim: '#c9bfff'
  on-secondary-fixed: '#1a0063'
  on-secondary-fixed-variant: '#441cc8'
  tertiary-fixed: '#dbe2fa'
  tertiary-fixed-dim: '#bfc6dd'
  on-tertiary-fixed: '#141b2c'
  on-tertiary-fixed-variant: '#404659'
  background: '#101415'
  on-background: '#e0e3e5'
  surface-variant: '#323537'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 72px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  display-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 40px
    fontWeight: '800'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: DM Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: DM Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1280px
  section-gap: 120px
  section-gap-mobile: 64px
  gutter: 24px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

The design system is centered on a **Premium Modern Dark** aesthetic, specifically tailored for high-end digital portfolios. The brand personality is professional, forward-thinking, and meticulously polished. It evokes a sense of "technological elegance" through the use of deep oceanic tones contrasted against vibrant, neon-inflected accents.

The visual style leverages **Glassmorphism** and **Modern Minimalism**. Key characteristics include:
- **Depth through Translucency:** Using semi-transparent surfaces and background blurs to create a multi-layered interface.
- **Atmospheric Lighting:** Employing subtle gradients and mesh glows that mimic studio lighting.
- **Precision:** High-contrast typography and razor-sharp iconography ensure the content remains the focal point despite the rich visual effects.
- **Sophistication:** A focus on generous whitespace and "breathing room" to convey a premium, bespoke experience.

## Colors

The palette is designed for deep immersion and high visual impact. 

- **Background Strategy:** The primary background (`#0B0F19`) provides a solid foundation, while the secondary background (`#131A2B`) is used for elevated containers like cards and sections to create structural rhythm.
- **Accent Gradients:** The primary Mint (`#00E5A0`) and secondary Purple (`#7B61FF`) should rarely be used in isolation for large areas. Instead, use them as a linear gradient (45-degree angle) for high-impact elements like primary buttons, active states, or featured text.
- **Functional Grayscale:** Text follows a strict hierarchy. White (`#F8FAFC`) is reserved for titles and primary content. Slate (`#94A3B8`) is used for descriptions and meta-data to reduce visual noise.
- **Interactive States:** Use the Mint accent for success and primary actions; use the Purple accent for secondary highlights and creative flourishes.

## Typography

This system utilizes a trio of typefaces to balance character and readability.

1.  **Headlines (Hanken Grotesk):** A sharp, contemporary sans-serif used for impact. Large displays should use heavy weights with tight tracking to create a "brushed" architectural look.
2.  **Body (DM Sans):** Selected for its exceptional legibility in dark mode. Its low contrast and geometric shapes prevent "haloing" (text appearing to glow/blur) on dark backgrounds.
3.  **Labels (JetBrains Mono):** A monospaced font used sparingly for technical details, categories, and small metadata. This adds a "developer-centric" or "precision-engineered" feel to the portfolio.

**Guidelines:**
- All caps should be reserved for `label-sm` or `label-md` roles.
- Use `headline-lg` for section titles with a subtle gradient mask.

## Layout & Spacing

The layout philosophy follows a **Fluid Grid** model with an emphasis on vertical rhythm.

- **The 8px Rule:** All spacing (padding, margins) must be multiples of 8px to ensure mathematical harmony.
- **Sectioning:** Use large `section-gap` values to separate different content types (e.g., Projects vs. Experience). This whitespace is critical for the "premium" feel.
- **Grid System:** A 12-column desktop grid with a 24px gutter. Content usually spans 6 or 8 columns to maintain readability, rather than stretching the full width of the viewport.
- **Safe Areas:** On mobile, margins increase to 24px to ensure tap targets and text are not clipped by device edges or fingers.

## Elevation & Depth

In this dark-themed system, depth is communicated through **Luminance and Translucency** rather than traditional black shadows.

- **Base Layer:** `#0B0F19` (Bottom-most).
- **Surface Layer:** `#131A2B` with a `1px` solid border of `rgba(255,255,255,0.08)`. This represents the standard card elevation.
- **Glass Layer:** Used for navigation bars and overlays. Apply `backdrop-filter: blur(12px)` and a background color of `rgba(19, 26, 43, 0.7)`.
- **Glows:** For high-priority elements, use a "Drop Shadow" that matches the accent color (Mint or Purple) but with very high diffusion (40px+) and low opacity (15-20%) to create a soft aura.
- **Borders:** Every container should have a subtle top-light effect, simulated by a thin semi-transparent white border.

## Shapes

The design system adopts a **Rounded** shape language to soften the "tech" aesthetic and make the portfolio feel more approachable.

- **Primary Radius:** Cards, large buttons, and input fields use `1rem` (16px).
- **Secondary Radius:** Larger containers or featured project cards use `rounded-xl` (24px) to emphasize their scale.
- **Circular Elements:** Use full pill-shapes for tags, chips, and small decorative badges to distinguish them from functional buttons.
- **Iconography:** Use "Linear" or "Duo-tone" icons with rounded caps to match the typography's terminal style.

## Components

### Buttons
- **Primary:** Background is a linear gradient (Mint to Purple). Text is dark (#0B0F19) for maximum contrast. 
- **Secondary:** Transparent background with a 1px border of `rgba(255,255,255,0.2)`. On hover, the border glows Mint.
- **Ghost:** No background or border. Mint text. Use for low-emphasis actions.

### Cards
- **Project Cards:** Feature a background of `#131A2B`. On hover, the border-color opacity increases, and the image within should scale slightly (1.05x) to provide tactile feedback.
- **Skill Chips:** Pill-shaped, small `label-sm` text. Use a very subtle Mint background at 10% opacity with a solid Mint text color.

### Input Fields
- Background matches the `secondary_background`. 
- Borders are `border_subtle`. 
- On focus, the border transitions to a solid Mint color with a 4px Mint outer glow.

### Lists
- For experience or education, use a vertical timeline thread. The "nodes" on the timeline should use the Mint/Purple gradient to signify activity/current status.

### Navigation
- A fixed header with a glassmorphism effect. Active links should feature a small Mint dot underneath the text rather than a full underline.
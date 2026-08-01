/**
 * Lumina Noir design tokens (mirror of CSS variables).
 * Prefer Tailwind classes / CSS vars in components; use this for JS-only needs.
 */
export const luminaNoir = {
  colors: {
    background: "#0B0F19",
    backgroundSecondary: "#131A2B",
    surface: "#101415",
    primary: "#00E5A0",
    primaryBright: "#6effc0",
    secondary: "#7B61FF",
    secondaryBright: "#c9bfff",
    text: "#F8FAFC",
    textMuted: "#94A3B8",
    border: "rgba(255,255,255,0.08)",
    borderStrong: "rgba(255,255,255,0.2)",
    glass: "rgba(19, 26, 43, 0.7)",
  },
  radius: {
    card: "1rem",
    featured: "1.5rem",
    pill: "9999px",
  },
  spacing: {
    section: "7.5rem",
    sectionMobile: "4rem",
    gutter: "1.5rem",
    containerMax: "80rem",
  },
  fonts: {
    display: "var(--font-hanken)",
    body: "var(--font-dm-sans)",
    mono: "var(--font-jetbrains)",
  },
} as const

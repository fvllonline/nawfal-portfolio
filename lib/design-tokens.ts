/**
 * Design tokens (mirror of CSS variables).
 * Prefer Tailwind classes / CSS vars in components; use this for JS-only needs.
 */
export const luminaNoir = {
  colors: {
    background: "#080B14",
    backgroundSecondary: "#0B0F19",
    surface: "#101522",
    surfaceElevated: "#141927",
    surfaceMuted: "#181D2A",
    primary: "#00D9B5",
    primaryBright: "#33E4C6",
    secondary: "#00BFA5",
    text: "#F5F7FA",
    textMuted: "#8D96A8",
    border: "rgba(255,255,255,0.08)",
    borderStrong: "rgba(255,255,255,0.16)",
    glass: "rgba(16, 21, 34, 0.75)",
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

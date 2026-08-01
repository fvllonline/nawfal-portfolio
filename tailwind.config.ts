/**
 * Lumina Noir — Tailwind CSS v4
 *
 * Theme tokens live in `app/globals.css` via `@theme inline`.
 * This file documents the system for tooling / future plugins.
 * Do not duplicate color values here — CSS is the source of truth.
 *
 * @see prototype-new-design/lumina_noir/DESIGN.md
 * @see lib/design-tokens.ts
 */
const config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

export default config

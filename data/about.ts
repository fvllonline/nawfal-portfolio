import type { SoftSkill, Language } from "@/lib/types"

export const aboutContent = {
  label: "About Me",
  heading: "Building for the",
  headingAccent: "future",
  paragraphs: [
    "I am a passionate Full-Stack Developer based in Casablanca, specializing in React, Laravel, and Next.js. My philosophy centers around the intersection of functionality and aesthetics, ensuring every pixel serves a purpose.",
    "Creative, adaptable, and eager to contribute to innovative projects — I build modern web solutions that scale and delight users.",
  ],
  portrait: "/PRFLN.png",
  workspaceImage: "/herobg.jpg",
  skillBars: [
    { name: "Frontend / UI-UX", level: 95 },
    { name: "Backend & APIs", level: 88 },
  ],
}

export const softSkills: SoftSkill[] = [
  { name: "Adaptability", icon: "zap" },
  { name: "Team Spirit", icon: "users" },
  { name: "Creativity", icon: "lightbulb" },
  { name: "Problem Solving", icon: "zap" },
]

export const languages: Language[] = [
  { name: "Arabic", level: 100, label: "Native" },
  { name: "French", level: 95, label: "Fluent" },
  { name: "English", level: 85, label: "Good command" },
]

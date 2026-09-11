/**
 * Étape 2 — Compress & convert public images to WebP
 * Run: node scripts/optimize-images.mjs
 */
import sharp from "sharp"
import fs from "fs"
import path from "path"

const PUBLIC = path.resolve("public")

const SKIP = new Set([
  "placeholder.jpg",
  "placeholder-logo.png",
  "placeholder-user.jpg",
  "placeholder.svg",
  "placeholder-logo.svg",
])

function classify(rel) {
  const name = path.basename(rel).toLowerCase()
  if (name.includes("favicon")) return { width: 64, quality: 85, label: "favicon" }
  if (name.includes("herobg")) return { width: 1920, quality: 75, label: "hero" }
  if (name.includes("prfln") || name.includes("portrait"))
    return { width: 900, quality: 80, label: "portrait" }
  if (name.includes("miniature")) return { width: 1000, quality: 80, label: "miniature" }
  if (/\.(png|jpe?g)$/i.test(name) && /\/(adam|dupond|breezoria|zacastore|monpass|quickstay)/i.test(rel.replace(/\\/g, "/")))
    return { width: 1600, quality: 78, label: "gallery" }
  // default for other photos (testimonials etc.)
  return { width: 800, quality: 80, label: "photo" }
}

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) walk(full, files)
    else if (/\.(png|jpe?g)$/i.test(entry.name) && !SKIP.has(entry.name)) {
      files.push(full)
    }
  }
  return files
}

async function optimize(file) {
  const rel = path.relative(PUBLIC, file)
  const { width, quality, label } = classify(rel)
  const out = file.replace(/\.(png|jpe?g)$/i, ".webp")
  const before = fs.statSync(file).size

  // Skip if webp exists and is newer/smaller enough? Always regenerate for consistency
  await sharp(file)
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .webp({ quality, effort: 4 })
    .toFile(out)

  const after = fs.statSync(out).size
  return {
    rel,
    label,
    beforeMB: +(before / 1e6).toFixed(2),
    afterMB: +(after / 1e6).toFixed(2),
    savedMB: +((before - after) / 1e6).toFixed(2),
    outRel: path.relative(PUBLIC, out),
  }
}

const files = walk(PUBLIC)
console.log(`Optimizing ${files.length} images...\n`)

const results = []
for (const file of files) {
  try {
    const r = await optimize(file)
    results.push(r)
    console.log(
      `OK [${r.label}] ${r.rel}  ${r.beforeMB}MB → ${r.afterMB}MB  (−${r.savedMB}MB)`
    )
  } catch (e) {
    console.error(`FAIL ${path.relative(PUBLIC, file)}:`, e.message)
  }
}

const before = results.reduce((s, r) => s + r.beforeMB, 0)
const after = results.reduce((s, r) => s + r.afterMB, 0)
console.log(`\nDONE: ${results.length} files`)
console.log(`Total: ${before.toFixed(1)}MB → ${after.toFixed(1)}MB (saved ${(before - after).toFixed(1)}MB)`)

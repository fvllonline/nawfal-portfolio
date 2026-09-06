"use client"

import { useState, type FormEvent } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, CheckCircle, Github } from "lucide-react"
import { FaLinkedin } from "react-icons/fa"
import { siteConfig } from "@/data"
import { FadeIn } from "@/components/ui/motion"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch(siteConfig.formspreeEndpoint, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      })

      if (!response.ok) throw new Error("Failed to send")

      setSent(true)
      form.reset()
    } catch {
      setError("Failed to send message. Please try again or email me directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section-ln">
      <div className="container-ln grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Info */}
        <FadeIn className="space-y-8">
          <div>
            <p className="label-ln">Connect</p>
            <h2 className="heading-lg mt-2">
              Let&apos;s build something{" "}
              <span className="gradient-text italic">remarkable</span>.
            </h2>
            <p className="body-lg mt-4 max-w-md">
              Have a project in mind or just want to say hi? I&apos;m always open
              to discussing new ideas and opportunities.
            </p>
          </div>

          <div className="space-y-5">
            <ContactRow
              icon={Mail}
              label="Email me at"
              value={siteConfig.email}
              href={`mailto:${siteConfig.email}`}
            />
            <ContactRow
              icon={Phone}
              label="Call me"
              value={siteConfig.phoneDisplay}
              href={`tel:${siteConfig.phone}`}
            />
            <ContactRow
              icon={MapPin}
              label="Located in"
              value={siteConfig.location}
            />
          </div>

          <div className="flex gap-4 pt-2">
            <Link
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-border text-foreground-muted transition-colors hover:border-primary/40 hover:text-primary"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/nawfal-addaoui-40b651248/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-border text-foreground-muted transition-colors hover:border-primary/40 hover:text-primary"
            >
              <FaLinkedin className="h-5 w-5" />
            </Link>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={siteConfig.cv.en}
              download="CV-NAWFAL-English.pdf"
              className="rounded-xl border border-border-strong px-5 py-3 font-mono text-xs text-foreground transition-colors hover:border-primary/50"
            >
              Download CV (EN)
            </a>
            <a
              href={siteConfig.cv.fr}
              download="CV-NAWFAL-French.pdf"
              className="rounded-xl border border-border-strong px-5 py-3 font-mono text-xs text-foreground transition-colors hover:border-primary/50"
            >
              Download CV (FR)
            </a>
            <a
              href={siteConfig.cv.de}
              download="CV-NAWFAL-Deutsch.pdf"
              className="rounded-xl border border-border-strong px-5 py-3 font-mono text-xs text-foreground transition-colors hover:border-primary/50"
            >
              Download CV (DE)
            </a>
          </div>
        </FadeIn>

        {/* Form */}
        <FadeIn delay={0.1}>
          <div className="glass-card rounded-2xl p-4 sm:rounded-[32px] sm:p-6 md:p-8">
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center gap-4 py-16 text-center"
              >
                <CheckCircle className="h-14 w-14 text-primary" />
                <h3 className="heading-sm">Message sent!</h3>
                <p className="body-md">
                  Thanks for reaching out. I&apos;ll get back to you soon.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="label-md-ln mt-2 text-primary hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <Field label="Full Name" name="name" placeholder="John Doe" required />
                  <Field
                    label="Email Address"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                  />
                </div>
                <Field
                  label="Subject"
                  name="subject"
                  placeholder="Project Inquiry"
                  required
                />
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="label-ln text-foreground-muted"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell me about your project..."
                    className="w-full rounded-xl border border-border bg-muted px-4 py-3 text-base text-foreground placeholder:text-foreground-muted/40 transition-all focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/20"
                  />
                </div>

                {error && (
                  <p className="text-sm text-destructive" role="alert">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="gradient-bg glow-sm flex min-h-12 w-full items-center justify-center gap-2 rounded-xl py-4 font-display text-base font-semibold text-white transition-transform hover:scale-[1.02] active:scale-95 disabled:opacity-60 sm:text-lg"
                >
                  {isSubmitting ? (
                    "Sending…"
                  ) : (
                    <>
                      Send Message <Send className="h-5 w-5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string
  name: string
  type?: string
  placeholder?: string
  required?: boolean
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={name} className="label-ln text-foreground-muted">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-muted px-4 py-3 text-base text-foreground placeholder:text-foreground-muted/40 transition-all focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/20"
      />
    </div>
  )
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail
  label: string
  value: string
  href?: string
}) {
  const inner = (
    <>
      <div className="glass-card flex h-12 w-12 items-center justify-center rounded-xl text-primary transition-colors group-hover:bg-primary/10">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="label-ln text-foreground-muted">{label}</p>
        <p className="label-md-ln text-foreground">{value}</p>
      </div>
    </>
  )

  if (href) {
    return (
      <Link href={href} className="group flex items-center gap-4">
        {inner}
      </Link>
    )
  }

  return <div className="group flex items-center gap-4">{inner}</div>
}

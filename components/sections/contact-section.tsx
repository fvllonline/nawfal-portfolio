"use client"

import { useEffect, useState, type FormEvent } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, CheckCircle, Github, FileText } from "lucide-react"
import { FaLinkedin } from "react-icons/fa"
import { siteConfig } from "@/data"
import { FadeIn } from "@/components/ui/motion"
import {
  QUOTE_REQUEST_EVENT,
  buildQuoteMessage,
  buildQuoteSubject,
  readQuoteFromUrl,
  type QuoteRequestDetail,
} from "@/lib/quote-request"
import { cn } from "@/lib/utils"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [quoteMeta, setQuoteMeta] = useState<QuoteRequestDetail | null>(null)

  const applyQuote = (detail: QuoteRequestDetail) => {
    setSent(false)
    setError(null)
    setQuoteMeta(detail)
    setSubject(buildQuoteSubject(detail.service, detail.pack))
    setMessage(
      buildQuoteMessage(detail.service, detail.pack, detail.priceLabel)
    )
  }

  useEffect(() => {
    const fromUrl = readQuoteFromUrl()
    if (fromUrl) applyQuote(fromUrl)

    const onQuote = (event: Event) => {
      const detail = (event as CustomEvent<QuoteRequestDetail>).detail
      if (detail?.service && detail?.pack) applyQuote(detail)
    }

    const onPopState = () => {
      const next = readQuoteFromUrl()
      if (next) applyQuote(next)
    }

    window.addEventListener(QUOTE_REQUEST_EVENT, onQuote)
    window.addEventListener("popstate", onPopState)
    return () => {
      window.removeEventListener(QUOTE_REQUEST_EVENT, onQuote)
      window.removeEventListener("popstate", onPopState)
    }
  }, [])

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

      if (!response.ok) throw new Error("Échec de l'envoi")

      setSent(true)
      form.reset()
      setSubject("")
      setMessage("")
      setQuoteMeta(null)
      if (window.location.search.includes("service=")) {
        window.history.replaceState({}, "", "/#contact")
      }
    } catch {
      setError(
        "Échec de l'envoi. Veuillez réessayer ou m'écrire directement par e-mail."
      )
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
            <p className="label-ln">Contact</p>
            <h2 className="heading-lg mt-2">
              Construisons quelque chose{" "}
              <span className="gradient-text italic">remarquable</span>.
            </h2>
            <p className="body-lg mt-4 max-w-md">
              Un projet en tête ou simplement envie d&apos;échanger ? Je suis
              toujours ouvert aux nouvelles idées et opportunités.
            </p>
          </div>

          <div className="space-y-5">
            <ContactRow
              icon={Mail}
              label="Écrivez-moi à"
              value={siteConfig.email}
              href={`mailto:${siteConfig.email}`}
            />
            <ContactRow
              icon={Phone}
              label="Appelez-moi"
              value={siteConfig.phoneDisplay}
              href={`tel:${siteConfig.phone}`}
            />
            <ContactRow
              icon={MapPin}
              label="Basé à"
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
              Télécharger le CV (EN)
            </a>
            <a
              href={siteConfig.cv.fr}
              download="CV-NAWFAL-French.pdf"
              className="rounded-xl border border-border-strong px-5 py-3 font-mono text-xs text-foreground transition-colors hover:border-primary/50"
            >
              Télécharger le CV (FR)
            </a>
            <a
              href={siteConfig.cv.de}
              download="CV-NAWFAL-Deutsch.pdf"
              className="rounded-xl border border-border-strong px-5 py-3 font-mono text-xs text-foreground transition-colors hover:border-primary/50"
            >
              Télécharger le CV (DE)
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
                <h3 className="heading-sm">Message envoyé !</h3>
                <p className="body-md">
                  Merci pour votre message. Je vous répondrai bientôt.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="label-md-ln mt-2 text-primary hover:underline"
                >
                  Envoyer un autre message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {quoteMeta && (
                  <div className="rounded-xl border border-primary/30 bg-primary/5 p-4">
                    <p className="inline-flex items-center gap-2 font-mono text-xs text-primary">
                      <FileText className="h-3.5 w-3.5" />
                      Demande de devis préparée
                    </p>
                    <p className="mt-2 text-sm text-foreground">
                      <span className="font-medium">{quoteMeta.service}</span>
                      {" · "}
                      Pack <span className="font-medium">{quoteMeta.pack}</span>
                      {quoteMeta.priceLabel ? (
                        <>
                          {" · "}
                          <span className="text-primary">{quoteMeta.priceLabel}</span>
                        </>
                      ) : null}
                    </p>
                    <p className="mt-1 text-xs text-foreground-muted">
                      L&apos;objet et le message sont proposés automatiquement.
                      Indiquez votre nom et votre e-mail pour envoyer.
                    </p>
                  </div>
                )}

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <Field
                    label="Nom complet"
                    name="name"
                    placeholder="Jean Dupont"
                    required
                    autoFocus={Boolean(quoteMeta)}
                    emphasized={Boolean(quoteMeta)}
                  />
                  <Field
                    label="Adresse e-mail"
                    name="email"
                    type="email"
                    placeholder="jean@exemple.com"
                    required
                    emphasized={Boolean(quoteMeta)}
                  />
                </div>

                <Field
                  label={quoteMeta ? "Objet (proposé)" : "Objet"}
                  name="subject"
                  placeholder="Demande de projet"
                  required
                  value={subject}
                  onChange={setSubject}
                  hint={
                    quoteMeta
                      ? "Modifiable si besoin"
                      : undefined
                  }
                />

                <div className="space-y-2">
                  <div className="flex items-end justify-between gap-3">
                    <label
                      htmlFor="message"
                      className="label-ln text-foreground-muted"
                    >
                      {quoteMeta ? "Message (proposé)" : "Message"}
                    </label>
                    {quoteMeta && (
                      <span className="text-[10px] font-mono text-foreground-muted">
                        Modifiable si besoin
                      </span>
                    )}
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={quoteMeta ? 7 : 4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Parlez-moi de votre projet..."
                    className={cn(
                      "w-full rounded-xl border bg-muted px-4 py-3 text-base text-foreground placeholder:text-foreground-muted/40 transition-all focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/20",
                      quoteMeta ? "border-primary/25" : "border-border"
                    )}
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
                    "Envoi…"
                  ) : (
                    <>
                      {quoteMeta ? "Envoyer ma demande de devis" : "Envoyer le message"}{" "}
                      <Send className="h-5 w-5" />
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
  value,
  onChange,
  autoFocus,
  emphasized,
  hint,
}: {
  label: string
  name: string
  type?: string
  placeholder?: string
  required?: boolean
  value?: string
  onChange?: (value: string) => void
  autoFocus?: boolean
  emphasized?: boolean
  hint?: string
}) {
  return (
    <div className="space-y-2">
      <div className="flex items-end justify-between gap-3">
        <label htmlFor={name} className="label-ln text-foreground-muted">
          {label}
        </label>
        {hint && (
          <span className="text-[10px] font-mono text-foreground-muted">{hint}</span>
        )}
      </div>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        autoFocus={autoFocus}
        onChange={onChange ? (e) => onChange(e.target.value) : undefined}
        className={cn(
          "w-full rounded-xl border bg-muted px-4 py-3 text-base text-foreground placeholder:text-foreground-muted/40 transition-all focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/20",
          emphasized ? "border-primary/40 ring-2 ring-primary/10" : "border-border"
        )}
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

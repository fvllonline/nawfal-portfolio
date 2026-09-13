import type { ServiceFaqItem } from "@/lib/types"

export function ServiceFaq({ items }: { items: ServiceFaqItem[] }) {
  if (!items.length) return null

  return (
    <div>
      <h2 className="heading-lg text-primary">Questions fréquentes</h2>
      <dl className="mt-6 space-y-4">
        {items.map((item) => (
          <div
            key={item.question}
            className="glass-card rounded-2xl border border-border p-5 sm:p-6"
          >
            <dt className="font-display text-lg font-semibold text-foreground">
              {item.question}
            </dt>
            <dd className="body-md mt-2 text-foreground-muted">{item.answer}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

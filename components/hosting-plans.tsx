import Link from "next/link"
import { Check, ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

const plans = [
  {
    name: "Starter",
    tagline: "For brochure sites and small marketing teams.",
    price: "29",
    cadence: "/ month",
    features: [
      "1 website, up to 50k visits / mo",
      "Shared edge CDN, 25 GB transfer",
      "Daily backups, 14-day retention",
      "Free SSL & DNS management",
      "Email support, 24h response",
    ],
    cta: "Choose Starter",
    featured: false,
  },
  {
    name: "Business",
    tagline: "For growing companies that depend on uptime.",
    price: "129",
    cadence: "/ month",
    features: [
      "Up to 5 sites, 500k visits / mo",
      "Dedicated container, 250 GB transfer",
      "Hourly backups, 90-day retention",
      "Staging + preview environments",
      "Priority support, 1h response SLA",
      "Quarterly performance review",
    ],
    cta: "Choose Business",
    featured: true,
  },
  {
    name: "Enterprise",
    tagline: "For regulated industries and high-traffic platforms.",
    price: "Custom",
    cadence: "tailored quote",
    features: [
      "Unlimited sites & traffic",
      "Private cloud, EU + US regions",
      "ISO 27001 & SOC 2 controls",
      "99.99% uptime SLA, signed",
      "Named technical lead",
      "On-call engineering support",
    ],
    cta: "Talk to sales",
    featured: false,
  },
]

export function HostingPlans() {
  return (
    <section id="hosting" className="bg-secondary/40 border-y border-border">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-7">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              02 — Hosting Plans
            </p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-balance">
              Hosting we operate, so you don&apos;t have to.
            </h2>
          </div>
          <div className="md:col-span-5">
            <p className="text-base leading-relaxed text-muted-foreground text-pretty">
              Three plans for every stage of company. All include managed updates, daily
              backups, and a real human on the other end of an email.
            </p>
          </div>
        </div>

        <div className="mt-14 grid lg:grid-cols-3 gap-px bg-border border border-border">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={cn(
                "p-8 md:p-10 flex flex-col gap-6",
                plan.featured ? "bg-foreground text-background" : "bg-background",
              )}
            >
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-2xl md:text-3xl">{plan.name}</h3>
                  {plan.featured && (
                    <span className="text-[10px] uppercase tracking-[0.2em] bg-accent text-accent-foreground px-2 py-1 rounded-full">
                      Most popular
                    </span>
                  )}
                </div>
                <p
                  className={cn(
                    "mt-2 text-sm leading-relaxed",
                    plan.featured ? "text-background/70" : "text-muted-foreground",
                  )}
                >
                  {plan.tagline}
                </p>
              </div>

              <div className="flex items-baseline gap-2">
                {plan.price !== "Custom" && (
                  <span
                    className={cn(
                      "font-serif text-2xl",
                      plan.featured ? "text-background/70" : "text-muted-foreground",
                    )}
                  >
                    $
                  </span>
                )}
                <span className="font-serif text-5xl md:text-6xl tracking-tight">
                  {plan.price}
                </span>
                <span
                  className={cn(
                    "text-sm",
                    plan.featured ? "text-background/70" : "text-muted-foreground",
                  )}
                >
                  {plan.cadence}
                </span>
              </div>

              <ul className="flex flex-col gap-3 text-sm">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check
                      className={cn(
                        "size-4 mt-0.5 shrink-0",
                        plan.featured ? "text-accent" : "text-foreground",
                      )}
                      aria-hidden="true"
                    />
                    <span
                      className={cn(
                        plan.featured ? "text-background/90" : "text-foreground/80",
                      )}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="#contact"
                className={cn(
                  "mt-auto inline-flex items-center justify-between gap-2 rounded-full border px-5 py-3 text-sm transition-colors",
                  plan.featured
                    ? "border-background/30 hover:bg-background hover:text-foreground"
                    : "border-foreground/20 hover:bg-foreground hover:text-background",
                )}
              >
                {plan.cta}
                <ArrowUpRight className="size-4" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

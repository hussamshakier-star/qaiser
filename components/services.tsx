import { Compass, Server, Globe, LifeBuoy, Search, ShoppingBag } from "lucide-react"

const services = [
  {
    icon: Compass,
    title: "Web Design",
    description:
      "Brand-led websites with considered typography, structured systems, and a clear point of view.",
    points: ["Discovery & strategy", "Design systems", "Editorial layouts"],
  },
  {
    icon: Server,
    title: "Managed Hosting",
    description:
      "Dedicated and shared plans on our private cloud, with daily backups and 24/7 monitoring.",
    points: ["99.99% uptime SLA", "Edge caching", "Daily snapshots"],
  },
  {
    icon: Globe,
    title: "Domains & DNS",
    description:
      "Domain registration, transfers, and managed DNS with anycast routing across four continents.",
    points: ["Free WHOIS privacy", "DNSSEC", "Anycast network"],
  },
  {
    icon: LifeBuoy,
    title: "Care & Support",
    description:
      "Ongoing maintenance, security patching, and a named technical lead for every retained client.",
    points: ["Named lead", "SLA response", "Quarterly reviews"],
  },
  {
    icon: Search,
    title: "SEO & Performance",
    description:
      "Technical SEO, Core Web Vitals, and content architecture that helps the right people find you.",
    points: ["Vitals tuning", "Schema markup", "Search audits"],
  },
  {
    icon: ShoppingBag,
    title: "E‑commerce",
    description:
      "Headless and Shopify builds for catalog-driven brands that need fast, flexible storefronts.",
    points: ["Headless builds", "Shopify Plus", "Subscriptions"],
  },
]

export function Services() {
  return (
    <section id="services" className="bg-background">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-5">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              01 — Capabilities
            </p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-balance">
              A full studio, and the infrastructure to back it.
            </h2>
          </div>
          <div className="md:col-span-7 md:pt-3">
            <p className="text-base md:text-lg leading-relaxed text-muted-foreground text-pretty">
              We design, build, and run websites end to end. One team is responsible from the
              first kickoff workshop to the production server humming away three years later — so
              nothing falls between the cracks.
            </p>
          </div>
        </div>

        <ul className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-border">
          {services.map((s) => (
            <li
              key={s.title}
              className="border-b border-r border-border p-8 md:p-10 flex flex-col gap-5 group hover:bg-secondary/40 transition-colors"
            >
              <s.icon
                className="size-6 text-foreground/70 group-hover:text-accent transition-colors"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <h3 className="font-serif text-2xl md:text-3xl">{s.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{s.description}</p>
              <ul className="mt-2 flex flex-col gap-1.5 text-sm">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-foreground/80">
                    <span aria-hidden="true" className="size-1 rounded-full bg-accent" />
                    {p}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

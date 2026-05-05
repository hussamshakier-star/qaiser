import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "Halden & Co.",
    sector: "Wealth Management",
    year: "2025",
    image: "/work-finance.jpg",
    description:
      "A reporting portal and marketing site for a 40-year-old wealth firm modernizing its brand.",
    services: ["Brand", "Website", "Hosting"],
  },
  {
    title: "Atrium Form",
    sector: "Architecture",
    year: "2024",
    image: "/work-architecture.jpg",
    description:
      "Editorial portfolio site for an award-winning architecture practice based in Copenhagen.",
    services: ["Design", "Build", "CMS"],
  },
  {
    title: "Olive Press",
    sector: "Retail & E‑commerce",
    year: "2024",
    image: "/work-retail.jpg",
    description:
      "Headless Shopify storefront and subscription experience for a heritage olive oil brand.",
    services: ["E‑commerce", "Hosting"],
  },
]

export function SelectedWork() {
  return (
    <section id="work" className="bg-background">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              03 — Selected Work
            </p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-balance">
              Built to last <em className="italic">past launch.</em>
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm border-b border-foreground/30 pb-1 hover:border-foreground transition-colors self-start"
          >
            View full archive
            <ArrowUpRight className="size-4" />
          </a>
        </div>

        <ul className="mt-14 grid md:grid-cols-3 gap-6 md:gap-8">
          {projects.map((p) => (
            <li key={p.title} className="group">
              <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
                <Image
                  src={p.image || "/placeholder.svg"}
                  alt={`${p.title} — ${p.sector} project`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center justify-center size-10 rounded-full bg-background/90 text-foreground">
                    <ArrowUpRight className="size-4" />
                  </span>
                </div>
              </div>
              <div className="mt-5 flex items-baseline justify-between gap-4">
                <h3 className="font-serif text-2xl md:text-3xl">{p.title}</h3>
                <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground shrink-0">
                  {p.year}
                </span>
              </div>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {p.sector}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-foreground/80">
                {p.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {p.services.map((s) => (
                  <li
                    key={s}
                    className="text-[11px] uppercase tracking-[0.15em] border border-border px-2.5 py-1 rounded-full"
                  >
                    {s}
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

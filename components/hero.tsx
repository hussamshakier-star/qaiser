import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { SiteNav } from "@/components/site-nav"

export function Hero() {
  return (
    <section className="relative isolate min-h-[100svh] w-full overflow-hidden bg-foreground text-background">
      <Image
        src="/hero-server-room.jpg"
        alt="Modern data center aisle with warm amber accent lighting"
        fill
        priority
        className="object-cover opacity-60"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/40 to-foreground/95"
      />

      <SiteNav variant="dark" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 pt-40 md:pt-48 pb-16 md:pb-24 min-h-[100svh] flex flex-col justify-between">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] opacity-80">
            <span className="size-1.5 rounded-full bg-accent" />
            Web Design &amp; Hosting Studio
          </div>

          <h1 className="mt-8 font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight text-balance">
            Websites that <em className="italic font-serif">perform</em>,
            <br />
            hosted on infrastructure
            <br />
            you can trust.
          </h1>

          <p className="mt-8 max-w-xl text-base md:text-lg leading-relaxed text-background/80 text-pretty">
            Iraqi Technology System (ITS) is a corporate studio building considered, fast, and
            durable websites for modern companies — and running them on hosting we operate
            ourselves.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-background text-foreground px-6 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Start a project
              <ArrowUpRight className="size-4" />
            </Link>
            <Link
              href="#work"
              className="inline-flex items-center gap-2 text-sm border-b border-background/40 pb-1 hover:border-background transition-colors"
            >
              See selected work
            </Link>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-background/15 pt-8">
          {[
            { value: "180+", label: "Sites shipped" },
            { value: "99.99%", label: "Hosting uptime" },
            { value: "12 yrs", label: "In business" },
            { value: "EU + US", label: "Edge regions" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-serif text-3xl md:text-4xl">{stat.value}</div>
              <div className="mt-1 text-xs uppercase tracking-[0.18em] text-background/60">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

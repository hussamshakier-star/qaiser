import Link from "next/link"
import Image from "next/image"

const cols = [
  {
    title: "Studio",
    links: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
      { label: "Journal", href: "#" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Web Design", href: "#services" },
      { label: "Hosting", href: "#hosting" },
      { label: "Domains & DNS", href: "#services" },
      { label: "SEO", href: "#services" },
    ],
  },
  {
    title: "Hosting",
    links: [
      { label: "Starter", href: "#hosting" },
      { label: "Business", href: "#hosting" },
      { label: "Enterprise", href: "#hosting" },
      { label: "Status", href: "#" },
      { label: "SLA", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "DPA", href: "#" },
      { label: "Cookies", href: "#" },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 md:px-10 pt-20 pb-10">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-4">
            <Link href="/" className="flex items-center gap-3 tracking-tight" aria-label="Iraqi Technology System home">
              <Image
                src="/its-logo.png"
                alt=""
                width={48}
                height={48}
                className="size-11 rounded-md object-cover"
              />
              <span className="flex flex-col leading-none">
                <span className="font-serif text-2xl">Iraqi Technology System</span>
                <span className="text-[10px] uppercase tracking-[0.25em] opacity-70 mt-1.5">ITS</span>
              </span>
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-background/70 max-w-sm">
              A corporate web design and hosting company. Headquartered in Baghdad, with
              engineers across Iraq and the wider region.
            </p>
            <address className="mt-6 not-italic text-sm text-background/70 leading-relaxed">
              Iraqi Technology System
              <br />
              Al-Mansour District, Baghdad
              <br />
              Iraq
            </address>
          </div>

          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {cols.map((col) => (
              <div key={col.title}>
                <h3 className="text-xs uppercase tracking-[0.2em] text-background/60">
                  {col.title}
                </h3>
                <ul className="mt-4 flex flex-col gap-3 text-sm">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="text-background/85 hover:text-accent transition-colors"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-background/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-background/60">
          <p>&copy; {new Date().getFullYear()} Iraqi Technology System (ITS). All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-accent animate-pulse" />
              All systems operational
            </span>
            <span>ISO 27001 · SOC 2 Type II</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

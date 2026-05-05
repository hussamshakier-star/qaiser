const clients = [
  "Halden & Co.",
  "Northwind Bank",
  "Atrium Health",
  "Ferrous Studio",
  "Meridian Group",
  "Olive Press",
  "Cape Logistics",
  "Pinewood Estate",
]

export function ClientMarquee() {
  return (
    <section
      aria-label="Trusted by"
      className="border-y border-border bg-background"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-8 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground shrink-0">
          Trusted by teams at
        </p>
        <div className="flex flex-wrap items-center gap-x-10 gap-y-3">
          {clients.map((c) => (
            <span
              key={c}
              className="font-serif text-xl md:text-2xl text-foreground/70"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

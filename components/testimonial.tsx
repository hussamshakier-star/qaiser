export function Testimonial() {
  return (
    <section id="studio" className="bg-background">
      <div className="mx-auto max-w-5xl px-6 md:px-10 py-24 md:py-32 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          05 — In their words
        </p>
        <blockquote className="mt-8 font-serif text-3xl sm:text-4xl md:text-5xl leading-[1.15] tracking-tight text-balance">
          <span className="text-accent">&ldquo;</span>
          ITS rebuilt our investor portal in eight weeks and has run it flawlessly for three
          years. They behave less like a vendor and more like an in-house team that happens to
          sit a kilometre away.
          <span className="text-accent">&rdquo;</span>
        </blockquote>
        <footer className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-sm">
          <div className="size-12 rounded-full bg-secondary flex items-center justify-center font-serif text-lg">
            EM
          </div>
          <div className="text-center sm:text-left">
            <div className="font-medium">Eleanor Marsh</div>
            <div className="text-muted-foreground">
              COO, Halden &amp; Co. Wealth Management
            </div>
          </div>
        </footer>
      </div>
    </section>
  )
}

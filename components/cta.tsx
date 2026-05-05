import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function CTA() {
  return (
    <section
      id="contact"
      className="bg-secondary/50 border-t border-border"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Start a conversation
            </p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-balance">
              Tell us what you&apos;re building. We&apos;ll tell you what we&apos;d do.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground max-w-xl text-pretty">
              Most engagements start with a 30-minute call and a written, no-obligation
              recommendation. If we&apos;re not the right fit, we&apos;ll happily point you to a
              studio that is.
            </p>
          </div>

          <div className="md:col-span-5 flex flex-col gap-4">
            <Link
              href="mailto:hello@vantage.studio"
              className="group flex items-center justify-between gap-6 rounded-md bg-foreground text-background p-6 hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <div>
                <div className="text-xs uppercase tracking-[0.2em] opacity-70">Email</div>
                <div className="mt-1 font-serif text-xl md:text-2xl">
                  hello@vantage.studio
                </div>
              </div>
              <ArrowUpRight className="size-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>

            <Link
              href="tel:+15555550199"
              className="group flex items-center justify-between gap-6 rounded-md border border-border bg-background p-6 hover:bg-foreground hover:text-background transition-colors"
            >
              <div>
                <div className="text-xs uppercase tracking-[0.2em] opacity-70">Call</div>
                <div className="mt-1 font-serif text-xl md:text-2xl">
                  +1 (555) 555‑0199
                </div>
              </div>
              <ArrowUpRight className="size-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

import Image from "next/image"

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "A two-week kickoff: stakeholder interviews, audits of your current site and stack, and a written strategy memo.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Editorial-led design systems, prototyped in real components — never a static mockup that lies about how it scrolls.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We engineer in production-grade code from day one: TypeScript, accessible by default, performance-budgeted.",
  },
  {
    number: "04",
    title: "Operate",
    description:
      "On launch, your site moves to our managed hosting. We monitor, patch, and improve it — for as long as you keep it.",
  },
]

export function Process() {
  return (
    <section id="process" className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-5">
            <p className="text-xs uppercase tracking-[0.2em] text-background/60">
              04 — How we work
            </p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-balance">
              One team. Four stages. Zero handoffs.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-background/70 text-pretty max-w-md">
              The same designers, engineers, and infrastructure leads stay on your account from
              kickoff through year five. No agency baton-pass to a different department.
            </p>

            <div className="mt-10 relative aspect-[4/5] hidden md:block">
              <Image
                src="/studio-desk.jpg"
                alt="Designer workspace with sketches and tools"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover grayscale"
              />
            </div>
          </div>

          <ol className="md:col-span-7 flex flex-col">
            {steps.map((step, i) => (
              <li
                key={step.number}
                className="grid grid-cols-[auto_1fr] gap-6 md:gap-10 py-8 md:py-10 border-t border-background/15 first:border-t-0 md:first:border-t md:[&:first-child]:border-t-background/15"
                style={i === 0 ? { borderTop: "none" } : undefined}
              >
                <div className="font-serif text-3xl md:text-4xl text-accent">{step.number}</div>
                <div>
                  <h3 className="font-serif text-3xl md:text-4xl">{step.title}</h3>
                  <p className="mt-3 text-sm md:text-base leading-relaxed text-background/75 text-pretty">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

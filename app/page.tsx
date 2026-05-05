import { Hero } from "@/components/hero"
import { ClientMarquee } from "@/components/client-marquee"
import { Services } from "@/components/services"
import { HostingPlans } from "@/components/hosting-plans"
import { SelectedWork } from "@/components/selected-work"
import { Process } from "@/components/process"
import { Testimonial } from "@/components/testimonial"
import { CTA } from "@/components/cta"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <ClientMarquee />
      <Services />
      <HostingPlans />
      <SelectedWork />
      <Process />
      <Testimonial />
      <CTA />
      <SiteFooter />
    </main>
  )
}

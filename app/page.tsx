import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProposalSection } from "@/components/proposal-section"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Download, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProposalSection />

        {/* How it Works Preview */}
        <section className="border-t border-border bg-secondary py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-green-600">
                  Platform Preview
                </p>
                <h2 className="mt-2 text-balance font-mono text-3xl font-bold text-foreground">
                  Built for Every Stakeholder
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  From project coordinators logging activities to corporate leadership analyzing trends,
                  the platform serves every level of the residential community hierarchy.
                </p>

                <div className="mt-8 flex flex-col gap-4">
                  {[
                    {
                      title: "Project Coordinators",
                      desc: "Log activities, upload photos, manage resident volunteers, and track monthly compliance.",
                      href: "/mantra-dashboard",
                    },
                    {
                      title: "Zonal & Regional Managers",
                      desc: "Monitor eco-club implementation, view regional analytics, and identify underperforming communities.",
                      href: "/admin",
                    },
                    {
                      title: "Corporate Leadership",
                      desc: "Access cross-community analytics, generate reports, and recognize best-performing eco-clubs.",
                      href: "/reports",
                    },
                  ].map((role) => (
                    <Link
                      key={role.title}
                      href={role.href}
                      className="group flex items-start gap-4 rounded-lg border border-border bg-card p-4 transition-colors hover:border-green-600/30"
                    >
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">{role.title}</h4>
                        <p className="mt-1 text-sm text-muted-foreground">{role.desc}</p>
                      </div>
                      <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-green-600" />
                    </Link>
                  ))}
                </div>
              </div>

              <div className="relative overflow-hidden rounded-xl border border-border shadow-lg">
                <Image
                  src="/images/eco-activities.jpg"
                  alt="Residents participating in eco-club activities"
                  width={640}
                  height={420}
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-linear-to-r from-green-700 to-green-600 py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
            <h2 className="text-balance font-mono text-3xl font-bold text-white lg:text-4xl">
              Ready to Transform Your Community?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-white/80">
              Join Mantra Builders' initiative to create sustainable, eco-friendly residential communities. 
              Track activities, engage residents, and make a real impact on the environment.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button
                size="lg"
                variant="secondary"
                className="gap-2 bg-white text-green-700 hover:bg-gray-100"
                asChild
              >
                <Link href="/mantra-dashboard">
                  <FileText className="h-4 w-4" />
                  View Mantra Dashboard
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
                asChild
              >
                <a 
                  href="/downloads/implementation-guide.pdf" 
                  download="Mantra-Eco-Club-Implementation-Guide.pdf"
                  className="flex items-center gap-2"
                >
                  <Download className="h-4 w-4" />
                  Download Implementation Guide
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
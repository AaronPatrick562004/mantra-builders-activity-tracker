"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Leaf, Building2, Users, CalendarDays } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getMantraTotalStats } from "@/lib/mantra-eco-club-data"

export function HeroSection() {
  const stats = getMantraTotalStats()

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-eco.jpg"
          alt="Residents participating in eco-club activities"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 w-full mx-auto max-w-7xl px-4 py-20 lg:px-8 lg:py-32">
        {/* All content left-aligned */}
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/20 backdrop-blur-sm px-4 py-1.5 text-sm text-white">
            <Leaf className="h-4 w-4" />
            <span>Mantra Builders | Sustainable Living Initiative</span>
          </div>

          {/* Title */}
          <h1 className="text-balance font-mono text-4xl font-bold tracking-tight text-white lg:text-6xl">
            Mantra Builders Activity Tracker
          </h1>

          {/* Description */}
          <p className="mt-4 text-pretty text-lg leading-relaxed text-white/90 lg:text-xl">
            A comprehensive digital platform for Mantra Builders to monitor, track, and celebrate Eco-Club 
            activities across all residential communities.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg" className="gap-2 bg-white text-green-700 hover:bg-gray-100 shadow-lg" asChild>
              <Link href="/mantra-dashboard">
                Project Dashboard
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white backdrop-blur-sm" asChild>
              <Link href="/admin">
                Admin Monitor
              </Link>
            </Button>
          </div>

          {/* Stats Cards - Left aligned grid */}
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { icon: Building2, label: "Projects Registered", value: stats.totalProjects.toLocaleString() },
              { icon: Leaf, label: "Active Eco-Clubs", value: stats.activeClubs.toLocaleString() },
              { icon: CalendarDays, label: "Activities This Month", value: stats.totalActivities.toLocaleString() },
              { icon: Users, label: "Residents Engaged", value: stats.totalParticipation.toLocaleString() },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-white/30 bg-black/20 backdrop-blur-sm p-3 sm:p-4 transition-all hover:bg-black/30"
              >
                <stat.icon className="mb-2 h-4 w-4 sm:h-5 sm:w-5 text-white/90" />
                <p className="font-mono text-lg sm:text-2xl font-bold text-white">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
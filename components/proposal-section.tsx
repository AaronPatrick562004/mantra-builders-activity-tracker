import {
  TreePine,
  Recycle,
  Droplets,
  Zap,
  Sparkles,
  Bug,
  Footprints,
  Calendar,
  Flower2,
  Ban,
  ClipboardCheck,
  BarChart3,
  Shield,
  Award,
  Building2,
  Users,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const activities = [
  { icon: TreePine, label: "Tree Plantation & Nurturing", color: "text-green-700" },
  { icon: Recycle, label: "Waste Segregation & Recycling", color: "text-green-700" },
  { icon: Ban, label: "Plastic-Free Community", color: "text-green-700" },
  { icon: Droplets, label: "Water Conservation", color: "text-green-700" },
  { icon: Zap, label: "Energy Saving Practices", color: "text-green-700" },
  { icon: Sparkles, label: "Cleanliness Drives", color: "text-green-700" },
  { icon: Bug, label: "Biodiversity Awareness", color: "text-green-700" },
  { icon: Footprints, label: "Nature Walks / Eco-Trails", color: "text-green-700" },
  { icon: Calendar, label: "Environmental Day Celebrations", color: "text-green-700" },
  { icon: Flower2, label: "Composting / Kitchen Garden", color: "text-green-700" },
]

const trackingFeatures = [
  {
    icon: ClipboardCheck,
    title: "Digital Activity Logging",
    description:
      "Residential societies log each activity with date, description, resident participation count, and photo evidence directly on the platform.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description:
      "Zonal and regional managers can view real-time dashboards showing activity completion rates, participation trends, and community-level comparisons.",
  },
  {
    icon: Shield,
    title: "Hierarchical Monitoring",
    description:
      "Community Managers, Zonal Heads, and Regional Directors each have tailored dashboards for their jurisdiction level.",
  },
  {
    icon: Award,
    title: "Recognition & Ranking",
    description:
      "Automatic scoring and ranking of eco-clubs based on activity frequency, resident participation, and diversity of activities conducted.",
  },
]

export function ProposalSection() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
            Mantra Builders Sustainability Framework
          </p>
          <h2 className="mt-2 text-balance font-mono text-3xl font-bold text-foreground lg:text-4xl">
            Digital Tracking Framework for Eco-Clubs
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            A unified digital system to track implementation of Eco-Club activities across all residential
            communities under Mantra Builders.
          </p>
        </div>

        {/* Mantra Initiative Note */}
        <div className="mt-8 rounded-lg bg-green-50 p-4 text-center border border-green-200">
          <Building2 className="mx-auto mb-2 h-6 w-6 text-green-700" />
          <p className="text-sm text-green-700">
            <span className="font-semibold">Mantra Builders Initiative:</span> Promoting sustainable living
            and environmental consciousness among residents across all Mantra Builders communities.
          </p>
        </div>

        {/* Objectives */}
        <div className="mt-16">
          <h3 className="text-center font-mono text-xl font-bold text-foreground">
            Eco-Club Objectives
          </h3>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              "Develop environmental awareness among residents",
              "Promote sustainable habits and responsible behaviour",
              "Encourage participation in conservation activities",
              "Connect residents with nature and local environment",
              "Support Mantra Builders' sustainability goals",
            ].map((objective, index) => (
              <div
                key={index}
                className="flex items-start gap-3 rounded-lg border border-border bg-card p-4"
              >
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-700 text-sm font-bold text-white">
                  {index + 1}
                </div>
                <p className="text-sm leading-relaxed text-foreground">{objective}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mandated Activities */}
        <div className="mt-16">
          <h3 className="text-center font-mono text-xl font-bold text-foreground">
            Recommended Activities to Track
          </h3>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Each residential community is encouraged to conduct at least one activity per month
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {activities.map((activity) => (
              <div
                key={activity.label}
                className="flex flex-col items-center gap-2 rounded-lg border border-border bg-card p-4 text-center transition-colors hover:border-green-700/30 hover:bg-green-50"
              >
                <activity.icon className={`h-8 w-8 ${activity.color}`} />
                <span className="text-xs font-medium leading-tight text-foreground">
                  {activity.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Tracking System */}
        <div className="mt-16">
          <h3 className="text-center font-mono text-xl font-bold text-foreground">
            Proposed Tracking System
          </h3>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {trackingFeatures.map((feature) => (
              <Card key={feature.title} className="border-border hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100">
                      <feature.icon className="h-5 w-5 text-green-700" />
                    </div>
                    <CardTitle className="text-base font-semibold">
                      {feature.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Implementation Plan */}
        <div className="mt-16">
          <h3 className="text-center font-mono text-xl font-bold text-foreground">
            Implementation Plan
          </h3>
          <div className="mx-auto mt-6 max-w-3xl">
            {[
              {
                phase: "Phase 1",
                title: "Project Registration & Eco-Club Formation",
                items: [
                  "All residential societies register on the platform with unique ID",
                  "Appoint Eco-Club coordinator (society management representative)",
                  "Register resident volunteers",
                  "Complete eco-club formation checklist",
                ],
              },
              {
                phase: "Phase 2",
                title: "Activity Logging & Documentation",
                items: [
                  "Monthly activity submission with photos/reports",
                  "Resident participation tracking",
                  "Activity categorization as per guidelines",
                  "Notice board display documentation",
                ],
              },
              {
                phase: "Phase 3",
                title: "Monitoring & Reporting",
                items: [
                  "Zonal-level manager dashboards for monitoring",
                  "Regional-level aggregated reports",
                  "Corporate-level analytics and trends",
                  "Periodic performance assessment",
                ],
              },
              {
                phase: "Phase 4",
                title: "Recognition & Scaling",
                items: [
                  "Best performing eco-club identification",
                  "Awards and recognition at regional/corporate level",
                  "Community involvement metrics",
                  "Annual impact assessment report",
                ],
              },
            ].map((phase, index) => (
              <div key={phase.phase} className="relative flex gap-4 pb-8 last:pb-0">
                {index < 3 && (
                  <div className="absolute left-4.75 top-10 h-[calc(100%-16px)] w-px bg-green-200" />
                )}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-700 text-xs font-bold text-white">
                  {phase.phase.split(" ")[1]}
                </div>
                <div className="flex-1">
                  <div className="rounded-lg border border-border bg-card p-4 hover:shadow-md transition-shadow">
                    <p className="text-xs font-semibold uppercase tracking-wider text-green-700">
                      {phase.phase}
                    </p>
                    <h4 className="mt-1 font-semibold text-foreground">{phase.title}</h4>
                    <ul className="mt-3 flex flex-col gap-1.5">
                      {phase.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-700" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mantra Eco-Club Highlight */}
        <div className="mt-16 rounded-xl bg-linear-to-r from-green-700 to-green-600 p-8 text-center text-white">
          <Users className="mx-auto mb-3 h-10 w-10" />
          <h3 className="text-2xl font-bold">Join the Mantra Builders Eco-Club Movement</h3>
          <p className="mx-auto mt-2 max-w-2xl text-green-100">
            Be part of a growing community of environmentally conscious residents making a difference
            in their neighborhoods. Together, we can create sustainable communities for future generations.
          </p>
        </div>
      </div>
    </section>
  )
}
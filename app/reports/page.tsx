import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
  MonthlyProgressChart,
  DistrictComparisonChart,
  ActivityTypeDistribution,
  ResidentParticipationChart,
} from "@/components/analytics-charts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  BarChart3,
  TrendingUp,
  Award,
  Star,
  Download,
  FileText,
  Building2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { getMantraTotalStats, mantraProjects } from "@/lib/mantra-eco-club-data"

export default function ReportsPage() {
  const stats = getMantraTotalStats()
  const topProjects = [...mantraProjects]
    .filter((p) => p.ecoClubFormed)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5)

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-900">
              <BarChart3 className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="font-mono text-xl font-bold text-gray-900 sm:text-2xl">
                Reports
              </h1>
              <p className="text-xs text-gray-600 sm:text-sm">
                Mantra Properties | 17 years | 12 completed + 18 ongoing projects
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="gap-2" asChild>
              <a 
                href="/downloads/implementation-guide.pdf" 
                download="Mantra-Eco-Club-Report.pdf"
              >
                <FileText className="h-4 w-4" />
                Generate Report
              </a>
            </Button>
            <Button variant="outline" size="sm" className="gap-2" asChild>
              <a 
                href="/downloads/mantra-eco-club-data.csv" 
                download="Mantra-Eco-Club-Data-Export.csv"
              >
                <Download className="h-4 w-4" />
                Export Data
              </a>
            </Button>
          </div>
        </div>

        {/* Portfolio Overview */}
        <Card className="mb-5 border-blue-900/20">
          <CardContent className="p-4 sm:p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-900">
                <Building2 className="h-4 w-4 text-white" />
              </div>
              <div>
                <h3 className="font-mono text-base font-bold text-gray-900 sm:text-lg">Mantra Properties Portfolio</h3>
                <p className="text-xs text-gray-600">Distinguished real estate developer in Pune</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 text-center">
              <div>
                <p className="font-mono text-xl font-bold text-blue-900 sm:text-2xl">{stats.completedProjects}</p>
                <p className="text-xs text-gray-600 mt-0.5">Successful Projects</p>
              </div>
              <div>
                <p className="font-mono text-xl font-bold text-blue-900 sm:text-2xl">{stats.ongoingProjects}</p>
                <p className="text-xs text-gray-600 mt-0.5">Ongoing Developments</p>
              </div>
              <div>
                <p className="font-mono text-xl font-bold text-blue-900 sm:text-2xl">{stats.legacyYears}</p>
                <p className="text-xs text-gray-600 mt-0.5">Years Legacy</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Summary Cards */}
        <div className="mb-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
          <Card className="border-blue-900/20">
            <CardContent className="pt-4">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-blue-900" />
                <span className="text-xs font-medium text-blue-900">Growth Rate</span>
              </div>
              <p className="mt-1 font-mono text-2xl font-bold text-gray-900 sm:text-3xl">+18%</p>
              <p className="mt-1 text-xs text-gray-500">Eco-club adoption this quarter</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-4">
              <div className="flex items-center gap-2 text-gray-500">
                <span className="text-xs">Avg Activities/Project</span>
              </div>
              <p className="mt-1 font-mono text-2xl font-bold text-gray-900 sm:text-3xl">
                {(stats.totalActivities / stats.activeClubs * 12).toFixed(1)}
              </p>
              <p className="mt-1 text-xs text-gray-500">Per year projection</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-4">
              <div className="flex items-center gap-2 text-gray-500">
                <span className="text-xs">Avg Residents/Activity</span>
              </div>
              <p className="mt-1 font-mono text-2xl font-bold text-gray-900 sm:text-3xl">
                {Math.round(stats.totalParticipation / stats.totalActivities)}
              </p>
              <p className="mt-1 text-xs text-gray-500">Across all districts</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-4">
              <div className="flex items-center gap-2 text-gray-500">
                <span className="text-xs">Corporate Coverage</span>
              </div>
              <p className="mt-1 font-mono text-2xl font-bold text-gray-900 sm:text-3xl">
                {Math.round((stats.activeClubs / stats.totalProjects) * 100)}%
              </p>
              <p className="mt-1 text-xs text-gray-500">Projects with active eco-clubs</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts Grid */}
        <div className="mb-5 grid gap-5 lg:grid-cols-2">
          <MonthlyProgressChart />
          <DistrictComparisonChart />
        </div>

        <div className="mb-5 grid gap-5 lg:grid-cols-2">
          <ActivityTypeDistribution />
          <ResidentParticipationChart />
        </div>

        {/* Top Performing Projects */}
        <Card className="mb-5">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
              <Award className="h-5 w-5 text-blue-900" />
              Top Performing Eco-Clubs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-3 text-xs text-gray-600 sm:text-sm">
              Residential communities recognized for outstanding eco-club activities as per Mantra Properties' monitoring criteria
            </p>
            <div className="grid gap-2.5 md:grid-cols-5">
              {topProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="flex flex-col items-center gap-1.5 rounded-lg border border-gray-200 bg-gray-50 p-3 text-center"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 font-mono text-base font-bold text-blue-900">
                    {index + 1}
                  </div>
                  <h4 className="text-xs font-medium leading-tight text-gray-900 sm:text-sm">
                    {project.name}
                  </h4>
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 text-blue-900" />
                    <span className="font-mono text-xs font-semibold text-gray-900 sm:text-sm">
                      {project.rating}
                    </span>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {project.activitiesCompleted} activities
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Impact Summary */}
        <Card className="border-blue-900/20">
          <CardContent className="py-5 sm:py-6">
            <div className="mx-auto max-w-2xl text-center">
              <h3 className="font-mono text-lg font-bold text-gray-900 sm:text-xl">
                Impact Summary
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-gray-600 sm:text-base">
                Mantra Properties brings 17 years of distinguished real estate development with {stats.completedProjects} successful projects and {stats.ongoingProjects} ongoing developments across Pune. This platform enables real-time monitoring of {stats.activeClubs.toLocaleString()} active eco-clubs across {stats.totalProjects.toLocaleString()} residential projects, engaging {stats.totalParticipation.toLocaleString()} residents in environmental activities every month.
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-2.5">
                <Button size="sm" className="gap-2 bg-blue-900 hover:bg-blue-950" asChild>
                  <a 
                    href="/downloads/implementation-guide.pdf" 
                    download="Mantra-Eco-Club-Full-Report.pdf"
                  >
                    <FileText className="h-4 w-4" />
                    Download Full Report
                  </a>
                </Button>
                <Button variant="outline" size="sm" className="gap-2" asChild>
                  <a 
                    href="/downloads/mantra-eco-club-data.csv" 
                    download="Mantra-Eco-Club-Data-Export.csv"
                  >
                    <Download className="h-4 w-4" />
                    Export as CSV
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  )
}

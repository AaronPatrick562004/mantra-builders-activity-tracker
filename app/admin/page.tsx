import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Shield,
  Building2,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Users,
  MapPin,
  FileWarning,
  TrendingUp,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { getMantraTotalStats, mantraProjects } from "@/lib/mantra-eco-club-data"
import Link from "next/link"

export default function AdminPage() {
  const stats = getMantraTotalStats()
  const inactiveProjects = mantraProjects.filter((p) => !p.ecoClubFormed)
  const lowPerformingProjects = mantraProjects
    .filter((p) => p.ecoClubFormed && p.rating < 4.5)
    .sort((a, b) => a.rating - b.rating)
    .slice(0, 5)
  const recentActivities = mantraProjects
    .filter((p) => p.activitiesCompleted > 0)
    .sort((a, b) => new Date(b.lastActivityDate).getTime() - new Date(a.lastActivityDate).getTime())
    .slice(0, 5)

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
        {/* Page Header */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-900">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="font-mono text-2xl font-bold text-gray-900">
                Admin
              </h1>
              <p className="text-sm text-gray-600">
                Mantra Properties | Operational oversight & compliance tracking
              </p>
            </div>
          </div>
        </div>

        {/* Portfolio Status Overview */}
        <div className="mb-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          <Card className="border-blue-900/20 bg-blue-900/5">
            <CardContent className="pt-6">
              <div className="flex items-center gap-2">
                <Building2 className="h-4 w-4 text-blue-900" />
                <span className="text-xs font-medium text-blue-900">Total Portfolio</span>
              </div>
              <p className="mt-1 font-mono text-3xl font-bold text-gray-900">{stats.totalProjects}</p>
              <p className="mt-1 text-xs text-gray-500">{stats.completedProjects} completed, {stats.ongoingProjects} ongoing</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 text-gray-500">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <span className="text-xs">Active Clubs</span>
              </div>
              <p className="mt-1 font-mono text-3xl font-bold text-gray-900">{stats.activeClubs}</p>
              <p className="mt-1 text-xs text-gray-500">
                {Math.round((stats.activeClubs / stats.totalProjects) * 100)}% coverage
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 text-gray-500">
                <AlertTriangle className="h-4 w-4 text-amber-600" />
                <span className="text-xs">Needs Attention</span>
              </div>
              <p className="mt-1 font-mono text-3xl font-bold text-gray-900">{inactiveProjects.length + lowPerformingProjects.length}</p>
              <p className="mt-1 text-xs text-gray-500">Projects below threshold</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 text-gray-500">
                <TrendingUp className="h-4 w-4 text-blue-900" />
                <span className="text-xs">This Month</span>
              </div>
              <p className="mt-1 font-mono text-3xl font-bold text-gray-900">{stats.totalActivities}</p>
              <p className="mt-1 text-xs text-gray-500">Activities completed</p>
            </CardContent>
          </Card>
        </div>

        {/* Alerts Section */}
        <div className="mb-8 grid gap-8 lg:grid-cols-2">
          {/* Inactive Projects */}
          <Card className="border-amber-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <FileWarning className="h-5 w-5 text-amber-600" />
                Projects Without Eco-Clubs
              </CardTitle>
            </CardHeader>
            <CardContent>
              {inactiveProjects.length === 0 ? (
                <p className="text-sm text-gray-500">All projects have active eco-clubs ✓</p>
              ) : (
                <div className="space-y-3">
                  {inactiveProjects.map((project) => (
                    <div key={project.id} className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-3">
                      <div className="flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-amber-500" />
                        <div>
                          <p className="text-sm font-medium text-gray-900">{project.name}</p>
                          <p className="text-xs text-gray-500 flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {project.block}, {project.district}
                          </p>
                        </div>
                      </div>
                      <Badge variant="outline" className="text-amber-700 border-amber-300">
                        No Club
                      </Badge>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Low Performing Projects */}
          <Card className="border-red-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <AlertTriangle className="h-5 w-5 text-red-600" />
                Low Performance Alerts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm text-gray-600">Projects with rating below 4.5 requiring intervention</p>
              <div className="space-y-3">
                {lowPerformingProjects.map((project) => (
                  <div key={project.id} className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-3">
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-red-500" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">{project.name}</p>
                        <p className="text-xs text-gray-500">
                          {project.activitiesCompleted} activities • {project.residentVolunteers} volunteers
                        </p>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-red-700 border-red-300">
                      {project.rating} ★
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity Feed */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Clock className="h-5 w-5 text-blue-900" />
              Recent Eco-Club Activities
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentActivities.map((project) => (
                <div key={project.id} className="flex items-center justify-between rounded-lg border border-gray-200 bg-gray-50 p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                      <CheckCircle2 className="h-5 w-5 text-green-700" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{project.name}</p>
                      <p className="text-xs text-gray-500">
                        Last activity: {new Date(project.lastActivityDate).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-mono text-sm font-semibold text-gray-900">{project.activitiesCompleted}</p>
                    <p className="text-xs text-gray-500">activities</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <Button variant="outline" size="sm" asChild>
                <Link href="/reports">View Full Activity Report →</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  )
}
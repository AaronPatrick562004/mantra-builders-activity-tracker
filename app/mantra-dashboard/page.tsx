import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Leaf,
  Users,
  CalendarCheck,
  Star,
  Building2,
  User,
  MapPin,
  Trophy,
  Award,
  TrendingUp,
} from "lucide-react"
import { mantraProjects, getMantraTotalStats } from "@/lib/mantra-eco-club-data"

export default function MantraDashboardPage() {
  const project = mantraProjects[0]
  const stats = getMantraTotalStats()
  const monthlyTarget = 1
  const monthsElapsed = 6
  const completionRate = Math.round((project.activitiesCompleted / (monthlyTarget * monthsElapsed)) * 100)

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="mx-auto px-4 py-4 sm:px-6 md:px-8 lg:max-w-4xl">
        {/* Welcome Banner */}
        <div className="mb-4 sm:mb-6 rounded-xl bg-linear-to-r from-blue-900 to-blue-700 p-4 sm:p-6 text-white">
          <div className="flex flex-col gap-2">
            <h1 className="text-lg sm:text-2xl font-bold">Welcome, {project.coordinator.split(" ")[0]}! 👋</h1>
            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-blue-100">
              <span className="flex items-center gap-1">
                <Award className="h-3.5 w-3.5" />
                17 Years Legacy
              </span>
              <span>•</span>
              <span>12 Successful Projects</span>
              <span>•</span>
              <span>18 Ongoing Developments</span>
            </div>
          </div>
        </div>

        {/* Mantra Properties Overview */}
        <Card className="mb-4 sm:mb-6 border-blue-900/20 bg-blue-900/5">
          <CardContent className="p-4 sm:p-6">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="font-mono text-xl sm:text-3xl font-bold text-blue-900">{stats.completedProjects}</p>
                <p className="text-xs text-gray-600 mt-1">Completed</p>
              </div>
              <div>
                <p className="font-mono text-xl sm:text-3xl font-bold text-blue-900">{stats.ongoingProjects}</p>
                <p className="text-xs text-gray-600 mt-1">Ongoing</p>
              </div>
              <div>
                <p className="font-mono text-xl sm:text-3xl font-bold text-blue-900">{stats.legacyYears}</p>
                <p className="text-xs text-gray-600 mt-1">Years in Pune</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Project Info Card */}
        <Card className="mb-4 sm:mb-6">
          <CardContent className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 sm:p-3 rounded-xl bg-blue-100">
                  <Building2 className="h-5 w-5 sm:h-6 sm:w-6 text-blue-900" />
                </div>
                <div>
                  <h2 className="text-base sm:text-xl font-semibold text-gray-900">{project.name}</h2>
                  <div className="flex items-center gap-1 sm:gap-2 mt-0.5 sm:mt-1">
                    <MapPin className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-gray-500" />
                    <span className="text-xs sm:text-sm text-gray-600">{project.block}, {project.district}, Pune</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between sm:justify-end gap-2">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 sm:h-5 sm:w-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-lg sm:text-2xl font-bold text-gray-900">{project.rating}</span>
                  <span className="text-xs sm:text-sm text-gray-500">/5.0</span>
                </div>
                <Badge className="bg-blue-100 text-blue-900 text-xs sm:text-sm">Active</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
          <Card>
            <CardContent className="p-3 sm:p-4">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="p-1.5 sm:p-2 rounded-lg bg-blue-100">
                  <Users className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-blue-900" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Volunteers</p>
                  <p className="text-base sm:text-xl font-bold text-gray-900">{project.residentVolunteers}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-3 sm:p-4">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="p-1.5 sm:p-2 rounded-lg bg-blue-100">
                  <CalendarCheck className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-blue-900" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Activities Done</p>
                  <p className="text-base sm:text-xl font-bold text-gray-900">{project.activitiesCompleted}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Progress Section */}
        <Card className="mb-4 sm:mb-6">
          <CardHeader className="pb-2 p-4 sm:p-6">
            <CardTitle className="text-sm sm:text-lg flex items-center gap-2">
              <Trophy className="h-4 w-4 sm:h-5 sm:w-5 text-blue-900" />
              Monthly Compliance
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-0 sm:p-6 sm:pt-0">
            <div className="flex items-center justify-between text-xs sm:text-sm mb-2">
              <span className="text-gray-600">
                {project.activitiesCompleted} of {monthlyTarget * monthsElapsed} activities completed
              </span>
              <span className="font-semibold text-blue-900">{completionRate}%</span>
            </div>
            <Progress value={completionRate} className="h-1.5 sm:h-2 bg-gray-100" />
            <p className="mt-2 sm:mt-3 text-xs text-gray-500">
              ✓ Minimum 1 activity per month as per Mantra Properties sustainability framework
            </p>
          </CardContent>
        </Card>

        {/* Coordinator Info */}
        <Card>
          <CardHeader className="pb-2 p-4 sm:p-6">
            <CardTitle className="text-sm sm:text-lg flex items-center gap-2">
              <User className="h-4 w-4 sm:h-5 sm:w-5 text-blue-900" />
              Club Coordinator
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-0 sm:p-6 sm:pt-0">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-blue-100 flex items-center justify-center">
                <User className="h-5 w-5 sm:h-6 sm:w-6 text-blue-900" />
              </div>
              <div>
                <p className="text-sm sm:text-base font-semibold text-gray-900">{project.coordinator}</p>
                <p className="text-xs sm:text-sm text-gray-500">Eco-Club Coordinator</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  )
}
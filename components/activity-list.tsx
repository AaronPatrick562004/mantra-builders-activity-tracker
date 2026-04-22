import { Calendar, Camera, Users, CheckCircle2, Clock, ArrowUpRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { mantraActivities, activityTypeLabels } from "@/lib/mantra-eco-club-data"

const statusConfig = {
  completed: { label: "Completed", class: "bg-green-100 text-green-700 border-green-200" },
  upcoming: { label: "Upcoming", class: "bg-accent/10 text-accent border-accent/20" },
  "in-progress": { label: "In Progress", class: "bg-chart-3/10 text-chart-3 border-chart-3/20" },
}

export function ActivityList({ projectId }: { projectId?: string }) {
  const activities = projectId
    ? mantraActivities.filter((a) => a.projectId === projectId)
    : mantraActivities

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Recent Activities</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-3">
          {activities.map((activity) => {
            const status = statusConfig[activity.status]
            return (
              <div
                key={activity.id}
                className="group flex items-start gap-4 rounded-lg border border-border p-4 transition-colors hover:bg-secondary"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-100">
                  <CheckCircle2 className="h-5 w-5 text-green-700" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h4 className="font-medium text-foreground">{activity.title}</h4>
                    <Badge variant="outline" className={status.class}>
                      {status.label}
                    </Badge>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{activity.description}</p>
                  <div className="mt-2 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {new Date(activity.date).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="h-3.5 w-3.5" />
                      {activity.residentsParticipated > 0
                        ? `${activity.residentsParticipated} residents`
                        : "TBD"}
                    </span>
                    {activity.photosCount > 0 && (
                      <span className="flex items-center gap-1">
                        <Camera className="h-3.5 w-3.5" />
                        {activity.photosCount} photos
                      </span>
                    )}
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {activityTypeLabels[activity.type]}
                    </span>
                  </div>
                  {!projectId && (
                    <p className="mt-1 flex items-center gap-1 text-xs font-medium text-green-700">
                      {activity.projectName}
                      <ArrowUpRight className="h-3 w-3" />
                    </p>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
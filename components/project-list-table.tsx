"use client"

import { Star, AlertTriangle, CheckCircle2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { mantraProjects } from "@/lib/mantra-eco-club-data"

export function ProjectListTable() {
  const sortedProjects = [...mantraProjects].sort((a, b) => b.rating - a.rating)

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Project-wise Eco-Club Status</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="pb-3 pr-4 text-left font-medium text-muted-foreground">Project</th>
                <th className="pb-3 pr-4 text-left font-medium text-muted-foreground">District</th>
                <th className="pb-3 pr-4 text-left font-medium text-muted-foreground">Type</th>
                <th className="pb-3 pr-4 text-center font-medium text-muted-foreground">Club Status</th>
                <th className="pb-3 pr-4 text-right font-medium text-muted-foreground">Activities</th>
                <th className="pb-3 pr-4 text-right font-medium text-muted-foreground">Volunteers</th>
                <th className="pb-3 text-right font-medium text-muted-foreground">Rating</th>
              </tr>
            </thead>
            <tbody>
              {sortedProjects.map((project) => (
                <tr
                  key={project.id}
                  className="border-b border-border last:border-0"
                >
                  <td className="py-3 pr-4">
                    <div>
                      <p className="font-medium text-foreground">{project.name}</p>
                      <p className="text-xs text-muted-foreground">{project.coordinator}</p>
                    </div>
                   </td>
                  <td className="py-3 pr-4 text-foreground">{project.district}</td>
                  <td className="py-3 pr-4">
                    <Badge variant="outline" className="capitalize text-xs">
                      {project.type}
                    </Badge>
                   </td>
                  <td className="py-3 pr-4 text-center">
                    {project.ecoClubFormed ? (
                      <CheckCircle2 className="mx-auto h-5 w-5 text-green-700" />
                    ) : (
                      <AlertTriangle className="mx-auto h-5 w-5 text-destructive" />
                    )}
                   </td>
                  <td className="py-3 pr-4 text-right font-mono text-foreground">
                    {project.activitiesCompleted}
                   </td>
                  <td className="py-3 pr-4 text-right font-mono text-foreground">
                    {project.residentVolunteers}
                   </td>
                  <td className="py-3 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <Star className="h-3.5 w-3.5 text-green-700" />
                      <span className="font-mono text-foreground">{project.rating}</span>
                    </div>
                   </td>
                 </tr>
              ))}
            </tbody>
           </table>
        </div>
      </CardContent>
    </Card>
  )
}
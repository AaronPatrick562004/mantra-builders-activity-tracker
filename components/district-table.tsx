"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { mantraDistrictStats } from "@/lib/mantra-eco-club-data"

export function DistrictTable() {
  return (
    <Card>
      <CardHeader className="p-3 sm:p-4 md:p-6">
        <CardTitle className="text-sm sm:text-base md:text-lg">District-wise Eco-Club Performance</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="p-2 sm:p-3 text-left font-medium text-gray-500">District</th>
                <th className="p-2 sm:p-3 text-right font-medium text-gray-500">Projects</th>
                <th className="p-2 sm:p-3 text-right font-medium text-gray-500">Active</th>
                <th className="p-2 sm:p-3 text-left font-medium text-gray-500">Coverage</th>
                <th className="p-2 sm:p-3 text-right font-medium text-gray-500">Activities</th>
                <th className="p-2 sm:p-3 text-right font-medium text-gray-500">Residents</th>
              </tr>
            </thead>
            <tbody>
              {mantraDistrictStats.map((district) => {
                const coverage = Math.round((district.activeEcoClubs / district.totalProjects) * 100)
                return (
                  <tr key={district.district} className="border-b border-gray-100">
                    <td className="p-2 sm:p-3 font-medium text-gray-900 whitespace-nowrap">{district.district}</td>
                    <td className="p-2 sm:p-3 text-right font-mono">{district.totalProjects}</td>
                    <td className="p-2 sm:p-3 text-right font-mono">{district.activeEcoClubs}</td>
                    <td className="p-2 sm:p-3">
                      <div className="flex items-center gap-1 sm:gap-2">
                        <Progress value={coverage} className="h-1.5 sm:h-2 w-12 sm:w-20" />
                        <span className="font-mono text- sm:text-xs text-gray-500">{coverage}%</span>
                      </div>
                    </td>
                    <td className="p-2 sm:p-3 text-right font-mono">{district.activitiesThisMonth}</td>
                    <td className="p-2 sm:p-3 text-right font-mono">{district.residentParticipation.toLocaleString()}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { mantraMonthlyProgress, mantraDistrictStats } from "@/lib/mantra-eco-club-data"

// Blue color palette
const BLUE_COLORS = {
  primary: "#1e3a8a",
  secondary: "#3b82f6",
  light: "#93c5fd",
  lighter: "#dbeafe",
}

const PIE_COLORS = ["#1e3a8a", "#2563eb", "#3b82f6", "#60a5fa", "#93c5fd"]

export function MonthlyProgressChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base sm:text-lg">Monthly Activity Progress</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={mantraMonthlyProgress}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="month" fontSize={12} tick={{ fill: '#6b7280' }} />
            <YAxis fontSize={12} tick={{ fill: '#6b7280' }} />
            <Tooltip
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '8px'
              }}
            />
            <Bar dataKey="activities" fill={BLUE_COLORS.primary} radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

export function DistrictComparisonChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base sm:text-lg">District-wise Participation</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={mantraDistrictStats}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="district" fontSize={12} tick={{ fill: '#6b7280' }} angle={-15} textAnchor="end" height={60} />
            <YAxis fontSize={12} tick={{ fill: '#6b7280' }} />
            <Tooltip
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '8px'
              }}
            />
            <Line
              type="monotone"
              dataKey="residentParticipation"
              stroke={BLUE_COLORS.primary}
              strokeWidth={3}
              dot={{ fill: BLUE_COLORS.primary, r: 4 }}
              activeDot={{ r: 6, fill: BLUE_COLORS.secondary }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

export function ActivityTypeDistribution() {
  const data = [
    { name: "Tree Plantation", value: 35, color: PIE_COLORS[0] },
    { name: "Waste Segregation", value: 28, color: PIE_COLORS[1] },
    { name: "Water Conservation", value: 20, color: PIE_COLORS[2] },
    { name: "Cleanliness Drive", value: 12, color: PIE_COLORS[3] },
    { name: "Others", value: 5, color: PIE_COLORS[4] },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base sm:text-lg">Activity Type Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              outerRadius={80}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

export function ResidentParticipationChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base sm:text-lg">Active Eco-Clubs by District</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={mantraDistrictStats} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis type="number" fontSize={12} tick={{ fill: '#6b7280' }} />
            <YAxis type="category" dataKey="district" fontSize={12} tick={{ fill: '#6b7280' }} width={90} />
            <Tooltip
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '8px'
              }}
            />
            <Bar dataKey="activeEcoClubs" fill={BLUE_COLORS.secondary} radius={[0, 8, 8, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
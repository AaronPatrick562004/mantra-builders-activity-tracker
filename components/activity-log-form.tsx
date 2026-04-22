"use client"

import { useState } from "react"
import { CalendarDays, Camera, CheckCircle2, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { activityTypeLabels, type ActivityType } from "@/lib/mantra-eco-club-data"

export function ActivityLogForm() {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <Card className="border-green-700/30 bg-green-700/5">
        <CardContent className="flex flex-col items-center gap-4 py-12">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <CheckCircle2 className="h-8 w-8 text-green-700" />
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold text-foreground">Activity Logged Successfully</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Your activity has been recorded and is visible to monitoring officers.
            </p>
          </div>
          <Button variant="outline" onClick={() => setSubmitted(false)}>
            Log Another Activity
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <CalendarDays className="h-5 w-5 text-green-700" />
          Log New Activity
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form
          className="flex flex-col gap-5"
          onSubmit={(e) => {
            e.preventDefault()
            setSubmitted(true)
          }}
        >
          <div className="grid gap-5 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <Label htmlFor="activity-type">Activity Type</Label>
              <Select required>
                <SelectTrigger id="activity-type">
                  <SelectValue placeholder="Select activity type" />
                </SelectTrigger>
                <SelectContent>
                  {(Object.keys(activityTypeLabels) as ActivityType[]).map((key) => (
                    <SelectItem key={key} value={key}>
                      {activityTypeLabels[key]}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="activity-date">Date of Activity</Label>
              <Input id="activity-date" type="date" required />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="activity-title">Activity Title</Label>
            <Input id="activity-title" placeholder="e.g., Tree Plantation Drive in Community Park" required />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="activity-desc">Description</Label>
            <Textarea
              id="activity-desc"
              placeholder="Describe the activity conducted, outcomes, and impact..."
              rows={3}
              required
            />
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <Label htmlFor="residents-count">Residents Participated</Label>
              <Input id="residents-count" type="number" min={1} placeholder="e.g., 120" required />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="photos">Upload Photos</Label>
              <div className="flex items-center gap-2">
                <Input id="photos" type="file" accept="image/*" multiple className="flex-1" />
                <Button type="button" variant="outline" size="icon" className="shrink-0">
                  <Camera className="h-4 w-4" />
                  <span className="sr-only">Take photo</span>
                </Button>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="report">Report / Observations (Optional)</Label>
            <Textarea
              id="report"
              placeholder="Any additional notes, report, or observations..."
              rows={2}
            />
          </div>

          <div className="flex justify-end">
            <Button type="submit" className="gap-2 bg-green-700 hover:bg-green-800">
              <Send className="h-4 w-4" />
              Submit Activity
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
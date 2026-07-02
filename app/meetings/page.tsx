import { CalendarDays, CheckCircle2, Clock3, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const meetings = [
  { client: "Northwind Labs", date: "2026-06-28", time: "10:00", attendees: 6, status: "Scheduled", notes: "Q3 rollout planning" },
  { client: "Helio Systems", date: "2026-06-29", time: "14:30", attendees: 4, status: "Upcoming", notes: "Implementation review" },
  { client: "Crest Digital", date: "2026-06-25", time: "09:00", attendees: 5, status: "Completed", notes: "Stakeholder feedback" },
];

export default function MeetingsPage() {
  return (
    <div className="min-h-screen bg-zinc-950 p-6 text-zinc-100">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-400">AYUREVOLVE OS</p>
            <h1 className="mt-2 text-3xl font-semibold text-white">Meetings</h1>
          </div>
          <Button>Add Meeting</Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <Card>
            <CardHeader>
              <CardTitle>Today&apos;s Meetings</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-semibold text-white">2</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Upcoming</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-semibold text-white">5</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Completed</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-semibold text-white">12</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Notes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-semibold text-white">8</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Meeting Schedule</CardTitle>
            <CalendarDays className="h-5 w-5 text-cyan-400" />
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm text-zinc-300">
                <thead className="bg-white/5 text-xs uppercase tracking-wide text-zinc-400">
                  <tr>
                    <th className="px-5 py-3">Client</th>
                    <th className="px-5 py-3">Date</th>
                    <th className="px-5 py-3">Time</th>
                    <th className="px-5 py-3">Attendees</th>
                    <th className="px-5 py-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {meetings.map((meeting) => (
                    <tr key={`${meeting.client}-${meeting.date}`} className="border-t border-white/10">
                      <td className="px-5 py-4 font-medium text-white">{meeting.client}</td>
                      <td className="px-5 py-4">{meeting.date}</td>
                      <td className="px-5 py-4">{meeting.time}</td>
                      <td className="px-5 py-4">{meeting.attendees}</td>
                      <td className="px-5 py-4">
                        <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-2.5 py-1 text-xs font-medium text-cyan-200">
                          {meeting.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Meeting Notes</CardTitle>
            <Users className="h-5 w-5 text-cyan-400" />
          </CardHeader>
          <CardContent className="space-y-3">
            {meetings.map((meeting) => (
              <div key={`${meeting.client}-${meeting.notes}`} className="rounded-2xl border border-white/10 bg-zinc-950/60 p-3">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  <p className="text-sm font-medium text-white">{meeting.client}</p>
                </div>
                <p className="mt-2 text-sm text-zinc-400">{meeting.notes}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

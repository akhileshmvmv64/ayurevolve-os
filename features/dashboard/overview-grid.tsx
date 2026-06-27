import { ArrowUpRight, CalendarDays, CheckCircle2, Clock3, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const revenueStats = [
  { label: "Today's Revenue", value: "$482K", note: "+18% vs target" },
  { label: "Open Opportunities", value: "24", note: "3 need CEO support" },
  { label: "Tasks", value: "11", note: "2 overdue" },
  { label: "Meetings", value: "6", note: "1 board prep" },
];

const tasks = [
  { title: "Approve expansion proposal", time: "09:30" },
  { title: "Review board narrative", time: "11:00" },
  { title: "Align launch priorities", time: "15:30" },
];

const meetings = [
  { title: "Executive sync", time: "10:00" },
  { title: "Board prep", time: "13:15" },
  { title: "Partner review", time: "16:00" },
];

const activity = [
  "Northwind advanced to proposal stage",
  "Acme shared updated implementation plan",
  "Helio confirmed executive sponsor",
];

const quickActions = ["Approve funding", "Review pipeline", "Send brief", "Open AI assist"];

export function OverviewGrid() {
  return (
    <div className="space-y-4">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm text-cyan-300">CEO Workspace</p>
          <h1 className="text-3xl font-semibold tracking-tight text-white">Leadership overview</h1>
        </div>
        <Button className="gap-2">
          <Sparkles className="h-4 w-4" />
          AI Executive Brief
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {revenueStats.map((item) => (
          <Card key={item.label}>
            <CardHeader>
              <CardTitle>{item.label}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-semibold text-white">{item.value}</p>
              <p className="mt-2 text-sm text-zinc-400">{item.note}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
        <Card>
          <CardHeader className="flex items-center justify-between">
            <CardTitle>Tasks</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-cyan-300" />
          </CardHeader>
          <CardContent className="space-y-3">
            {tasks.map((task) => (
              <div key={task.title} className="flex items-center justify-between rounded-2xl border border-white/10 bg-zinc-950/70 p-3">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-cyan-300" />
                  <p className="text-sm text-zinc-200">{task.title}</p>
                </div>
                <span className="text-sm text-zinc-400">{task.time}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex items-center justify-between">
            <CardTitle>Meetings</CardTitle>
            <CalendarDays className="h-4 w-4 text-cyan-300" />
          </CardHeader>
          <CardContent className="space-y-3">
            {meetings.map((meeting) => (
              <div key={meeting.title} className="rounded-2xl border border-white/10 bg-zinc-950/70 p-3 text-sm text-zinc-300">
                <div className="flex items-center justify-between">
                  <span>{meeting.title}</span>
                  <span className="text-zinc-400">{meeting.time}</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <Card>
          <CardHeader className="flex items-center justify-between">
            <CardTitle>Recent Activity</CardTitle>
            <Clock3 className="h-4 w-4 text-cyan-300" />
          </CardHeader>
          <CardContent className="space-y-3">
            {activity.map((item) => (
              <div key={item} className="flex items-center gap-2 rounded-2xl border border-white/10 bg-zinc-950/70 p-3 text-sm text-zinc-300">
                <ArrowUpRight className="h-4 w-4 text-cyan-300" />
                <span>{item}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>AI Executive Brief</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-zinc-300">
              <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-3">
                Revenue momentum is tracking above plan with healthy enterprise demand.
              </div>
              <div className="rounded-2xl border border-white/10 bg-zinc-950/70 p-3">
                Two opportunities need immediate leadership attention before Friday.
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {quickActions.map((action) => (
                <Button key={action} variant="secondary" size="sm" className="gap-2">
                  <Zap className="h-4 w-4" />
                  {action}
                </Button>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

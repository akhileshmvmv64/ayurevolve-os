import { CalendarDays, Clock3, Cloud, Sparkles, TrendingUp, Users, CheckCircle2, FileText, Bell, BookOpen, ClipboardCheck } from "lucide-react";
import { PageShell } from "@/components/shared/page-shell";
import { SectionCard } from "@/components/dashboard/section-card";
import { StatCard } from "@/components/ui/stat-card";
import { Button } from "@/components/ui/button";

const scheduleItems = [
  { label: "Client briefing", type: "Meeting", time: "09:00" },
  { label: "Board call", type: "Call", time: "11:00" },
  { label: "Regulatory review", type: "Deadline", time: "15:00" },
];

const quickActions = [
  { label: "New Client", icon: Users },
  { label: "New Proposal", icon: FileText },
  { label: "New Project", icon: ClipboardCheck },
  { label: "Schedule Meeting", icon: CalendarDays },
  { label: "Create Task", icon: Bell },
];

const recentFeed = [
  { title: "Meeting Completed", description: "GCC steering call concluded.", time: "10m ago" },
  { title: "Proposal Sent", description: "Sent proposal to Prayojan Health.", time: "1h ago" },
  { title: "Project Updated", description: "Hospital portal sprint advanced.", time: "3h ago" },
  { title: "Task Completed", description: "Compliance review checklist signed off.", time: "5h ago" },
];

function OverviewStat({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-zinc-950/70 p-5">
      <p className="text-sm text-zinc-400">{title}</p>
      <p className="mt-3 text-3xl font-semibold text-white">{value}</p>
    </div>
  );
}

export default function DashboardPage() {
  const date = new Date();
  const formattedDate = date.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });
  const formattedTime = date.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });

  return (
    <PageShell
      title="CEO Command Center"
      description="Gain a high-level view of the day, the pipeline, and the most important client and AI actions."
      breadcrumbs={[{ label: "Home", href: "/dashboard" }, { label: "Command Center" }]}
    >
      <div className="grid gap-4 xl:grid-cols-[1.4fr_0.8fr]">
        <SectionCard title="Good Morning" description="Welcome back. Here's what's on your desk today.">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-4 rounded-3xl border border-white/10 bg-zinc-950/70 p-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-zinc-400">Current Date</p>
                  <p className="mt-2 text-xl font-semibold text-white">{formattedDate}</p>
                </div>
                <div className="rounded-3xl bg-white/5 px-4 py-3 text-sm text-cyan-200">{formattedTime}</div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-zinc-900/80 p-4">
                  <p className="text-sm text-zinc-400">Weather</p>
                  <div className="mt-3 flex items-center gap-3">
                    <Cloud className="h-5 w-5 text-cyan-300" />
                    <p className="text-base font-semibold text-white">Sunny placeholder</p>
                  </div>
                </div>
                <div className="rounded-3xl border border-white/10 bg-zinc-900/80 p-4">
                  <p className="text-sm text-zinc-400">Quote of the Day</p>
                  <p className="mt-3 text-sm leading-6 text-zinc-300">“Strategy is not the consequence of planning, but the opposite: its starting point.”</p>
                </div>
              </div>
            </div>
            <div className="grid gap-4">
              <StatCard title="Proposal Value" value="$4.8M" description="Active pipeline" icon={<TrendingUp className="h-5 w-5" />} />
              <StatCard title="Expected Revenue" value="$3.2M" description="Closing this quarter" icon={<Sparkles className="h-5 w-5" />} />
              <StatCard title="Invoices Pending" value="18" description="Awaiting payment" icon={<BookOpen className="h-5 w-5" />} />
              <StatCard title="Collections" value="$1.1M" description="Today" icon={<CheckCircle2 className="h-5 w-5" />} />
            </div>
          </div>
        </SectionCard>

        <SectionCard title="Today's Schedule" description="Keep the most important engagements in view.">
          <div className="space-y-3">
            {scheduleItems.map((item) => (
              <div key={item.label} className="rounded-3xl border border-white/10 bg-zinc-950/70 p-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm text-zinc-400">{item.type}</p>
                    <p className="mt-2 text-base font-semibold text-white">{item.label}</p>
                  </div>
                  <p className="rounded-full bg-white/5 px-3 py-1 text-sm text-zinc-300">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>

      <div className="grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
        <SectionCard title="Revenue Snapshot" description="Track the top pipeline and collections signals.">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <OverviewStat title="Proposal Value" value="$4.8M" />
            <OverviewStat title="Expected Revenue" value="$3.2M" />
            <OverviewStat title="Invoices Pending" value="18" />
            <OverviewStat title="Collections" value="$1.1M" />
          </div>
        </SectionCard>

        <SectionCard title="Client Activity" description="Monitor the latest client engagement metrics.">
          <div className="grid gap-4 sm:grid-cols-2">
            <OverviewStat title="New Clients" value="6" />
            <OverviewStat title="Follow-ups" value="11" />
            <OverviewStat title="Projects Started" value="4" />
            <OverviewStat title="Projects Delayed" value="2" />
          </div>
        </SectionCard>
      </div>

      <div className="grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
        <SectionCard title="AI Executive Brief" description="Summarize today's priorities and risks.">
          <div className="space-y-4 rounded-3xl border border-white/10 bg-zinc-950/70 p-5">
            <div className="rounded-3xl bg-white/5 p-4">
              <p className="text-sm text-zinc-400">Top priority</p>
              <p className="mt-2 text-white">Drive proposal closure for Prayojan Health and secure board approval for the hospital platform expansion.</p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-zinc-900/80 p-4">
                <p className="text-sm text-zinc-400">Focus</p>
                <p className="mt-2 text-white">Executive alignment on digital transformation.</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-zinc-900/80 p-4">
                <p className="text-sm text-zinc-400">Risk</p>
                <p className="mt-2 text-white">Northwind response time could delay approvals.</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-zinc-900/80 p-4">
                <p className="text-sm text-zinc-400">Opportunity</p>
                <p className="mt-2 text-white">Close 2 new enterprise deals this week.</p>
              </div>
            </div>
          </div>
        </SectionCard>

        <SectionCard title="Quick Actions" description="Launch the most common command actions.">
          <div className="grid gap-3 sm:grid-cols-2">
            {quickActions.map((action) => {
              const Icon = action.icon;
              return (
                <Button key={action.label} variant="secondary" className="justify-start gap-3 px-4 py-4 text-left">
                  <Icon className="h-4 w-4" />
                  {action.label}
                </Button>
              );
            })}
          </div>
        </SectionCard>
      </div>

      <SectionCard title="Recent Activity Feed" description="What the command center has tracked most recently.">
        <div className="space-y-3">
          {recentFeed.map((item) => (
            <div key={item.title} className="rounded-3xl border border-white/10 bg-zinc-950/70 p-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-white">{item.title}</p>
                  <p className="mt-1 text-sm text-zinc-400">{item.description}</p>
                </div>
                <p className="text-sm text-zinc-300">{item.time}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionCard>
    </PageShell>
  );
}

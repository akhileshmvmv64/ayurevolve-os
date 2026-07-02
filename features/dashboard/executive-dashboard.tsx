import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RevenueCards } from "@/components/dashboard/revenue-cards";
import { AiExecutiveBrief } from "@/components/dashboard/ai-executive-brief";
import { CompaniesTable } from "@/components/dashboard/companies-table";
import { RecentActivity } from "@/components/dashboard/recent-activity";
import { UpcomingMeetings } from "@/components/dashboard/upcoming-meetings";

export function ExecutiveDashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm text-cyan-300 font-semibold">CEO WORKSPACE</p>
          <h1 className="text-4xl font-bold tracking-tight text-white">Leadership Overview</h1>
          <p className="mt-2 text-zinc-400">Real-time insights and action items for executive decision-making</p>
        </div>
      </div>

      {/* Revenue Cards Section */}
      <div>
        <h2 className="mb-4 text-lg font-semibold text-white">Key Metrics</h2>
        <RevenueCards />
      </div>

      {/* AI Executive Brief Section */}
      <div>
        <h2 className="mb-4 text-lg font-semibold text-white">AI-Generated Intelligence</h2>
        <AiExecutiveBrief />
      </div>

      {/* Companies Table Section */}
      <div>
        <h2 className="mb-4 text-lg font-semibold text-white">Sales Pipeline</h2>
        <CompaniesTable />
      </div>

      {/* Recent Activity & Upcoming Meetings - Side by side */}
      <div className="grid gap-6 lg:grid-cols-2">
        <div>
          <h2 className="mb-4 text-lg font-semibold text-white">Recent Activity</h2>
          <RecentActivity />
        </div>
        <div>
          <h2 className="mb-4 text-lg font-semibold text-white">Upcoming Meetings</h2>
          <UpcomingMeetings />
        </div>
      </div>

      {/* Footer with Quick Actions */}
      <div className="flex flex-wrap gap-2 rounded-lg border border-white/10 bg-zinc-950/50 p-4">
        <span className="text-sm text-zinc-400">Quick Actions:</span>
        <Button size="sm" variant="outline">
          Schedule Meeting
        </Button>
        <Button size="sm" variant="outline">
          Export Report
        </Button>
        <Button size="sm" variant="outline">
          View Pipeline
        </Button>
        <Button size="sm" variant="outline" className="gap-1">
          <Sparkles className="h-3.5 w-3.5" />
          AI Assistant
        </Button>
      </div>
    </div>
  );
}

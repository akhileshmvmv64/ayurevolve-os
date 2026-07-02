import { Activity, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const activities = [
  {
    company: "Acme Corporation",
    action: "Advanced to Proposal Stage",
    timestamp: "2 hours ago",
    type: "milestone",
  },
  {
    company: "Northwind Industries",
    action: "Shared updated implementation plan",
    timestamp: "4 hours ago",
    type: "update",
  },
  {
    company: "Helio Tech",
    action: "Confirmed executive sponsor",
    timestamp: "6 hours ago",
    type: "milestone",
  },
  {
    company: "Global Solutions",
    action: "Initial discovery call scheduled",
    timestamp: "1 day ago",
    type: "meeting",
  },
];

export function RecentActivity() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <Activity className="h-5 w-5 text-cyan-400" />
          <CardTitle>Recent Activity</CardTitle>
        </div>
        <Button variant="ghost" size="sm">
          View All
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="flex items-start gap-3 rounded-lg border border-white/10 bg-zinc-950/50 p-3 hover:bg-zinc-950/70 transition-colors"
            >
              <div className="mt-1 flex h-2 w-2 flex-shrink-0 rounded-full bg-cyan-400" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white">{activity.company}</p>
                <p className="text-sm text-zinc-400">{activity.action}</p>
                <p className="mt-1 text-xs text-zinc-500">{activity.timestamp}</p>
              </div>
              <ArrowRight className="h-4 w-4 text-zinc-600 flex-shrink-0 mt-0.5" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

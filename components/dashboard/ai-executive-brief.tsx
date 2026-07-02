import { Sparkles, TrendingUp, AlertCircle, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function AiExecutiveBrief() {
  const insights = [
    {
      icon: TrendingUp,
      label: "Revenue Impact",
      value: "+24% Pipeline Growth",
      color: "text-green-400",
    },
    {
      icon: AlertCircle,
      label: "Risk Alert",
      value: "1 deal at risk",
      color: "text-yellow-400",
    },
    {
      icon: CheckCircle2,
      label: "On Track",
      value: "Q2 Target: 94%",
      color: "text-cyan-400",
    },
  ];

  return (
    <Card className="border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-blue-500/5">
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-cyan-400" />
          <CardTitle>AI Executive Brief</CardTitle>
        </div>
        <Button size="sm" className="gap-2">
          <Sparkles className="h-4 w-4" />
          Regenerate
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <p className="text-sm leading-relaxed text-zinc-300">
            <span className="font-semibold text-white">Key Highlight:</span> Your pipeline is
            performing 24% above target this quarter. Acme Corporation is moving to proposal stage,
            and Helio Tech has confirmed executive sponsor engagement. One deal (Northwind) requires
            attention due to delayed response.
          </p>
        </div>

        <div className="grid gap-3 md:grid-cols-3">
          {insights.map((insight) => {
            const Icon = insight.icon;
            return (
              <div key={insight.label} className="rounded-lg border border-white/10 bg-zinc-950/50 p-3">
                <div className="flex items-start gap-2">
                  <Icon className={`h-4 w-4 mt-0.5 ${insight.color}`} />
                  <div>
                    <p className="text-xs text-zinc-400">{insight.label}</p>
                    <p className={`text-sm font-semibold ${insight.color}`}>{insight.value}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex gap-2 pt-2">
          <Button variant="outline" size="sm">
            View Full Report
          </Button>
          <Button variant="outline" size="sm">
            Export
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

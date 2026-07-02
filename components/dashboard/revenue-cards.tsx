import { TrendingUp, Users, Target, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const revenueCards = [
  {
    label: "Today's Revenue",
    value: "$482K",
    trend: "+18% vs target",
    icon: TrendingUp,
    color: "text-green-400",
  },
  {
    label: "Open Opportunities",
    value: "24",
    trend: "3 need CEO support",
    icon: Users,
    color: "text-cyan-400",
  },
  {
    label: "Pipeline Value",
    value: "$1.2M",
    trend: "24% above Q2 target",
    icon: Target,
    color: "text-blue-400",
  },
  {
    label: "Board Meetings",
    value: "6",
    trend: "1 pending review",
    icon: Clock,
    color: "text-yellow-400",
  },
];

export function RevenueCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {revenueCards.map((card) => {
        const Icon = card.icon;
        return (
          <Card key={card.label} className="overflow-hidden">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-zinc-400">
                  {card.label}
                </CardTitle>
                <Icon className={`h-4 w-4 ${card.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div>
                <p className="text-3xl font-bold text-white">{card.value}</p>
                <p className={`mt-2 text-sm font-medium ${card.color}`}>{card.trend}</p>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

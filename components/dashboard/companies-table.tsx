import { TrendingUp, MoreVertical } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const companies = [
  {
    name: "Acme Corporation",
    stage: "Proposal",
    value: "$250K",
    contact: "John Smith",
    health: "Healthy",
  },
  {
    name: "Northwind Industries",
    stage: "Advanced",
    value: "$180K",
    contact: "Sarah Johnson",
    health: "At Risk",
  },
  {
    name: "Helio Tech",
    stage: "Negotiation",
    value: "$320K",
    contact: "Mike Chen",
    health: "Healthy",
  },
  {
    name: "Global Solutions",
    stage: "Discovery",
    value: "$95K",
    contact: "Emily Brown",
    health: "Progressing",
  },
  {
    name: "Future Systems",
    stage: "Proposal",
    value: "$210K",
    contact: "David Wilson",
    health: "Healthy",
  },
];

const getHealthColor = (health: string) => {
  switch (health) {
    case "Healthy":
      return "text-green-400 bg-green-500/10 border-green-500/20";
    case "At Risk":
      return "text-red-400 bg-red-500/10 border-red-500/20";
    case "Progressing":
      return "text-yellow-400 bg-yellow-500/10 border-yellow-500/20";
    default:
      return "text-cyan-400 bg-cyan-500/10 border-cyan-500/20";
  }
};

export function CompaniesTable() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Active Deals</CardTitle>
        <Button variant="ghost" size="sm">
          <MoreVertical className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/50">
          <table className="min-w-full text-left text-sm text-zinc-300">
            <thead className="bg-white/5 text-xs uppercase tracking-wide text-zinc-400">
              <tr>
                <th className="px-4 py-3">Company</th>
                <th className="px-4 py-3">Stage</th>
                <th className="px-4 py-3">Value</th>
                <th className="px-4 py-3">Contact</th>
                <th className="px-4 py-3">Health</th>
              </tr>
            </thead>
            <tbody>
              {companies.map((company) => (
                <tr key={company.name} className="border-t border-white/10 hover:bg-white/5 transition-colors">
                  <td className="px-4 py-3 font-medium text-white">{company.name}</td>
                  <td className="px-4 py-3">{company.stage}</td>
                  <td className="px-4 py-3 font-semibold text-cyan-300">{company.value}</td>
                  <td className="px-4 py-3">{company.contact}</td>
                  <td className="px-4 py-3">
                    <span className={`rounded-full border px-2.5 py-1 text-xs font-medium ${getHealthColor(company.health)}`}>
                      {company.health}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}

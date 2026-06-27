import { PageShell } from "@/components/shared/page-shell";
import { MetricCard } from "@/components/cards/metric-card";
import { InsightChart } from "@/components/charts/insight-chart";

export default function AnalyticsPage() {
  return (
    <PageShell
      title="Analytics & Insights"
      description="Bring operational, financial, and executive signal into one analytical workspace."
      breadcrumbs={[{ label: "Home", href: "/dashboard" }, { label: "Analytics" }]}
    >
      <div className="grid gap-4 md:grid-cols-3">
        <MetricCard label="Data pipelines" value="24" trend="All healthy" />
        <MetricCard label="Board-ready reports" value="9" trend="Published weekly" />
        <MetricCard label="Signal freshness" value="< 5 min" trend="Near real time" />
      </div>
      <div className="mt-6">
        <InsightChart />
      </div>
    </PageShell>
  );
}

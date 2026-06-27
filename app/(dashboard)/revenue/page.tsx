import { PageShell } from "@/components/shared/page-shell";
import { MetricCard } from "@/components/cards/metric-card";
import { InsightChart } from "@/components/charts/insight-chart";

export default function RevenuePage() {
  return (
    <PageShell
      title="Revenue OS"
      description="Track growth opportunities, value realization, and enterprise deal momentum across the AYUREVOLVE network."
      breadcrumbs={[{ label: "Home", href: "/dashboard" }, { label: "Revenue OS" }]}
    >
      <div className="grid gap-4 md:grid-cols-3">
        <MetricCard label="Quarter target" value="$84.2M" trend="On pace" />
        <MetricCard label="Expansion pipeline" value="26" trend="7 high-confidence deals" />
        <MetricCard label="Forecast confidence" value="81%" trend="Stable" />
      </div>
      <div className="mt-6">
        <InsightChart />
      </div>
    </PageShell>
  );
}

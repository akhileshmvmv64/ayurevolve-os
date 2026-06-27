import { PageShell } from "@/components/shared/page-shell";
import { MetricCard } from "@/components/cards/metric-card";
import { InsightChart } from "@/components/charts/insight-chart";

export default function HospitalsPage() {
  return (
    <PageShell
      title="Hospitals & Care Delivery"
      description="Provide visibility into deployment readiness, stakeholder engagement, and service continuity." 
      breadcrumbs={[{ label: "Home", href: "/dashboard" }, { label: "Hospitals" }]}
    >
      <div className="grid gap-4 md:grid-cols-3">
        <MetricCard label="Care sites" value="14" trend="3 upcoming launches" />
        <MetricCard label="Stakeholder meetings" value="27" trend="5 scheduled this week" />
        <MetricCard label="Service health" value="96%" trend="Strong" />
      </div>
      <div className="mt-6">
        <InsightChart />
      </div>
    </PageShell>
  );
}

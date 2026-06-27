import { PageShell } from "@/components/shared/page-shell";
import { MetricCard } from "@/components/cards/metric-card";
import { InsightChart } from "@/components/charts/insight-chart";

export default function KnowledgePage() {
  return (
    <PageShell
      title="Knowledge OS"
      description="Capture institutional knowledge, surface best practices, and connect teams around shared insight."
      breadcrumbs={[{ label: "Home", href: "/dashboard" }, { label: "Knowledge" }]}
    >
      <div className="grid gap-4 md:grid-cols-3">
        <MetricCard label="Knowledge assets" value="431" trend="+24 this month" />
        <MetricCard label="Active contributors" value="58" trend="Rising engagement" />
        <MetricCard label="Search satisfaction" value="89%" trend="High confidence" />
      </div>
      <div className="mt-6">
        <InsightChart />
      </div>
    </PageShell>
  );
}

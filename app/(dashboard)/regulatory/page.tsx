import { PageShell } from "@/components/shared/page-shell";
import { MetricCard } from "@/components/cards/metric-card";
import { OpsTable } from "@/components/tables/ops-table";

const rows = [
  { name: "Compliance review pack", owner: "Asha", status: "In review", due: "Today" },
  { name: "Audit readiness", owner: "Ravi", status: "Planned", due: "Friday" },
];

export default function RegulatoryPage() {
  return (
    <PageShell
      title="Regulatory OS"
      description="Track compliance workstreams, audit readiness, and policy updates with clear ownership and milestones."
      breadcrumbs={[{ label: "Home", href: "/dashboard" }, { label: "Regulatory" }]}
    >
      <div className="grid gap-4 md:grid-cols-3">
        <MetricCard label="Open actions" value="19" trend="4 due today" />
        <MetricCard label="Compliance health" value="92%" trend="Ahead of target" />
        <MetricCard label="Mitigation items" value="7" trend="1 critical" />
      </div>
      <div className="mt-6">
        <OpsTable rows={rows} />
      </div>
    </PageShell>
  );
}

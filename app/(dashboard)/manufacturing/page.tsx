import { PageShell } from "@/components/shared/page-shell";
import { MetricCard } from "@/components/cards/metric-card";
import { OpsTable } from "@/components/tables/ops-table";

const rows = [
  { name: "Plant resilience review", owner: "Lina", status: "On track", due: "Today" },
  { name: "Procurement acceleration", owner: "Mehul", status: "Needs review", due: "Tomorrow" },
];

export default function ManufacturingPage() {
  return (
    <PageShell
      title="Manufacturing OS"
      description="Monitor plant readiness, procurement cadence, and operational resilience in one workspace."
      breadcrumbs={[{ label: "Home", href: "/dashboard" }, { label: "Manufacturing" }]}
    >
      <div className="grid gap-4 md:grid-cols-3">
        <MetricCard label="Critical plant workstreams" value="8" trend="2 at risk" />
        <MetricCard label="Supplier SLA" value="97%" trend="Improved from 92%" />
        <MetricCard label="Readiness score" value="91" trend="Stable" />
      </div>
      <div className="mt-6">
        <OpsTable rows={rows} />
      </div>
    </PageShell>
  );
}

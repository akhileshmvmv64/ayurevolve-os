import { PageShell } from "@/components/shared/page-shell";
import { MetricCard } from "@/components/cards/metric-card";
import { AiCommandForm } from "@/components/forms/ai-command-form";

export default function GccPage() {
  return (
    <PageShell
      title="Global Capability Centre"
      description="Coordinate shared services, operating models, and transformation initiatives across global delivery teams."
      breadcrumbs={[{ label: "Home", href: "/dashboard" }, { label: "GCC" }]}
    >
      <div className="grid gap-4 md:grid-cols-3">
        <MetricCard label="Delivery hubs" value="6" trend="2 new partnerships" />
        <MetricCard label="Shared services" value="14" trend="3 optimized this quarter" />
        <MetricCard label="AI copilots" value="9" trend="Active across functions" />
      </div>
      <div className="mt-6 max-w-xl">
        <AiCommandForm />
      </div>
    </PageShell>
  );
}

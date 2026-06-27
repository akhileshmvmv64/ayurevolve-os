import { PageShell } from "@/components/shared/page-shell";
import { AiCommandForm } from "@/components/forms/ai-command-form";
import { MetricCard } from "@/components/cards/metric-card";

export default function AiPage() {
  return (
    <PageShell
      title="AI Center"
      description="Run copilots, launch automations, and review AI-assisted actions across the enterprise surface."
      breadcrumbs={[{ label: "Home", href: "/dashboard" }, { label: "AI" }]}
    >
      <div className="grid gap-4 md:grid-cols-3">
        <MetricCard label="Active agents" value="11" trend="3 new agents" />
        <MetricCard label="Automations" value="42" trend="Higher adoption" />
        <MetricCard label="Runtime health" value="99.2%" trend="Stable" />
      </div>
      <div className="mt-6 max-w-2xl">
        <AiCommandForm />
      </div>
    </PageShell>
  );
}

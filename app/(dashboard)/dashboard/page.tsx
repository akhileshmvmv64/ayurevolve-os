import { MetricCard } from "@/components/cards/metric-card";
import { InsightChart } from "@/components/charts/insight-chart";
import { AiCommandForm } from "@/components/forms/ai-command-form";
import { OpsTable } from "@/components/tables/ops-table";
import { PageShell } from "@/components/shared/page-shell";
import { getCompanies, getOrganizations, getUserProfile } from "@/lib/supabase/data";

const rows = [
  { name: "GCC readiness sprint", owner: "Nadia", status: "On track", due: "Today" },
  { name: "Hospital rollout", owner: "Arjun", status: "Needs review", due: "Tomorrow" },
  { name: "Regulatory audit pack", owner: "Sara", status: "Complete", due: "Friday" },
];

export default async function DashboardPage() {
  const [organizations, userProfile, companies] = await Promise.all([
    getOrganizations(),
    getUserProfile(),
    getCompanies(),
  ]);

  return (
    <PageShell
      title="Executive Command Center"
      description="Coordinate operations, manufacturing readiness, hospital delivery, and knowledge programs from one AI-first command surface."
      breadcrumbs={[{ label: "Home", href: "/dashboard" }, { label: "Dashboard" }]}
    >
      <div className="grid gap-4 md:grid-cols-3">
        <MetricCard label="Organization" value={organizations[0]?.name ?? "Setup required"} trend="From Supabase" />
        <MetricCard label="Signed in as" value={userProfile?.name ?? "Pending"} trend={userProfile?.role ?? "member"} />
        <MetricCard label="Companies" value={String(companies.length)} trend="Tracked in the database" />
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <InsightChart />
        <AiCommandForm />
      </div>

      <div className="mt-6">
        <h2 className="mb-3 text-lg font-semibold text-white">Priority operations</h2>
        <OpsTable rows={rows} />
      </div>
    </PageShell>
  );
}

import { SectionShell } from "@/components/sections/section-shell";

export default function CompaniesPage() {
  return (
    <SectionShell
      title="Companies"
      description="Review account health, strategic priorities, and expansion signals across your portfolio."
    >
      <div className="space-y-3 text-sm text-zinc-300">
        <div className="rounded-2xl border border-white/10 bg-zinc-950/70 p-3">Northwind Labs · Expansion-ready · 3 open initiatives</div>
        <div className="rounded-2xl border border-white/10 bg-zinc-950/70 p-3">Acme Systems · Strong renewal posture · 2 active projects</div>
        <div className="rounded-2xl border border-white/10 bg-zinc-950/70 p-3">Helio Group · Procurement in motion · Executive sponsor engaged</div>
      </div>
    </SectionShell>
  );
}

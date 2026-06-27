import { SectionShell } from "@/components/sections/section-shell";

export default function OpportunitiesPage() {
  return (
    <SectionShell
      title="Opportunities"
      description="Monitor deal velocity, stage progression, and next actions across your active pipeline."
    >
      <div className="space-y-3 text-sm text-zinc-300">
        <div className="rounded-2xl border border-white/10 bg-zinc-950/70 p-3">Enterprise procurement · 82% confidence · next review in 2 days</div>
        <div className="rounded-2xl border border-white/10 bg-zinc-950/70 p-3">Multi-region rollout · 71% confidence · executive sponsor aligned</div>
        <div className="rounded-2xl border border-white/10 bg-zinc-950/70 p-3">Renewal expansion · 88% confidence · pricing discussion pending</div>
      </div>
    </SectionShell>
  );
}

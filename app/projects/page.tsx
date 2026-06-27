import { SectionShell } from "@/components/sections/section-shell";

export default function ProjectsPage() {
  return (
    <SectionShell
      title="Projects"
      description="Coordinate execution, deadlines, and cross-functional milestones in a single workspace."
    >
      <div className="space-y-3 text-sm text-zinc-300">
        <div className="rounded-2xl border border-white/10 bg-zinc-950/70 p-3">Launch Readiness · 7 of 10 milestones complete</div>
        <div className="rounded-2xl border border-white/10 bg-zinc-950/70 p-3">Customer Onboarding · 2 deliverables due this week</div>
        <div className="rounded-2xl border border-white/10 bg-zinc-950/70 p-3">AI Enablement Rollout · Stakeholder review scheduled</div>
      </div>
    </SectionShell>
  );
}

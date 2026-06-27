import { SectionShell } from "@/components/sections/section-shell";

export default function AICenterPage() {
  return (
    <SectionShell
      title="AI Center"
      description="Coordinate prompts, copilots, and AI-assisted workflows from a central command area."
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-zinc-950/70 p-4">
          <p className="text-sm text-zinc-400">Active copilots</p>
          <p className="mt-2 text-2xl font-semibold text-white">5</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-zinc-950/70 p-4">
          <p className="text-sm text-zinc-400">Automation success rate</p>
          <p className="mt-2 text-2xl font-semibold text-white">87%</p>
        </div>
      </div>
    </SectionShell>
  );
}

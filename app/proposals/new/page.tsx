import { AppShell } from "@/components/layout/app-shell";
import { ProposalBuilder } from "@/components/proposal/proposal-builder";

export default function ProposalNewPage() {
  return (
    <AppShell>
      <div className="space-y-6">
        <div className="rounded-3xl border border-white/10 bg-zinc-950/70 p-6">
          <div className="flex flex-col gap-2">
            <p className="text-sm text-cyan-300">Proposal Builder</p>
            <h1 className="text-3xl font-semibold tracking-tight text-white">Create new client proposal</h1>
            <p className="text-sm text-zinc-400">Build a structured enterprise proposal with service scope, timeline, commercials, and terms.</p>
          </div>
        </div>
        <ProposalBuilder />
      </div>
    </AppShell>
  );
}

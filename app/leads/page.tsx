import { SectionShell } from "@/components/sections/section-shell";

export default function LeadsPage() {
  return (
    <SectionShell
      title="Leads"
      description="Surface qualified demand, route outreach, and prioritize the next best engagement."
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-zinc-950/70 p-4">
          <p className="text-sm text-zinc-400">Qualified leads</p>
          <p className="mt-2 text-2xl font-semibold text-white">18</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-zinc-950/70 p-4">
          <p className="text-sm text-zinc-400">Hot leads</p>
          <p className="mt-2 text-2xl font-semibold text-white">6</p>
        </div>
      </div>
    </SectionShell>
  );
}

import { SectionShell } from "@/components/sections/section-shell";

export default function ContactsPage() {
  return (
    <SectionShell
      title="Contacts"
      description="Manage stakeholder relationships, buying committee roles, and engagement history."
    >
      <div className="space-y-3 text-sm text-zinc-300">
        <div className="rounded-2xl border border-white/10 bg-zinc-950/70 p-3">Mina Patel · VP Operations · Northwind Labs</div>
        <div className="rounded-2xl border border-white/10 bg-zinc-950/70 p-3">Owen Brooks · Procurement Lead · Acme Systems</div>
        <div className="rounded-2xl border border-white/10 bg-zinc-950/70 p-3">Leah Kim · Head of Product · Helio Group</div>
      </div>
    </SectionShell>
  );
}

import { PageShell } from "@/components/shared/page-shell";
import { AiCommandForm } from "@/components/forms/ai-command-form";

export default function SettingsPage() {
  return (
    <PageShell
      title="Settings"
      description="Tune platform preferences, workspace rules, and operating policies for AYUREVOLVE OS."
      breadcrumbs={[{ label: "Home", href: "/dashboard" }, { label: "Settings" }]}
    >
      <div className="max-w-2xl space-y-4">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-zinc-300">
          Configure tenant settings, automation permissions, and AI guardrails from one control surface.
        </div>
        <AiCommandForm />
      </div>
    </PageShell>
  );
}

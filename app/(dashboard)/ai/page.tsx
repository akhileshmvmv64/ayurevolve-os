import { PageShell } from "@/components/shared/page-shell";
import { SectionCard } from "@/components/dashboard/section-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, FileText, CalendarDays, Search, FileArchive, ListChecks, Clock3 } from "lucide-react";

const sections = [
  { title: "Executive Brief", description: "AI summary for the day, risks, and focus areas.", icon: Sparkles },
  { title: "Proposal Assistant", description: "Generate proposal content and structure quickly.", icon: FileText },
  { title: "Meeting Assistant", description: "Prepare agendas, notes, and follow-ups.", icon: CalendarDays },
  { title: "Research Assistant", description: "Surface relevant references and insights.", icon: Search },
  { title: "Document Assistant", description: "Draft and review enterprise documents.", icon: FileArchive },
];

const promptLibrary = [
  "Summarize today's priorities",
  "Draft a client meeting agenda",
  "Generate proposal outline",
  "Review project risks",
];

const promptHistory = [
  { prompt: "Create a follow-up email", result: "Drafted concise executive follow-up." },
  { prompt: "Summarize meeting notes", result: "Generated action items from today's call." },
];

export default function AiPage() {
  return (
    <PageShell
      title="AI Copilot Center"
      description="A command center for enterprise AI assistance, prompt templates, and historical insights."
      breadcrumbs={[{ label: "Home", href: "/dashboard" }, { label: "AI Copilot" }]}
    >
      <div className="grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4">
          <SectionCard title="Executive Brief" description="Your AI summary for the most important outcomes today.">
            <div className="space-y-4 rounded-3xl border border-white/10 bg-zinc-950/70 p-5">
              <p className="text-sm text-zinc-400">Key highlight</p>
              <p className="mt-2 text-white">The enterprise proposal pipeline is strong, but Northwind Health requires a faster decision cadence to meet the quarter close.</p>
              <div className="grid gap-3 md:grid-cols-3">
                <div className="rounded-3xl border border-white/10 bg-zinc-900/80 p-4">
                  <p className="text-sm text-zinc-400">Focus</p>
                  <p className="mt-2 text-sm text-white">Close two enterprise proposals this week.</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-zinc-900/80 p-4">
                  <p className="text-sm text-zinc-400">Risk</p>
                  <p className="mt-2 text-sm text-white">Delayed regulatory sign-off could impact hospital launch.</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-zinc-900/80 p-4">
                  <p className="text-sm text-zinc-400">Opportunity</p>
                  <p className="mt-2 text-sm text-white">High-value follow-up expected from GCC pitch.</p>
                </div>
              </div>
            </div>
          </SectionCard>

          <SectionCard title="Assistant modules" description="Pick the right AI assistant for tasks, proposals, and meetings.">
            <div className="grid gap-3 md:grid-cols-2">
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <div key={section.title} className="rounded-3xl border border-white/10 bg-zinc-950/70 p-4">
                    <div className="flex items-center gap-3">
                      <Icon className="h-5 w-5 text-cyan-300" />
                      <div>
                        <p className="text-sm font-semibold text-white">{section.title}</p>
                        <p className="mt-1 text-sm text-zinc-400">{section.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SectionCard>

          <SectionCard title="Quick Prompt Library" description="Reusable prompts for common enterprise workflows.">
            <div className="space-y-3">
              {promptLibrary.map((prompt) => (
                <button key={prompt} className="w-full rounded-3xl border border-white/10 bg-zinc-950/70 px-4 py-3 text-left text-sm text-zinc-300 transition hover:border-cyan-500/40 hover:bg-white/5">
                  {prompt}
                </button>
              ))}
            </div>
          </SectionCard>
        </div>

        <div className="space-y-4">
          <SectionCard title="Proposal Assistant" description="Draft structured proposal sections quickly.">
            <div className="space-y-4">
              <p className="text-sm text-zinc-300">Use the proposal assistant to generate executive summaries, scope statements, and pricing narratives for client engagements.</p>
              <Button>Open proposal assistant</Button>
            </div>
          </SectionCard>

          <SectionCard title="Meeting Assistant" description="Prepare agendas, notes, and next steps.">
            <div className="space-y-4">
              <p className="text-sm text-zinc-300">Create meeting materials, capture participants, and assign follow-up actions.</p>
              <Button variant="secondary">Open meeting assistant</Button>
            </div>
          </SectionCard>

          <SectionCard title="Research Assistant" description="Collect context, benchmarks, and reference material.">
            <div className="space-y-4">
              <p className="text-sm text-zinc-300">Research market signals, compliance requirements, and industry insights.</p>
              <Button variant="secondary">Open research assistant</Button>
            </div>
          </SectionCard>

          <SectionCard title="Document Assistant" description="Draft and review enterprise documents.">
            <div className="space-y-4">
              <p className="text-sm text-zinc-300">Generate client-ready documents, executive summaries, and policies.</p>
              <Button variant="secondary">Open document assistant</Button>
            </div>
          </SectionCard>

          <SectionCard title="Prompt History" description="Recent prompts and outputs for review.">
            <div className="space-y-3">
              {promptHistory.map((entry) => (
                <div key={entry.prompt} className="rounded-3xl border border-white/10 bg-zinc-950/70 p-4">
                  <p className="text-sm font-semibold text-white">{entry.prompt}</p>
                  <p className="mt-2 text-sm text-zinc-400">{entry.result}</p>
                </div>
              ))}
            </div>
          </SectionCard>

          <SectionCard title="Live Action" description="Build or review a quick AI prompt.">
            <div className="rounded-3xl border border-white/10 bg-zinc-950/70 p-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm text-zinc-400">Quick prompt</p>
                  <p className="mt-2 text-white">Generate an executive summary for today’s command center briefing.</p>
                </div>
                <Clock3 className="h-5 w-5 text-cyan-300" />
              </div>
            </div>
          </SectionCard>
        </div>
      </div>
    </PageShell>
  );
}

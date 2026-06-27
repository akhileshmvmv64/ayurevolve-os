import { BrainCircuit, Sparkles, Zap, TerminalSquare } from "lucide-react";

const recommendations = [
  "Prioritize three opportunities with deal velocity above 80%.",
  "Schedule follow-ups with high-intent leads before noon.",
  "Synthesise the latest customer notes into a board-ready brief.",
];

const commands = ["Summarize pipeline", "Draft follow-up", "Review risks", "Generate forecast"];

export function CopilotPanel() {
  return (
    <aside className="hidden w-[360px] flex-col border-l border-white/10 bg-zinc-950/70 p-6 xl:flex">
      <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/15 to-violet-500/15 p-4">
        <div className="flex items-center gap-2 text-sm font-semibold text-cyan-200">
          <BrainCircuit className="h-4 w-4" />
          Executive Brief
        </div>
        <p className="mt-2 text-sm text-zinc-300">
          AI is monitoring revenue health, surfacing signal, and preparing the next best action.
        </p>
      </div>

      <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-4">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-white">Recommended Actions</p>
          <Sparkles className="h-4 w-4 text-cyan-300" />
        </div>
        <ul className="mt-4 space-y-3 text-sm text-zinc-300">
          {recommendations.map((item) => (
            <li key={item} className="flex gap-2 rounded-2xl border border-white/5 bg-zinc-900/80 p-3">
              <Zap className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 rounded-3xl border border-white/10 bg-zinc-900/80 p-4">
        <p className="text-sm font-semibold text-white">AI Suggestions</p>
        <p className="mt-2 text-sm text-zinc-400">Keep the procurement deal moving and align your team around executive priorities.</p>
      </div>

      <div className="mt-6 rounded-3xl border border-white/10 bg-zinc-900/80 p-4">
        <div className="flex items-center gap-2 text-sm font-semibold text-white">
          <TerminalSquare className="h-4 w-4 text-cyan-300" />
          Quick Commands
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {commands.map((command) => (
            <button key={command} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-200 transition hover:bg-white/10">
              {command}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}

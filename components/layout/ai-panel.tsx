import { Sparkles, BrainCircuit, Zap } from "lucide-react";

const recommendations = [
  "Prioritize 3 opportunities with deal velocity above 80%.",
  "Schedule follow-ups with 5 high-intent leads before noon.",
  "Draft a board-ready summary from the latest project notes.",
];

export function AIPanel() {
  return (
    <aside className="hidden w-80 flex-col border-l border-white/10 bg-zinc-950/70 p-6 xl:flex">
      <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/15 to-violet-500/15 p-4">
        <div className="flex items-center gap-2 text-sm font-semibold text-cyan-200">
          <BrainCircuit className="h-4 w-4" />
          Copilot Live
        </div>
        <p className="mt-2 text-sm text-zinc-300">
          Your AI operating layer is monitoring revenue health and recommending next steps.
        </p>
      </div>

      <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-4">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-white">AI Recommendations</p>
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
        <p className="text-sm font-semibold text-white">Today’s focus</p>
        <p className="mt-2 text-sm text-zinc-400">Close the enterprise procurement deal and align the launch playbook.</p>
      </div>
    </aside>
  );
}

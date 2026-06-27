export function AiCommandForm() {
  return (
    <form className="rounded-2xl border border-white/10 bg-zinc-900/80 p-4">
      <p className="text-sm font-semibold text-white">Prompt the AI copilot</p>
      <p className="mt-2 text-sm text-zinc-400">Ask for a summary, an action plan, or a risk review.</p>
      <textarea
        className="mt-4 min-h-24 w-full rounded-2xl border border-white/10 bg-zinc-950/70 px-3 py-3 text-sm text-zinc-100 outline-none ring-0"
        placeholder="Summarize the latest updates for the leadership board..."
      />
      <button
        type="submit"
        className="mt-4 rounded-full bg-cyan-500 px-4 py-2 text-sm font-medium text-zinc-950 transition hover:bg-cyan-400"
      >
        Run command
      </button>
    </form>
  );
}

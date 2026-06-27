const bars = [38, 52, 64, 78, 74, 92];

export function InsightChart() {
  return (
    <div className="rounded-2xl border border-white/10 bg-zinc-900/80 p-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-white">Signals</p>
          <p className="text-sm text-zinc-400">Momentum across high-value operations.</p>
        </div>
        <div className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300">
          Live
        </div>
      </div>
      <div className="mt-5 flex h-32 items-end gap-2">
        {bars.map((value, index) => (
          <div key={`${value}-${index}`} className="flex-1 rounded-t-xl bg-gradient-to-t from-cyan-500 to-violet-500" style={{ height: `${value}%` }} />
        ))}
      </div>
    </div>
  );
}

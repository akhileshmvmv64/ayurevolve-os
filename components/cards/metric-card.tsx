export function MetricCard({
  label,
  value,
  trend,
  tone = "positive",
}: {
  label: string;
  value: string;
  trend: string;
  tone?: "positive" | "neutral";
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <p className="text-sm text-zinc-400">{label}</p>
      <p className="mt-2 text-2xl font-semibold text-white">{value}</p>
      <p className={`mt-2 text-sm ${tone === "positive" ? "text-cyan-300" : "text-zinc-400"}`}>
        {trend}
      </p>
    </div>
  );
}

type Row = {
  name: string;
  owner: string;
  status: string;
  due: string;
};

export function OpsTable({ rows }: { rows: Row[] }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/80">
      <table className="min-w-full text-left text-sm text-zinc-300">
        <thead className="bg-white/5 text-xs uppercase tracking-wide text-zinc-400">
          <tr>
            <th className="px-4 py-3">Initiative</th>
            <th className="px-4 py-3">Owner</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Due</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.name} className="border-t border-white/10">
              <td className="px-4 py-3 text-white">{row.name}</td>
              <td className="px-4 py-3">{row.owner}</td>
              <td className="px-4 py-3">
                <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-2.5 py-1 text-xs text-cyan-200">
                  {row.status}
                </span>
              </td>
              <td className="px-4 py-3">{row.due}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

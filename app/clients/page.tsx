import { Briefcase, FolderOpen, FileText, DollarSign } from "lucide-react";

const stats = [
  {
    title: "Total Clients",
    value: "128",
    icon: Briefcase,
    accent: "text-cyan-400",
  },
  {
    title: "Active Projects",
    value: "24",
    icon: FolderOpen,
    accent: "text-emerald-400",
  },
  {
    title: "Pending Proposals",
    value: "9",
    icon: FileText,
    accent: "text-amber-400",
  },
  {
    title: "Revenue",
    value: "$1.8M",
    icon: DollarSign,
    accent: "text-fuchsia-400",
  },
];

const clients = [
  {
    client: "Ava Patel",
    company: "Northwind Labs",
    country: "USA",
    service: "Product Strategy",
    status: "Active",
  },
  {
    client: "Marcus Lee",
    company: "Helio Systems",
    country: "Singapore",
    service: "AI Automation",
    status: "Review",
  },
  {
    client: "Sofia Alvarez",
    company: "Crest Digital",
    country: "Spain",
    service: "Data Platform",
    status: "Active",
  },
  {
    client: "Daniel Kim",
    company: "Summit Health",
    country: "Canada",
    service: "Cloud Migration",
    status: "Pending",
  },
  {
    client: "Nadia Rahman",
    company: "Brightlane",
    country: "UK",
    service: "Operations Consulting",
    status: "Active",
  },
];

export default function ClientsPage() {
  return (
    <div className="min-h-screen bg-zinc-950 p-6 text-zinc-100">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-400">
              AYUREVOLVE OS
            </p>
            <h1 className="mt-2 text-3xl font-semibold text-white">Clients</h1>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.title}
                className="rounded-2xl border border-white/10 bg-zinc-900/80 p-5 shadow-lg shadow-black/20"
              >
                <div className="flex items-center justify-between">
                  <p className="text-sm text-zinc-400">{stat.title}</p>
                  <Icon className={`h-5 w-5 ${stat.accent}`} />
                </div>
                <p className="mt-4 text-3xl font-semibold text-white">{stat.value}</p>
              </div>
            );
          })}
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/80 shadow-lg shadow-black/20">
          <div className="border-b border-white/10 px-6 py-4">
            <h2 className="text-lg font-semibold text-white">Client Overview</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm text-zinc-300">
              <thead className="bg-zinc-800/70 text-xs uppercase tracking-wide text-zinc-400">
                <tr>
                  <th className="px-6 py-3">Client</th>
                  <th className="px-6 py-3">Company</th>
                  <th className="px-6 py-3">Country</th>
                  <th className="px-6 py-3">Service</th>
                  <th className="px-6 py-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {clients.map((client) => (
                  <tr key={client.client} className="border-t border-white/10">
                    <td className="px-6 py-4 font-medium text-white">{client.client}</td>
                    <td className="px-6 py-4">{client.company}</td>
                    <td className="px-6 py-4">{client.country}</td>
                    <td className="px-6 py-4">{client.service}</td>
                    <td className="px-6 py-4">
                      <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-2.5 py-1 text-xs font-medium text-cyan-200">
                        {client.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

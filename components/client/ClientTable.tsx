"use client";

import { useMemo, useState, type FormEvent } from "react";
import { ArrowUpDown, Plus, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type ClientStatus = "Active" | "Lead" | "Inactive";
type ClientPriority = "High" | "Medium" | "Low";

interface ClientRecord {
  id: number;
  clientName: string;
  company: string;
  email: string;
  phone: string;
  country: string;
  service: string;
  priority: ClientPriority;
  notes: string;
  status: ClientStatus;
  relationshipManager: string;
  lastMeeting: string;
}

const initialClients: ClientRecord[] = [
  {
    id: 1,
    clientName: "Ava Patel",
    company: "Northwind Labs",
    email: "ava@northwindlabs.com",
    phone: "+1 212 555 0148",
    country: "USA",
    service: "Product Strategy",
    priority: "High",
    notes: "Expansion planning for Q4 launch.",
    status: "Active",
    relationshipManager: "Mina Chen",
    lastMeeting: "2026-06-24",
  },
  {
    id: 2,
    clientName: "Marcus Lee",
    company: "Helio Systems",
    email: "marcus@helio.io",
    phone: "+65 9123 4567",
    country: "Singapore",
    service: "AI Automation",
    priority: "Medium",
    notes: "Reviewing implementation roadmap.",
    status: "Lead",
    relationshipManager: "Jordan Alvarez",
    lastMeeting: "2026-06-22",
  },
  {
    id: 3,
    clientName: "Sofia Alvarez",
    company: "Crest Digital",
    email: "sofia@crestdigital.com",
    phone: "+34 612 345 678",
    country: "Spain",
    service: "Data Platform",
    priority: "High",
    notes: "Needs executive sponsorship for rollout.",
    status: "Active",
    relationshipManager: "Dylan Brooks",
    lastMeeting: "2026-06-20",
  },
  {
    id: 4,
    clientName: "Daniel Kim",
    company: "Summit Health",
    email: "daniel@summithealth.ca",
    phone: "+1 416 555 0143",
    country: "Canada",
    service: "Cloud Migration",
    priority: "Low",
    notes: "Awaiting delivery timeline approval.",
    status: "Inactive",
    relationshipManager: "Riya Shah",
    lastMeeting: "2026-06-18",
  },
  {
    id: 5,
    clientName: "Nadia Rahman",
    company: "Brightlane",
    email: "nadia@brightlane.co",
    phone: "+44 7700 900123",
    country: "UK",
    service: "Operations Consulting",
    priority: "Medium",
    notes: "Working through engagement scope.",
    status: "Lead",
    relationshipManager: "Owen Grant",
    lastMeeting: "2026-06-16",
  },
];

const statusOptions = ["All", "Active", "Lead", "Inactive"] as const;
const sortOptions = [
  { value: "name", label: "Name" },
  { value: "company", label: "Company" },
  { value: "lastMeeting", label: "Last Meeting" },
  { value: "status", label: "Status" },
] as const;

function getStatusBadgeClass(status: ClientStatus) {
  switch (status) {
    case "Active":
      return "border-emerald-500/20 bg-emerald-500/10 text-emerald-300";
    case "Lead":
      return "border-cyan-500/20 bg-cyan-500/10 text-cyan-300";
    case "Inactive":
      return "border-zinc-500/20 bg-zinc-500/10 text-zinc-300";
    default:
      return "border-white/10 bg-white/5 text-zinc-300";
  }
}

function getPriorityBadgeClass(priority: ClientPriority) {
  switch (priority) {
    case "High":
      return "border-rose-500/20 bg-rose-500/10 text-rose-300";
    case "Medium":
      return "border-amber-500/20 bg-amber-500/10 text-amber-300";
    case "Low":
      return "border-slate-500/20 bg-slate-500/10 text-slate-300";
    default:
      return "border-white/10 bg-white/5 text-zinc-300";
  }
}

function Dialog({
  open,
  onOpenChange,
  children,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <div className="w-full max-w-2xl rounded-3xl border border-white/10 bg-zinc-900 p-6 shadow-2xl shadow-black/40">
        <button
          type="button"
          onClick={() => onOpenChange(false)}
          className="ml-auto flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-300 transition hover:bg-white/10 hover:text-white"
        >
          <X className="h-4 w-4" />
        </button>
        {children}
      </div>
    </div>
  );
}

export default function ClientTable() {
  const [clients, setClients] = useState(initialClients);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<(typeof statusOptions)[number]>("All");
  const [sortBy, setSortBy] = useState<(typeof sortOptions)[number]["value"]>("name");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    clientName: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    service: "",
    priority: "Medium" as ClientPriority,
    notes: "",
    status: "Lead" as ClientStatus,
    relationshipManager: "",
  });

  const filteredClients = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    const filtered = clients.filter((client) => {
      const matchesSearch =
        normalizedSearch.length === 0 ||
        [client.clientName, client.company, client.service, client.country]
          .join(" ")
          .toLowerCase()
          .includes(normalizedSearch);

      const matchesStatus = statusFilter === "All" || client.status === statusFilter;

      return matchesSearch && matchesStatus;
    });

    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case "company":
          return a.company.localeCompare(b.company);
        case "lastMeeting":
          return b.lastMeeting.localeCompare(a.lastMeeting);
        case "status":
          return a.status.localeCompare(b.status);
        case "name":
        default:
          return a.clientName.localeCompare(b.clientName);
      }
    });

    return sorted;
  }, [clients, search, statusFilter, sortBy]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newClient: ClientRecord = {
      id: Date.now(),
      clientName: formData.clientName,
      company: formData.company,
      email: formData.email,
      phone: formData.phone,
      country: formData.country,
      service: formData.service,
      priority: formData.priority,
      notes: formData.notes,
      status: formData.status,
      relationshipManager: formData.relationshipManager,
      lastMeeting: new Date().toISOString().slice(0, 10),
    };

    setClients((current) => [newClient, ...current]);
    setDialogOpen(false);
    setFormData({
      clientName: "",
      company: "",
      email: "",
      phone: "",
      country: "",
      service: "",
      priority: "Medium",
      notes: "",
      status: "Lead",
      relationshipManager: "",
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-400">Client Management</p>
          <h2 className="text-2xl font-semibold text-white">Client Overview</h2>
        </div>
        <Button type="button" onClick={() => setDialogOpen(true)} className="gap-2">
          <Plus className="h-4 w-4" />
          Add Client
        </Button>
      </div>

      <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
        <label className="relative flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search by client, company, service or country"
            className="w-full rounded-full border border-white/10 bg-zinc-900/80 py-2.5 pl-10 pr-4 text-sm text-white outline-none ring-0 placeholder:text-zinc-500"
          />
        </label>

        <select
          value={statusFilter}
          onChange={(event) => setStatusFilter(event.target.value as (typeof statusOptions)[number])}
          className="rounded-full border border-white/10 bg-zinc-900/80 px-3 py-2.5 text-sm text-zinc-200 outline-none"
        >
          {statusOptions.map((option) => (
            <option key={option} value={option}>
              {option === "All" ? "All Statuses" : option}
            </option>
          ))}
        </select>

        <label className="flex items-center gap-2 rounded-full border border-white/10 bg-zinc-900/80 px-3 py-2.5 text-sm text-zinc-200">
          <ArrowUpDown className="h-4 w-4 text-zinc-500" />
          <select
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value as (typeof sortOptions)[number]["value"])}
            className="bg-transparent outline-none"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                Sort: {option.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Active Clients</CardTitle>
          <span className="text-sm text-zinc-400">{filteredClients.length} shown</span>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm text-zinc-300">
              <thead className="bg-white/5 text-xs uppercase tracking-wide text-zinc-400">
                <tr>
                  <th className="px-5 py-3">Client Name</th>
                  <th className="px-5 py-3">Company</th>
                  <th className="px-5 py-3">Service</th>
                  <th className="px-5 py-3">Country</th>
                  <th className="px-5 py-3">Relationship Manager</th>
                  <th className="px-5 py-3">Status</th>
                  <th className="px-5 py-3">Last Meeting</th>
                </tr>
              </thead>
              <tbody>
                {filteredClients.map((client) => (
                  <tr key={client.id} className="border-t border-white/10">
                    <td className="px-5 py-4">
                      <div className="font-medium text-white">{client.clientName}</div>
                      <div className="mt-1 text-xs text-zinc-500">{client.email}</div>
                    </td>
                    <td className="px-5 py-4">{client.company}</td>
                    <td className="px-5 py-4">{client.service}</td>
                    <td className="px-5 py-4">{client.country}</td>
                    <td className="px-5 py-4">{client.relationshipManager}</td>
                    <td className="px-5 py-4">
                      <span className={`rounded-full border px-2.5 py-1 text-xs font-medium ${getStatusBadgeClass(client.status)}`}>
                        {client.status}
                      </span>
                    </td>
                    <td className="px-5 py-4">{client.lastMeeting}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-400">New Client</p>
            <h3 className="mt-1 text-xl font-semibold text-white">Add Client</h3>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 grid gap-4 md:grid-cols-2">
          <label className="space-y-2 text-sm text-zinc-300">
            <span>Client Name</span>
            <input
              required
              value={formData.clientName}
              onChange={(event) => setFormData((current) => ({ ...current, clientName: event.target.value }))}
              className="w-full rounded-2xl border border-white/10 bg-zinc-950/70 px-3 py-2.5 text-white outline-none"
            />
          </label>
          <label className="space-y-2 text-sm text-zinc-300">
            <span>Company</span>
            <input
              required
              value={formData.company}
              onChange={(event) => setFormData((current) => ({ ...current, company: event.target.value }))}
              className="w-full rounded-2xl border border-white/10 bg-zinc-950/70 px-3 py-2.5 text-white outline-none"
            />
          </label>
          <label className="space-y-2 text-sm text-zinc-300">
            <span>Email</span>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(event) => setFormData((current) => ({ ...current, email: event.target.value }))}
              className="w-full rounded-2xl border border-white/10 bg-zinc-950/70 px-3 py-2.5 text-white outline-none"
            />
          </label>
          <label className="space-y-2 text-sm text-zinc-300">
            <span>Phone</span>
            <input
              value={formData.phone}
              onChange={(event) => setFormData((current) => ({ ...current, phone: event.target.value }))}
              className="w-full rounded-2xl border border-white/10 bg-zinc-950/70 px-3 py-2.5 text-white outline-none"
            />
          </label>
          <label className="space-y-2 text-sm text-zinc-300">
            <span>Country</span>
            <input
              required
              value={formData.country}
              onChange={(event) => setFormData((current) => ({ ...current, country: event.target.value }))}
              className="w-full rounded-2xl border border-white/10 bg-zinc-950/70 px-3 py-2.5 text-white outline-none"
            />
          </label>
          <label className="space-y-2 text-sm text-zinc-300">
            <span>Service</span>
            <input
              required
              value={formData.service}
              onChange={(event) => setFormData((current) => ({ ...current, service: event.target.value }))}
              className="w-full rounded-2xl border border-white/10 bg-zinc-950/70 px-3 py-2.5 text-white outline-none"
            />
          </label>
          <label className="space-y-2 text-sm text-zinc-300">
            <span>Priority</span>
            <select
              value={formData.priority}
              onChange={(event) => setFormData((current) => ({ ...current, priority: event.target.value as ClientPriority }))}
              className="w-full rounded-2xl border border-white/10 bg-zinc-950/70 px-3 py-2.5 text-white outline-none"
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </label>
          <label className="space-y-2 text-sm text-zinc-300">
            <span>Status</span>
            <select
              value={formData.status}
              onChange={(event) => setFormData((current) => ({ ...current, status: event.target.value as ClientStatus }))}
              className="w-full rounded-2xl border border-white/10 bg-zinc-950/70 px-3 py-2.5 text-white outline-none"
            >
              <option value="Active">Active</option>
              <option value="Lead">Lead</option>
              <option value="Inactive">Inactive</option>
            </select>
          </label>
          <label className="space-y-2 text-sm text-zinc-300 md:col-span-2">
            <span>Relationship Manager</span>
            <input
              value={formData.relationshipManager}
              onChange={(event) => setFormData((current) => ({ ...current, relationshipManager: event.target.value }))}
              className="w-full rounded-2xl border border-white/10 bg-zinc-950/70 px-3 py-2.5 text-white outline-none"
            />
          </label>
          <label className="space-y-2 text-sm text-zinc-300 md:col-span-2">
            <span>Notes</span>
            <textarea
              rows={4}
              value={formData.notes}
              onChange={(event) => setFormData((current) => ({ ...current, notes: event.target.value }))}
              className="w-full rounded-2xl border border-white/10 bg-zinc-950/70 px-3 py-2.5 text-white outline-none"
            />
          </label>

          <div className="flex justify-end gap-3 md:col-span-2">
            <Button type="button" variant="secondary" onClick={() => setDialogOpen(false)}>
              Cancel
            </Button>
            <Button type="submit">Save Client</Button>
          </div>
        </form>
      </Dialog>
    </div>
  );
}

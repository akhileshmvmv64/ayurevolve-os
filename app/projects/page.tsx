import { AlertTriangle, Briefcase, CheckCircle2, DollarSign } from "lucide-react";
import { ProjectStats } from "@/components/project/ProjectStats";
import { ProjectTable } from "@/components/project/ProjectTable";
import { ProjectTimeline } from "@/components/project/ProjectTimeline";
import { mockProjects } from "@/lib/mock-projects";

const stats = [
  { title: "Active Projects", value: "12", icon: Briefcase, accent: "text-cyan-400" },
  { title: "Completed Projects", value: "48", icon: CheckCircle2, accent: "text-emerald-400" },
  { title: "Delayed Projects", value: "3", icon: AlertTriangle, accent: "text-amber-400" },
  { title: "Revenue", value: "$1.2M", icon: DollarSign, accent: "text-fuchsia-400" },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-zinc-950 p-6 text-zinc-100">
      <div className="mx-auto max-w-7xl space-y-6">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-400">AYUREVOLVE OS</p>
          <h1 className="mt-2 text-3xl font-semibold text-white">Projects</h1>
        </div>

        <ProjectStats stats={stats} />
        <ProjectTable projects={mockProjects} />

        <div className="mt-6">
          <h2 className="mb-4 text-xl font-semibold text-white">Project Timeline</h2>
          <ProjectTimeline projects={mockProjects} />
        </div>
      </div>
    </div>
  );
}

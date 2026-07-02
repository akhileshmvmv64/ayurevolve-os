import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { ProjectRecord } from "@/lib/mock-projects";

interface ProjectTableProps {
  projects: ProjectRecord[];
}

function getStatusBadge(status: ProjectRecord["status"]) {
  switch (status) {
    case "Completed":
      return "border-emerald-500/20 bg-emerald-500/10 text-emerald-300";
    case "In Progress":
      return "border-cyan-500/20 bg-cyan-500/10 text-cyan-300";
    case "Review":
      return "border-amber-500/20 bg-amber-500/10 text-amber-300";
    case "On Hold":
      return "border-rose-500/20 bg-rose-500/10 text-rose-300";
    default:
      return "border-zinc-500/20 bg-zinc-500/10 text-zinc-300";
  }
}

export function ProjectTable({ projects }: ProjectTableProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Project Portfolio</CardTitle>
        <span className="text-sm text-zinc-400">{projects.length} projects</span>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm text-zinc-300">
            <thead className="bg-white/5 text-xs uppercase tracking-wide text-zinc-400">
              <tr>
                <th className="px-5 py-3">Project Name</th>
                <th className="px-5 py-3">Client</th>
                <th className="px-5 py-3">Service</th>
                <th className="px-5 py-3">Start Date</th>
                <th className="px-5 py-3">End Date</th>
                <th className="px-5 py-3">Progress %</th>
                <th className="px-5 py-3">Status</th>
                <th className="px-5 py-3">Project Lead</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr key={project.id} className="border-t border-white/10">
                  <td className="px-5 py-4 font-medium text-white">{project.projectName}</td>
                  <td className="px-5 py-4">{project.client}</td>
                  <td className="px-5 py-4">{project.service}</td>
                  <td className="px-5 py-4">{project.startDate}</td>
                  <td className="px-5 py-4">{project.endDate}</td>
                  <td className="px-5 py-4">{project.progress}%</td>
                  <td className="px-5 py-4">
                    <span className={`rounded-full border px-2.5 py-1 text-xs font-medium ${getStatusBadge(project.status)}`}>
                      {project.status}
                    </span>
                  </td>
                  <td className="px-5 py-4">{project.projectLead}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}

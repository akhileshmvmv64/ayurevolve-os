import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { ProjectRecord } from "@/lib/mock-projects";

interface ProjectTimelineProps {
  projects: ProjectRecord[];
}

export function ProjectTimeline({ projects }: ProjectTimelineProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Project Timeline</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {projects.map((project) => (
          <div key={project.id} className="rounded-2xl border border-white/10 bg-zinc-950/60 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-white">{project.projectName}</p>
                <p className="text-sm text-zinc-400">{project.client}</p>
              </div>
              <span className="text-sm text-cyan-300">{project.progress}%</span>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.timeline.map((step) => (
                <span key={step} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-zinc-300">
                  {step}
                </span>
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

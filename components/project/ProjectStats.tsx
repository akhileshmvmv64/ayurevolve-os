import { type LucideIcon } from "lucide-react";

interface ProjectStat {
  title: string;
  value: string;
  icon: LucideIcon;
  accent: string;
}

interface ProjectStatsProps {
  stats: ProjectStat[];
}

export function ProjectStats({ stats }: ProjectStatsProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div key={stat.title} className="rounded-2xl border border-white/10 bg-zinc-900/80 p-5 shadow-lg shadow-black/20">
            <div className="flex items-center justify-between">
              <p className="text-sm text-zinc-400">{stat.title}</p>
              <Icon className={`h-5 w-5 ${stat.accent}`} />
            </div>
            <p className="mt-4 text-3xl font-semibold text-white">{stat.value}</p>
          </div>
        );
      })}
    </div>
  );
}

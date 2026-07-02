export type ProjectStatus = "Planning" | "In Progress" | "Review" | "Completed" | "On Hold";

export interface ProjectRecord {
  id: string;
  projectName: string;
  client: string;
  service: string;
  startDate: string;
  endDate: string;
  progress: number;
  status: ProjectStatus;
  projectLead: string;
  revenue: string;
  timeline: string[];
}

export const mockProjects: ProjectRecord[] = [
  {
    id: "PRJ-001",
    projectName: "AI Operations Suite",
    client: "Northwind Labs",
    service: "AI Automation",
    startDate: "2026-04-01",
    endDate: "2026-08-15",
    progress: 72,
    status: "In Progress",
    projectLead: "Mina Chen",
    revenue: "$240K",
    timeline: ["Discovery", "Scoping", "Implementation", "Review"],
  },
];

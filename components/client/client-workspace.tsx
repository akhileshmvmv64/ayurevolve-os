"use client";

import { useMemo, useState } from "react";
import { Briefcase, CalendarDays, FileText, FolderOpen, ListChecks, MessageCircle, PieChart, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type TabKey = "Overview" | "Projects" | "Proposals" | "Meetings" | "Tasks" | "Documents" | "Timeline";

const clientData = {
  name: "Sohana Gupta",
  company: "Prayojan Health",
  country: "India",
  serviceCategory: "Digital Transformation",
  status: "Active",
};

const revenueSummary = [
  { label: "Annual Value", value: "$3.8M" },
  { label: "Renewal", value: "Q4 2026" },
  { label: "Growth YoY", value: "+28%" },
];

const activeProjects = [
  { title: "Hospital EHR rollout", owner: "Nadia Singh", progress: "72%" },
  { title: "Patient experience portal", owner: "Arjun Patel", progress: "46%" },
];

const pendingTasks = [
  { title: "Review scope extension", due: "Today" },
  { title: "Approve meeting agenda", due: "Tomorrow" },
];

const recentMeetings = [
  { title: "Steering committee", date: "Jun 25, 2026" },
  { title: "Vendor alignment", date: "Jun 22, 2026" },
];

const recentDocuments = [
  { title: "Service agreement draft", type: "PDF" },
  { title: "Sprint plan overview", type: "Deck" },
];

const timelineEvents = [
  { label: "Meeting Conducted", description: "Alignment with executive sponsors.", time: "Jun 25" },
  { label: "Proposal Sent", description: "Digital transformation roadmap agreement.", time: "Jun 18" },
  { label: "Project Started", description: "EHR rollout kickoff ceremony.", time: "Jun 12" },
  { label: "Task Completed", description: "Business requirements sign-off.", time: "Jun 8" },
];

const tabs: TabKey[] = ["Overview", "Projects", "Proposals", "Meetings", "Tasks", "Documents", "Timeline"];

function TabPanel({ title, icon, active }: { title: string; icon: React.ReactNode; active: boolean }) {
  return (
    <div className={`flex items-center gap-2 rounded-2xl px-3 py-2 text-sm transition ${active ? "bg-cyan-500/15 text-cyan-200" : "text-zinc-400 hover:bg-white/5 hover:text-zinc-100"}`}>
      {icon}
      <span>{title}</span>
    </div>
  );
}

export function ClientWorkspace({ clientId }: { clientId: string }) {
  const [activeTab, setActiveTab] = useState<TabKey>("Overview");

  const tabContent = useMemo(() => {
    switch (activeTab) {
      case "Projects":
        return (
          <div className="space-y-4">
            {activeProjects.map((project) => (
              <Card key={project.title} className="overflow-hidden">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-zinc-400">Owner: {project.owner}</p>
                  <p className="mt-2 text-sm text-zinc-300">Progress: {project.progress}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        );
      case "Proposals":
        return (
          <div className="space-y-4">
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle>Latest proposal drafts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-zinc-300">No proposals have been finalized yet. Use the proposal builder to create the next engagement plan.</p>
              </CardContent>
            </Card>
          </div>
        );
      case "Meetings":
        return (
          <div className="space-y-4">
            {recentMeetings.map((meeting) => (
              <Card key={meeting.title} className="overflow-hidden">
                <CardHeader>
                  <CardTitle>{meeting.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-zinc-400">Date: {meeting.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        );
      case "Tasks":
        return (
          <div className="space-y-4">
            {pendingTasks.map((task) => (
              <Card key={task.title} className="overflow-hidden">
                <CardHeader>
                  <CardTitle>{task.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-zinc-300">Due {task.due}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        );
      case "Documents":
        return (
          <div className="space-y-4">
            {recentDocuments.map((document) => (
              <Card key={document.title} className="overflow-hidden">
                <CardHeader>
                  <CardTitle>{document.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-zinc-300">Type: {document.type}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        );
      case "Timeline":
        return (
          <div className="space-y-4">
            {timelineEvents.map((event) => (
              <div key={event.label} className="rounded-3xl border border-white/10 bg-zinc-950/80 p-4">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-sm font-semibold text-white">{event.label}</p>
                  <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-300">{event.time}</span>
                </div>
                <p className="mt-2 text-sm text-zinc-400">{event.description}</p>
              </div>
            ))}
          </div>
        );
      default:
        return (
          <div className="space-y-6">
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle>Client information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2 rounded-3xl border border-white/10 bg-zinc-950/70 p-4">
                    <p className="text-sm text-zinc-400">Name</p>
                    <p className="text-lg font-semibold text-white">{clientData.name}</p>
                  </div>
                  <div className="space-y-2 rounded-3xl border border-white/10 bg-zinc-950/70 p-4">
                    <p className="text-sm text-zinc-400">Company</p>
                    <p className="text-lg font-semibold text-white">{clientData.company}</p>
                  </div>
                  <div className="space-y-2 rounded-3xl border border-white/10 bg-zinc-950/70 p-4">
                    <p className="text-sm text-zinc-400">Country</p>
                    <p className="text-lg font-semibold text-white">{clientData.country}</p>
                  </div>
                  <div className="space-y-2 rounded-3xl border border-white/10 bg-zinc-950/70 p-4">
                    <p className="text-sm text-zinc-400">Service</p>
                    <p className="text-lg font-semibold text-white">{clientData.serviceCategory}</p>
                  </div>
                  <div className="space-y-2 rounded-3xl border border-white/10 bg-zinc-950/70 p-4">
                    <p className="text-sm text-zinc-400">Status</p>
                    <p className="text-lg font-semibold text-white">{clientData.status}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-4 xl:grid-cols-[1.4fr_0.8fr]">
              <Card className="overflow-hidden">
                <CardHeader>
                  <CardTitle>Revenue summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-3">
                    {revenueSummary.map((item) => (
                      <div key={item.label} className="rounded-3xl border border-white/10 bg-zinc-950/70 p-4">
                        <p className="text-sm text-zinc-400">{item.label}</p>
                        <p className="mt-2 text-2xl font-semibold text-white">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <CardHeader>
                  <CardTitle>Active projects</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {activeProjects.map((project) => (
                      <div key={project.title} className="rounded-3xl border border-white/10 bg-zinc-950/70 p-4">
                        <p className="text-sm font-semibold text-white">{project.title}</p>
                        <p className="mt-1 text-sm text-zinc-400">Owner: {project.owner}</p>
                        <p className="mt-2 text-sm text-cyan-300">{project.progress} complete</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
              <Card className="overflow-hidden">
                <CardHeader>
                  <CardTitle>Pending tasks</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {pendingTasks.map((task) => (
                      <div key={task.title} className="rounded-3xl border border-white/10 bg-zinc-950/70 p-4">
                        <p className="text-sm font-semibold text-white">{task.title}</p>
                        <p className="mt-1 text-sm text-zinc-400">Due {task.due}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <div className="space-y-4">
                <Card className="overflow-hidden">
                  <CardHeader>
                    <CardTitle>Recent meetings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {recentMeetings.map((meeting) => (
                        <div key={meeting.title} className="rounded-3xl border border-white/10 bg-zinc-950/70 p-4">
                          <p className="text-sm font-semibold text-white">{meeting.title}</p>
                          <p className="mt-1 text-sm text-zinc-400">{meeting.date}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                <Card className="overflow-hidden">
                  <CardHeader>
                    <CardTitle>Recent documents</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {recentDocuments.map((document) => (
                        <div key={document.title} className="rounded-3xl border border-white/10 bg-zinc-950/70 p-4">
                          <p className="text-sm font-semibold text-white">{document.title}</p>
                          <p className="mt-1 text-sm text-zinc-400">Type: {document.type}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        );
    }
  }, [activeTab]);

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-white/10 bg-zinc-950/70 p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm text-cyan-300">Client Workspace</p>
            <h2 className="text-3xl font-semibold tracking-tight text-white">{clientData.name}</h2>
            <p className="mt-2 text-sm text-zinc-400">{clientData.company} · {clientData.serviceCategory}</p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-white/5 px-3 py-1 text-sm text-zinc-300">{clientData.country}</span>
            <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-sm text-cyan-200">{clientData.status}</span>
          </div>
        </div>
      </div>

      <div className="grid gap-3 overflow-x-auto md:grid-cols-[minmax(0,1fr)] lg:grid-cols-[repeat(7,minmax(0,1fr))]">
        {tabs.map((tab) => {
          const icon = {
            Overview: <PieChart className="h-4 w-4" />, 
            Projects: <FolderOpen className="h-4 w-4" />, 
            Proposals: <FileText className="h-4 w-4" />, 
            Meetings: <CalendarDays className="h-4 w-4" />, 
            Tasks: <ListChecks className="h-4 w-4" />, 
            Documents: <Briefcase className="h-4 w-4" />, 
            Timeline: <Users className="h-4 w-4" />,
          }[tab];

          return (
            <button key={tab} type="button" onClick={() => setActiveTab(tab)} className="w-full">
              <TabPanel title={tab} icon={icon} active={activeTab === tab} />
            </button>
          );
        })}
      </div>

      <div>{tabContent}</div>
    </div>
  );
}

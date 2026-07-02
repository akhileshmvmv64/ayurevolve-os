import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const todayTasks = [
  { title: "Finalize launch brief", priority: "High", due: "Today", assignee: "Mina Chen" },
  { title: "Review proposal draft", priority: "Medium", due: "Today", assignee: "Dylan Brooks" },
];

const upcomingTasks = [
  { title: "Client onboarding call", priority: "High", due: "Tomorrow", assignee: "Riya Shah" },
  { title: "Migration checklist", priority: "Low", due: "Tomorrow", assignee: "Owen Grant" },
];

const overdueTasks = [
  { title: "Stakeholder feedback summary", priority: "High", due: "Overdue", assignee: "Jordan Alvarez" },
];

const completedTasks = [
  { title: "Security review", priority: "Medium", due: "Completed", assignee: "Mina Chen" },
];

function TaskColumn({ title, tasks }: { title: string; tasks: typeof todayTasks }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {tasks.map((task) => (
          <div key={task.title} className="rounded-2xl border border-white/10 bg-zinc-950/60 p-3">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-white">{task.title}</p>
              <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-2 py-1 text-[11px] text-cyan-300">
                {task.priority}
              </span>
            </div>
            <div className="mt-2 text-xs text-zinc-400">
              <p>Due: {task.due}</p>
              <p>Assigned to: {task.assignee}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export default function TasksPage() {
  return (
    <div className="min-h-screen bg-zinc-950 p-6 text-zinc-100">
      <div className="mx-auto max-w-7xl space-y-6">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-400">AYUREVOLVE OS</p>
          <h1 className="mt-2 text-3xl font-semibold text-white">Tasks</h1>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <Card>
            <CardHeader>
              <CardTitle>Today&apos;s Tasks</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-semibold text-white">4</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Upcoming</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-semibold text-white">6</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Overdue</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-semibold text-white">2</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Completed</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-semibold text-white">9</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-4">
          <TaskColumn title="Today" tasks={todayTasks} />
          <TaskColumn title="Upcoming" tasks={upcomingTasks} />
          <TaskColumn title="Overdue" tasks={overdueTasks} />
          <TaskColumn title="Completed" tasks={completedTasks} />
        </div>
      </div>
    </div>
  );
}

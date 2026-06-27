import { CopilotPanel } from "@/components/ai/copilot-panel";
import { Sidebar } from "@/components/navigation/sidebar";
import { TopNav } from "@/components/navigation/top-nav";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),_transparent_30%),linear-gradient(135deg,_#09090b_0%,_#111827_100%)] text-zinc-100">
      <Sidebar />
      <TopNav />

      <div className="flex min-h-screen xl:pl-[280px]">
        <main className="flex-1 px-6 pb-8 pt-24 lg:px-8">{children}</main>
        <CopilotPanel />
      </div>
    </div>
  );
}

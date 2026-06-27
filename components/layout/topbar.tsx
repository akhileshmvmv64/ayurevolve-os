import { Bell, Search, Plus, ChevronDown } from "lucide-react";

export function Topbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-20 flex h-16 items-center justify-between border-b border-white/10 bg-zinc-950/80 px-6 backdrop-blur xl:left-72">
      <div className="flex items-center gap-3">
        <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-zinc-300">
          Revenue OS • Q3 Pulse
        </div>
        <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-zinc-400 md:flex">
          <Search className="h-4 w-4" />
          <span>Search companies, deals, notes</span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button className="rounded-full border border-white/10 bg-white/5 p-2 text-zinc-300 transition hover:bg-white/10">
          <Bell className="h-4 w-4" />
        </button>
        <button className="flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-2 text-sm font-medium text-cyan-200 transition hover:bg-cyan-500/20">
          <Plus className="h-4 w-4" />
          New action
        </button>
        <button className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-200">
          Maya Chen
          <ChevronDown className="h-4 w-4" />
        </button>
      </div>
    </header>
  );
}

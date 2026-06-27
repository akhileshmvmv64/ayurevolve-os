import { Bell, Search, Plus, ChevronDown } from "lucide-react";
import { LogoutButton } from "@/components/auth/logout-button";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";

export function TopNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-20 flex h-16 items-center justify-between border-b border-white/10 bg-zinc-950/80 px-6 backdrop-blur xl:left-[280px] xl:right-[360px]">
      <div className="flex items-center gap-3">
        <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-zinc-300">
          Revenue OS · Q3 Pulse
        </div>
        <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-zinc-400 md:flex">
          <Search className="h-4 w-4" />
          <span>Search companies, deals, notes</span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Button variant="ghost" size="sm" className="p-2">
          <Bell className="h-4 w-4" />
        </Button>
        <Button size="sm" className="gap-2">
          <Plus className="h-4 w-4" />
          New action
        </Button>
        <button className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-200">
          <Avatar initials="MC" className="h-7 w-7" />
          Maya Chen
          <ChevronDown className="h-4 w-4" />
        </button>
        <LogoutButton />
      </div>
    </header>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles, LayoutGrid, DollarSign, Building2, Users, BadgeCheck, BriefcaseBusiness, FolderKanban, BookOpenText, Bot, BarChart3, Settings } from "lucide-react";

const navItems = [
  { label: "Dashboard", href: "/", icon: LayoutGrid },
  { label: "Revenue OS", href: "/revenue", icon: DollarSign },
  { label: "Companies", href: "/companies", icon: Building2 },
  { label: "Contacts", href: "/contacts", icon: Users },
  { label: "Leads", href: "/leads", icon: BadgeCheck },
  { label: "Opportunities", href: "/opportunities", icon: BriefcaseBusiness },
  { label: "Projects", href: "/projects", icon: FolderKanban },
  { label: "Knowledge", href: "/knowledge", icon: BookOpenText },
  { label: "AI Center", href: "/ai-center", icon: Bot },
  { label: "Analytics", href: "/analytics", icon: BarChart3 },
  { label: "Settings", href: "/settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 z-30 hidden w-72 flex-col border-r border-white/10 bg-zinc-950/95 px-5 py-6 backdrop-blur xl:flex">
      <div className="mb-8 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 via-sky-500 to-violet-500 shadow-lg shadow-cyan-500/20">
          <Sparkles className="h-5 w-5 text-white" />
        </div>
        <div>
          <p className="text-sm font-semibold text-white">AYUREVOLVE OS</p>
          <p className="text-xs text-zinc-500">Enterprise Control Center</p>
        </div>
      </div>

      <nav className="space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm transition ${
                active
                  ? "bg-white/10 text-white shadow-sm"
                  : "text-zinc-400 hover:bg-white/5 hover:text-zinc-100"
              }`}
            >
              <Icon className="h-4 w-4" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto rounded-3xl border border-cyan-500/20 bg-cyan-500/10 p-4">
        <p className="text-sm font-semibold text-white">AI operations ready</p>
        <p className="mt-1 text-sm text-zinc-400">Run forecasting, enable copilots, and streamline execution from a single workspace.</p>
      </div>
    </aside>
  );
}

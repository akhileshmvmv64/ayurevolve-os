"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import {
  Sparkles,
  LayoutGrid,
  DollarSign,
  Building2,
  Factory,
  Hospital,
  ShieldCheck,
  BookOpenText,
  Bot,
  BarChart3,
  Settings,
  PanelsLeftBottom,
  X,
} from "lucide-react";
import { SidebarItem } from "@/components/ui/sidebar-item";
import { SearchBox } from "@/components/ui/search-box";

const navItems = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutGrid },
  { label: "Revenue", href: "/revenue", icon: DollarSign },
  { label: "GCC", href: "/gcc", icon: Building2 },
  { label: "Manufacturing", href: "/manufacturing", icon: Factory },
  { label: "Hospitals", href: "/hospitals", icon: Hospital },
  { label: "Regulatory", href: "/regulatory", icon: ShieldCheck },
  { label: "Knowledge", href: "/knowledge", icon: BookOpenText },
  { label: "AI", href: "/ai", icon: Bot },
  { label: "Analytics", href: "/analytics", icon: BarChart3 },
  { label: "Settings", href: "/settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1280px)");
    const handleChange = () => {
      if (!media.matches) {
        setCollapsed(false);
      }
    };

    handleChange();
    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  const filteredItems = useMemo(() => {
    const value = query.trim().toLowerCase();
    if (!value) return navItems;
    return navItems.filter((item) => item.label.toLowerCase().includes(value));
  }, [query]);

  const sidebarContent = (
    <>
      <div className="mb-6 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 via-sky-500 to-violet-500 shadow-lg shadow-cyan-500/20">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          {!collapsed ? (
            <div>
              <p className="text-sm font-semibold text-white">AYUREVOLVE OS</p>
              <p className="text-xs text-zinc-500">Enterprise Command Center</p>
            </div>
          ) : null}
        </div>

        <button
          type="button"
          onClick={() => setCollapsed((value) => !value)}
          className="rounded-full border border-white/10 bg-white/5 p-2 text-zinc-300 transition hover:bg-white/10"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <PanelsLeftBottom className="h-4 w-4" />
        </button>
      </div>

      <div className={collapsed ? "mb-4" : "mb-4"}>
        {!collapsed ? <SearchBox value={query} onChange={setQuery} placeholder="Search" /> : null}
      </div>

      <nav className="space-y-1">
        {filteredItems.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;

          return (
            <SidebarItem
              key={item.label}
              label={item.label}
              href={item.href}
              icon={<Icon className="h-4 w-4" />}
              active={active}
              collapsed={collapsed}
            />
          );
        })}
      </nav>

      {!collapsed ? (
        <div className="mt-auto rounded-3xl border border-cyan-500/20 bg-cyan-500/10 p-4">
          <p className="text-sm font-semibold text-white">AI operations ready</p>
          <p className="mt-1 text-sm text-zinc-400">Align delivery, knowledge, and governance from one command surface.</p>
        </div>
      ) : null}
    </>
  );

  return (
    <>
      <button
        type="button"
        onClick={() => setMobileOpen(true)}
        className="fixed left-4 top-4 z-40 rounded-full border border-white/10 bg-zinc-950/90 p-2 text-zinc-200 xl:hidden"
        aria-label="Open navigation"
      >
        <PanelsLeftBottom className="h-4 w-4" />
      </button>

      <aside className="fixed inset-y-0 left-0 z-30 hidden w-[280px] flex-col border-r border-white/10 bg-zinc-950/95 px-5 py-6 backdrop-blur xl:flex">
        {sidebarContent}
      </aside>

      <div className={`fixed inset-0 z-40 bg-black/70 xl:hidden ${mobileOpen ? "block" : "hidden"}`} onClick={() => setMobileOpen(false)} />
      <aside className={`fixed inset-y-0 left-0 z-50 flex w-[280px] flex-col border-r border-white/10 bg-zinc-950/95 px-5 py-6 backdrop-blur xl:hidden ${mobileOpen ? "translate-x-0" : "-translate-x-full"} transition-transform`}>
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 via-sky-500 to-violet-500 shadow-lg shadow-cyan-500/20">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">AYUREVOLVE OS</p>
              <p className="text-xs text-zinc-500">Global Capability Centre</p>
            </div>
          </div>
          <button type="button" onClick={() => setMobileOpen(false)} className="rounded-full border border-white/10 bg-white/5 p-2 text-zinc-300">
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="mb-4">
          <SearchBox value={query} onChange={setQuery} placeholder="Search" />
        </div>
        <nav className="space-y-1">
          {filteredItems.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;
            return (
              <div key={item.label} onClick={() => setMobileOpen(false)}>
                <SidebarItem label={item.label} href={item.href} icon={<Icon className="h-4 w-4" />} active={active} />
              </div>
            );
          })}
        </nav>
      </aside>
    </>
  );
}

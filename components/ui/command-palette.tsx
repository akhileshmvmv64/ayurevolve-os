"use client";

import { useEffect, useMemo, useState } from "react";
import { Command, Search } from "lucide-react";
import { Modal } from "@/components/ui/modal";

const commands = [
  { label: "Open dashboard", path: "/dashboard" },
  { label: "Open revenue", path: "/revenue" },
  { label: "Open projects", path: "/projects" },
  { label: "Open settings", path: "/settings" },
];

export function CommandPalette({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");

  const filteredCommands = useMemo(() => {
    const value = query.trim().toLowerCase();
    if (!value) return commands;
    return commands.filter((command) => command.label.toLowerCase().includes(value));
  }, [query]);

  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  return (
    <Modal open={open} onClose={onClose} title="Command Palette">
      <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2">
        <Search className="h-4 w-4 text-zinc-400" />
        <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search commands" className="w-full bg-transparent text-sm text-zinc-200 outline-none placeholder:text-zinc-500" />
      </div>
      <div className="mt-4 space-y-2">
        {filteredCommands.map((command) => (
          <a key={command.label} href={command.path} className="flex items-center gap-2 rounded-2xl border border-white/10 bg-zinc-900/80 px-3 py-2 text-sm text-zinc-300">
            <Command className="h-4 w-4 text-cyan-300" />
            <span>{command.label}</span>
          </a>
        ))}
      </div>
    </Modal>
  );
}

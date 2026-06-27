import Link from "next/link";
import { ReactNode } from "react";

export function SidebarItem({
  label,
  href,
  icon,
  active,
  collapsed = false,
}: {
  label: string;
  href: string;
  icon: ReactNode;
  active?: boolean;
  collapsed?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm transition ${
        active ? "bg-white/10 text-white shadow-sm" : "text-zinc-400 hover:bg-white/5 hover:text-zinc-100"
      } ${collapsed ? "justify-center" : ""}`}
    >
      <span className="shrink-0">{icon}</span>
      {!collapsed ? <span>{label}</span> : null}
    </Link>
  );
}

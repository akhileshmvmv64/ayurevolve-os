import { ReactNode } from "react";

export function Avatar({
  label,
  initials,
  className = "",
}: {
  label?: string;
  initials?: string;
  className?: string;
}) {
  return (
    <div className={`flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/10 text-sm font-semibold text-white ${className}`}>
      {initials ?? label?.slice(0, 2).toUpperCase()}
    </div>
  );
}

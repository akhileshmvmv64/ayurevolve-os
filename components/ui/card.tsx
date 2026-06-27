import * as React from "react";

export function Card({ className = "", children }: React.PropsWithChildren<{ className?: string }>) {
  return <div className={`rounded-3xl border border-white/10 bg-zinc-900/80 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] ${className}`}>{children}</div>;
}

export function CardHeader({ className = "", children }: React.PropsWithChildren<{ className?: string }>) {
  return <div className={`p-5 ${className}`}>{children}</div>;
}

export function CardTitle({ className = "", children }: React.PropsWithChildren<{ className?: string }>) {
  return <h3 className={`text-sm font-semibold text-white ${className}`}>{children}</h3>;
}

export function CardContent({ className = "", children }: React.PropsWithChildren<{ className?: string }>) {
  return <div className={`px-5 pb-5 ${className}`}>{children}</div>;
}

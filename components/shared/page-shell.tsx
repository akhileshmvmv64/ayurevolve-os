import Link from "next/link";
import type { ReactNode } from "react";

type Breadcrumb = {
  label: string;
  href?: string;
};

export function PageShell({
  title,
  description,
  breadcrumbs = [],
  action,
  children,
}: {
  title: string;
  description?: string;
  breadcrumbs?: Breadcrumb[];
  action?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="max-w-3xl">
          {breadcrumbs.length > 0 ? (
            <nav className="mb-3 flex flex-wrap items-center gap-2 text-sm text-zinc-500">
              {breadcrumbs.map((crumb, index) => {
                const isLast = index === breadcrumbs.length - 1;
                return (
                  <span key={`${crumb.label}-${index}`} className="flex items-center gap-2">
                    {crumb.href && !isLast ? (
                      <Link href={crumb.href} className="transition hover:text-cyan-300">
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className={isLast ? "text-zinc-300" : "text-zinc-500"}>{crumb.label}</span>
                    )}
                    {!isLast ? <span>/</span> : null}
                  </span>
                );
              })}
            </nav>
          ) : null}
          <h1 className="text-3xl font-semibold tracking-tight text-white">{title}</h1>
          {description ? <p className="mt-2 text-sm text-zinc-400">{description}</p> : null}
        </div>
        {action ? <div>{action}</div> : null}
      </div>

      <div className="rounded-3xl border border-white/10 bg-zinc-950/70 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
        {children}
      </div>
    </div>
  );
}

import { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function StatCard({ title, value, description, icon }: { title: string; value: string; description?: string; icon?: ReactNode }) {
  return (
    <Card>
      <CardHeader className="flex items-start justify-between">
        <CardTitle>{title}</CardTitle>
        {icon ? <div className="text-cyan-300">{icon}</div> : null}
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-semibold text-white">{value}</p>
        {description ? <p className="mt-2 text-sm text-zinc-400">{description}</p> : null}
      </CardContent>
    </Card>
  );
}

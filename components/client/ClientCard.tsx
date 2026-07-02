import { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ClientCard({
  title,
  value,
  icon,
}: {
  title: string;
  value: string;
  icon?: ReactNode;
}) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="flex items-center justify-between gap-3">
        <CardTitle>{title}</CardTitle>
        {icon ? <div className="text-cyan-300">{icon}</div> : null}
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-semibold text-white">{value}</p>
      </CardContent>
    </Card>
  );
}

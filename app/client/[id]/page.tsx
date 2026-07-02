import { AppShell } from "@/components/layout/app-shell";
import { ClientWorkspace } from "@/components/client/client-workspace";

export default function ClientPage({ params }: { params: { id: string } }) {
  return (
    <AppShell>
      <ClientWorkspace clientId={params.id} />
    </AppShell>
  );
}

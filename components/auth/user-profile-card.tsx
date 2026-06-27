"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

export function UserProfileCard() {
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [org, setOrg] = useState("AYUREVOLVE Labs");

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data }) => setUserEmail(data.user?.email ?? null));
  }, []);

  return (
    <div className="rounded-3xl border border-white/10 bg-zinc-900/80 p-4">
      <p className="text-sm text-zinc-400">Signed in as</p>
      <p className="mt-1 text-sm font-semibold text-white">{userEmail ?? "Authenticated user"}</p>
      <p className="mt-2 text-sm text-cyan-300">Organization · {org}</p>
    </div>
  );
}

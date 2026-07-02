"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getSessionStatus } from "@/lib/auth/session";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const session = getSessionStatus();
    
    if (session.authenticated) {
      router.push("/dashboard");
    } else {
      router.push("/login");
    }
  }, [router]);

  // Loading state while redirecting
  return (
    <div className="h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">AYUREVOLVE OS</h1>
        <p className="text-slate-300 mb-8">Loading your workspace...</p>
        <div className="flex gap-2 justify-center">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-100"></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-200"></div>
        </div>
      </div>
    </div>
  );
}

import { AuthForm } from "@/components/auth/auth-form";

export function AuthPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.22),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#09090b_100%)] px-6 py-10 text-zinc-100">
      <div className="w-full max-w-5xl overflow-hidden rounded-[32px] border border-white/10 bg-zinc-950/70 shadow-2xl shadow-black/40 lg:grid lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col justify-between bg-zinc-900/60 p-8">
          <div>
            <p className="text-sm text-cyan-300">Enterprise authentication</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white">Welcome back to AYUREVOLVE OS.</h1>
            <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-400">Secure access to your operating workspace with protected routes, persistent sessions, and organization-aware context.</p>
          </div>
          <div className="mt-8 rounded-3xl border border-cyan-500/20 bg-cyan-500/10 p-4 text-sm text-zinc-300">
            <p className="font-semibold text-white">Protected experience</p>
            <p className="mt-2">Your sign-in state is validated server-side to keep the workspace secure and consistent.</p>
          </div>
        </div>
        <div className="flex items-center justify-center p-8">
          <AuthForm />
        </div>
      </div>
    </main>
  );
}

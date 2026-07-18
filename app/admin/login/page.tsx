"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { LockKeyhole, LogIn, Mail, ShieldCheck } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function AdminLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setErrorMessage("");

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setErrorMessage(error.message);
        return;
      }

      if (!data.user) {
        setErrorMessage("Login failed. Please try again.");
        return;
      }

      if (data.user.email !== "visionxdigital29@gmail.com") {
        await supabase.auth.signOut();

        setErrorMessage("You are not authorized to access the admin panel.");
        return;
      }

      router.push("/admin/enquiries");
      router.refresh();
    } catch (error) {
      console.error(error);

      setErrorMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#030712] px-5 py-12 text-white">
      <div className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-blue-600/20 blur-[140px]" />

      <div className="absolute -right-40 bottom-0 h-[460px] w-[460px] rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(59,130,246,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,.12)_1px,transparent_1px)] [background-size:60px_60px]" />

      <div className="relative w-full max-w-md">
        <div className="rounded-3xl border border-white/10 bg-white/[0.045] p-7 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-9">
          <div className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600/15 text-blue-400">
              <ShieldCheck size={32} />
            </div>

            <h1 className="mt-6 text-3xl font-black">
              Web<span className="text-blue-500">Craft</span> Admin
            </h1>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              Sign in to manage website enquiries.
            </p>
          </div>

          {errorMessage && (
            <div className="mt-6 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm leading-6 text-red-300">
              {errorMessage}
            </div>
          )}

          <form onSubmit={handleLogin} className="mt-8 space-y-5">
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-slate-300">
                Admin Email
              </span>

              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                />

                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                  autoComplete="email"
                  placeholder="Enter admin email"
                  className="w-full rounded-xl border border-white/10 bg-[#07101e] py-4 pl-12 pr-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500/60 focus:ring-4 focus:ring-blue-500/10"
                />
              </div>
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-slate-300">
                Password
              </span>

              <div className="relative">
                <LockKeyhole
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                />

                <input
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  required
                  autoComplete="current-password"
                  placeholder="Enter password"
                  className="w-full rounded-xl border border-white/10 bg-[#07101e] py-4 pl-12 pr-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500/60 focus:ring-4 focus:ring-blue-500/10"
                />
              </div>
            </label>

            <button
              type="submit"
              disabled={loading}
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-4 font-bold shadow-xl shadow-blue-600/25 transition hover:-translate-y-1 hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
            >
              {loading ? "Signing In..." : "Sign In"}

              {!loading && (
                <LogIn
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              )}
            </button>
          </form>

          <div className="mt-7 rounded-2xl border border-blue-500/20 bg-blue-500/[0.06] p-4 text-center text-xs leading-6 text-slate-400">
            Authorized admin access only.
          </div>
        </div>
      </div>
    </main>
  );
}
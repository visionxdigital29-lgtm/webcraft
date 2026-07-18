"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  BarChart3,
  Clock3,
  ExternalLink,
  LayoutDashboard,
  LogOut,
  Mail,
  MessageCircle,
  Phone,
  RefreshCw,
  ShieldCheck,
  Users,
} from "lucide-react";
import { supabase } from "@/lib/supabase";

type Enquiry = {
  id: string;
  name: string;
  email: string | null;
  phone: string | null;
  website_type: string | null;
  budget: string | null;
  preferred_contact: string | null;
  project_details: string | null;
  created_at: string;
};

export default function AdminDashboardPage() {
  const router = useRouter();

  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function loadDashboard(showRefresh = false) {
    if (showRefresh) {
      setRefreshing(true);
    } else {
      setLoading(true);
    }

    setErrorMessage("");

    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.replace("/admin/login");
        return;
      }

      if (user.email !== "visionxdigital29@gmail.com") {
        await supabase.auth.signOut();
        router.replace("/admin/login");
        return;
      }

      const { data, error } = await supabase
        .from("contact_enquiries")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Dashboard load error:", error);
        setErrorMessage("Dashboard data load nahi ho paya.");
        return;
      }

      setEnquiries((data ?? []) as Enquiry[]);
    } catch (error) {
      console.error("Unexpected dashboard error:", error);
      setErrorMessage("Something went wrong.");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }

  useEffect(() => {
    void loadDashboard();
  }, []);

  async function handleLogout() {
    await supabase.auth.signOut();
    router.replace("/admin/login");
  }

  const stats = useMemo(() => {
    const today = new Date();

    const todayCount = enquiries.filter((item) => {
      const created = new Date(item.created_at);

      return (
        created.getDate() === today.getDate() &&
        created.getMonth() === today.getMonth() &&
        created.getFullYear() === today.getFullYear()
      );
    }).length;

    const whatsappCount = enquiries.filter(
      (item) =>
        item.preferred_contact?.toLowerCase() === "whatsapp"
    ).length;

    return {
      total: enquiries.length,
      today: todayCount,
      whatsapp: whatsappCount,
      recent: Math.min(enquiries.length, 5),
    };
  }, [enquiries]);

  const recentEnquiries = enquiries.slice(0, 5);

  return (
    <main className="min-h-screen bg-[#030712] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050914]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-4 lg:px-8 xl:flex-row xl:items-center xl:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600/15 text-blue-400">
              <ShieldCheck size={24} />
            </div>

            <div>
              <h1 className="text-xl font-black">
                Web<span className="text-blue-500">Craft</span> Admin
              </h1>

              <p className="text-xs text-slate-500">
                Main Dashboard
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => router.push("/admin/dashboard")}
              className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-bold shadow-lg shadow-blue-600/20 transition hover:bg-blue-500"
            >
              <LayoutDashboard size={17} />
              Dashboard
            </button>

            <button
              type="button"
              onClick={() => router.push("/admin/enquiries")}
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-bold text-slate-300 transition hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-blue-400"
            >
              <Users size={17} />
              Enquiries
            </button>

            <button
              type="button"
              onClick={() => router.push("/")}
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-bold text-slate-300 transition hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-blue-400"
            >
              <ExternalLink size={17} />
              Website Home
            </button>

            <button
              type="button"
              onClick={() => void loadDashboard(true)}
              disabled={refreshing}
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-bold text-slate-300 transition hover:border-blue-500/30 hover:text-blue-400 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <RefreshCw
                size={17}
                className={refreshing ? "animate-spin" : ""}
              />
              {refreshing ? "Refreshing..." : "Refresh"}
            </button>

            <button
              type="button"
              onClick={() => void handleLogout()}
              className="flex items-center gap-2 rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-3 text-sm font-bold text-red-300 transition hover:bg-red-500/15"
            >
              <LogOut size={17} />
              Logout
            </button>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-blue-600/10 blur-[140px]" />

        <div className="absolute -right-40 top-40 h-[460px] w-[460px] rounded-full bg-cyan-500/10 blur-[150px]" />

        <div className="relative mx-auto max-w-7xl px-5 py-10 lg:px-8">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
                Admin Dashboard
              </p>

              <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                Welcome Back
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
                Website leads aur recent customer enquiries ko yahan se manage
                karein.
              </p>
            </div>

            <button
              type="button"
              onClick={() => router.push("/admin/enquiries")}
              className="group flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold shadow-lg shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-500"
            >
              View All Enquiries

              <ArrowRight
                size={17}
                className="transition group-hover:translate-x-1"
              />
            </button>
          </div>

          {errorMessage && (
            <div className="mt-7 rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-300">
              {errorMessage}
            </div>
          )}

          {loading ? (
            <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.035] p-10 text-center text-slate-400">
              Loading dashboard...
            </div>
          ) : (
            <>
              <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
                    <Users size={24} />
                  </div>

                  <p className="mt-5 text-sm text-slate-500">
                    Total Leads
                  </p>

                  <p className="mt-2 text-3xl font-black">
                    {stats.total}
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">
                    <Clock3 size={24} />
                  </div>

                  <p className="mt-5 text-sm text-slate-500">
                    Today Leads
                  </p>

                  <p className="mt-2 text-3xl font-black">
                    {stats.today}
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-500/10 text-green-400">
                    <MessageCircle size={24} />
                  </div>

                  <p className="mt-5 text-sm text-slate-500">
                    WhatsApp Preferred
                  </p>

                  <p className="mt-2 text-3xl font-black">
                    {stats.whatsapp}
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-400">
                    <BarChart3 size={24} />
                  </div>

                  <p className="mt-5 text-sm text-slate-500">
                    Recent Leads
                  </p>

                  <p className="mt-2 text-3xl font-black">
                    {stats.recent}
                  </p>
                </div>
              </div>

              <div className="mt-12">
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
                      Recent Activity
                    </p>

                    <h3 className="mt-2 text-2xl font-black">
                      Latest Enquiries
                    </h3>
                  </div>

                  <button
                    type="button"
                    onClick={() => router.push("/admin/enquiries")}
                    className="text-left text-sm font-bold text-blue-400 transition hover:text-blue-300"
                  >
                    View all enquiries →
                  </button>
                </div>

                {recentEnquiries.length === 0 ? (
                  <div className="mt-6 rounded-3xl border border-white/10 bg-white/[0.035] p-10 text-center text-slate-400">
                    No enquiries yet.
                  </div>
                ) : (
                  <div className="mt-6 grid gap-5">
                    {recentEnquiries.map((enquiry) => (
                      <article
                        key={enquiry.id}
                        className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
                      >
                        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-start">
                          <div>
                            <div className="flex flex-wrap items-center gap-3">
                              <h4 className="text-xl font-black">
                                {enquiry.name}
                              </h4>

                              {enquiry.website_type && (
                                <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-bold text-blue-300">
                                  {enquiry.website_type}
                                </span>
                              )}
                            </div>

                            <p className="mt-2 text-xs text-slate-500">
                              {new Date(enquiry.created_at).toLocaleString(
                                "en-IN"
                              )}
                            </p>
                          </div>

                          <div className="flex flex-wrap gap-2">
                            {enquiry.phone && (
                              <>
                                <a
                                  href={`tel:${enquiry.phone}`}
                                  className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-slate-300 transition hover:border-blue-500/30 hover:text-blue-400"
                                >
                                  <Phone size={16} />
                                  Call
                                </a>

                                <a
                                  href={`https://wa.me/${enquiry.phone.replace(
                                    /\D/g,
                                    ""
                                  )}`}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="flex items-center gap-2 rounded-xl border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm font-semibold text-green-300 transition hover:bg-green-500/20"
                                >
                                  <MessageCircle size={16} />
                                  WhatsApp
                                </a>
                              </>
                            )}

                            {enquiry.email && (
                              <a
                                href={`mailto:${enquiry.email}`}
                                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-slate-300 transition hover:border-blue-500/30 hover:text-blue-400"
                              >
                                <Mail size={16} />
                                Email
                              </a>
                            )}
                          </div>
                        </div>

                        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                          <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
                            <p className="text-xs uppercase tracking-wider text-slate-500">
                              Phone
                            </p>

                            <p className="mt-2 font-semibold">
                              {enquiry.phone || "—"}
                            </p>
                          </div>

                          <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
                            <p className="text-xs uppercase tracking-wider text-slate-500">
                              Budget
                            </p>

                            <p className="mt-2 font-semibold">
                              {enquiry.budget || "—"}
                            </p>
                          </div>

                          <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
                            <p className="text-xs uppercase tracking-wider text-slate-500">
                              Preferred Contact
                            </p>

                            <p className="mt-2 font-semibold">
                              {enquiry.preferred_contact || "—"}
                            </p>
                          </div>

                          <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
                            <p className="text-xs uppercase tracking-wider text-slate-500">
                              Email
                            </p>

                            <p className="mt-2 break-all font-semibold">
                              {enquiry.email || "—"}
                            </p>
                          </div>
                        </div>

                        <div className="mt-5 rounded-2xl border border-white/10 bg-black/10 p-5">
                          <p className="text-xs uppercase tracking-wider text-slate-500">
                            Project Details
                          </p>

                          <p className="mt-3 whitespace-pre-wrap text-sm leading-7 text-slate-300">
                            {enquiry.project_details ||
                              "No project details provided."}
                          </p>
                        </div>
                      </article>
                    ))}
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  );
}
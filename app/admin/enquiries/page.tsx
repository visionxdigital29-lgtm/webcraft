"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ExternalLink,
  LayoutDashboard,
  LogOut,
  Mail,
  MessageCircle,
  Phone,
  RefreshCw,
  Search,
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
  status: string;
};

export default function AdminEnquiriesPage() {
  const router = useRouter();

  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [search, setSearch] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function loadEnquiries(showRefresh = false) {
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

      if (user.email !== "business@mywebcraft.in") {
        await supabase.auth.signOut();
        router.replace("/admin/login");
        return;
      }
      const { data, error } = await supabase
        .from("contact_enquiries")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Enquiries load error:", error);
        setErrorMessage("Enquiries load nahi ho payi.");
        return;
      }

      setEnquiries((data ?? []) as Enquiry[]);
    } catch (error) {
      console.error("Unexpected enquiries error:", error);
      setErrorMessage("Something went wrong.");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }

  useEffect(() => {
    void loadEnquiries();
  }, []);

  async function handleLogout() {
    await supabase.auth.signOut();
    router.replace("/admin/login");
  }

  async function handleStatusChange(
    enquiryId: string,
    newStatus: string
  ) {
    const previousEnquiries = enquiries;

    setEnquiries((current) =>
      current.map((item) =>
        item.id === enquiryId
          ? { ...item, status: newStatus }
          : item
      )
    );
console.log("Updating enquiry ID:", enquiryId, "New status:", newStatus);
const { data, error } = await supabase
  .from("contact_enquiries")
  .update({ status: newStatus })
  .eq("id", enquiryId)
  .select();

console.log("Status update result:", data);

    if (error) {
      console.error("Status update error:", error);

      setEnquiries(previousEnquiries);

      setErrorMessage(
        "Status update nahi ho paya. Please dobara try karein."
      );
    }
  }

  const filteredEnquiries = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return enquiries;
    }

    return enquiries.filter((item) =>
      [
        item.name,
        item.email,
        item.phone,
        item.website_type,
        item.budget,
        item.preferred_contact,
        item.project_details,
        item.status,
      ]
        .filter(Boolean)
        .some((value) =>
          value!.toLowerCase().includes(query)
        )
    );
  }, [enquiries, search]);

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
                Customer Enquiries
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() =>
                router.push("/admin/dashboard")
              }
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-bold text-slate-300 transition hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-blue-400"
            >
              <LayoutDashboard size={17} />
              Dashboard
            </button>

            <button
              type="button"
              onClick={() =>
                router.push("/admin/enquiries")
              }
              className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-bold shadow-lg shadow-blue-600/20 transition hover:bg-blue-500"
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
              onClick={() =>
                void loadEnquiries(true)
              }
              disabled={refreshing}
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-bold text-slate-300 transition hover:border-blue-500/30 hover:text-blue-400 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <RefreshCw
                size={17}
                className={
                  refreshing ? "animate-spin" : ""
                }
              />

              {refreshing
                ? "Refreshing..."
                : "Refresh"}
            </button>

            <button
              type="button"
              onClick={() =>
                void handleLogout()
              }
              className="flex items-center gap-2 rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-3 text-sm font-bold text-red-300 transition hover:bg-red-500/15"
            >
              <LogOut size={17} />
              Logout
            </button>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-blue-600/10 blur-[140px]" />

        <div className="absolute -right-40 top-48 h-[460px] w-[460px] rounded-full bg-cyan-500/10 blur-[150px]" />

        <div className="relative mx-auto max-w-7xl px-5 py-10 lg:px-8">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
                Enquiries Dashboard
              </p>

              <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                Website Leads
              </h2>

              <p className="mt-3 text-sm text-slate-400">
                Total enquiries: {enquiries.length}
              </p>
            </div>

            <div className="relative w-full lg:w-auto">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
              />

              <input
                type="text"
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
                placeholder="Search enquiries..."
                className="w-full min-w-[280px] rounded-xl border border-white/10 bg-[#07101e] py-3 pl-11 pr-4 text-sm outline-none transition placeholder:text-slate-600 focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10"
              />
            </div>
          </div>

          {errorMessage && (
            <div className="mt-7 rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-300">
              {errorMessage}
            </div>
          )}

          {loading ? (
            <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.035] p-10 text-center text-slate-400">
              Loading enquiries...
            </div>
          ) : filteredEnquiries.length === 0 ? (
            <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.035] p-10 text-center text-slate-400">
              No enquiries found.
            </div>
          ) : (
            <div className="mt-10 grid gap-6">
              {filteredEnquiries.map((enquiry) => (
                <article
                  key={enquiry.id}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl sm:p-7"
                >
                  <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-start">
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-2xl font-black">
                          {enquiry.name}
                        </h3>

                        {enquiry.website_type && (
                          <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-bold text-blue-300">
                            {enquiry.website_type}
                          </span>
                        )}

                        <select
                          value={enquiry.status || "New"}
                          onChange={(event) =>
                            void handleStatusChange(
                              enquiry.id,
                              event.target.value
                            )
                          }
                          className={`rounded-full border px-3 py-1 text-xs font-bold outline-none ${
                            enquiry.status ===
                            "Completed"
                              ? "border-green-500/30 bg-green-500/10 text-green-300"
                              : enquiry.status ===
                                  "In Progress"
                                ? "border-yellow-500/30 bg-yellow-500/10 text-yellow-300"
                                : enquiry.status ===
                                    "Contacted"
                                  ? "border-purple-500/30 bg-purple-500/10 text-purple-300"
                                  : "border-blue-500/30 bg-blue-500/10 text-blue-300"
                          }`}
                        >
                          <option value="New">
                            New
                          </option>

                          <option value="Contacted">
                            Contacted
                          </option>

                          <option value="In Progress">
                            In Progress
                          </option>

                          <option value="Completed">
                            Completed
                          </option>
                        </select>
                      </div>

                      <p className="mt-2 text-xs text-slate-500">
                        {new Date(
                          enquiry.created_at
                        ).toLocaleString("en-IN")}
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

                  <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
      </section>
    </main>
  );
}
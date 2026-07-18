"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Building2,
  Code2,
  ExternalLink,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Utensils,
} from "lucide-react";

const projects = [
  {
    category: "Business Website",
    title: "Nova Corporate",
    description:
      "A premium corporate website designed to build trust and generate business enquiries.",
    icon: Building2,
    gradient: "from-blue-600/30 via-blue-500/10 to-transparent",
    accent: "text-blue-400",
    tags: ["Next.js", "Responsive", "SEO"],
  },
  {
    category: "E-Commerce",
    title: "Urban Store",
    description:
      "A modern online shopping experience with clean product pages and conversion-focused design.",
    icon: ShoppingBag,
    gradient: "from-violet-600/30 via-purple-500/10 to-transparent",
    accent: "text-violet-400",
    tags: ["Online Store", "Payments", "Mobile"],
  },
  {
    category: "Restaurant Website",
    title: "Royal Bites",
    description:
      "An attractive restaurant website with menu presentation, booking and WhatsApp ordering.",
    icon: Utensils,
    gradient: "from-orange-600/30 via-amber-500/10 to-transparent",
    accent: "text-orange-400",
    tags: ["Food Menu", "Booking", "WhatsApp"],
  },
  {
    category: "Web Application",
    title: "TaskFlow Dashboard",
    description:
      "A professional SaaS dashboard with analytics, team management and a modern interface.",
    icon: Code2,
    gradient: "from-cyan-600/30 via-cyan-500/10 to-transparent",
    accent: "text-cyan-400",
    tags: ["Dashboard", "SaaS", "Analytics"],
  },
  {
    category: "Mobile Experience",
    title: "FitTrack App",
    description:
      "A polished fitness application interface designed for a smooth and engaging user experience.",
    icon: Smartphone,
    gradient: "from-emerald-600/30 via-green-500/10 to-transparent",
    accent: "text-emerald-400",
    tags: ["App UI", "Fitness", "UX Design"],
  },
  {
    category: "Landing Page",
    title: "LaunchPro",
    description:
      "A high-converting product landing page created for marketing campaigns and lead generation.",
    icon: Sparkles,
    gradient: "from-pink-600/30 via-rose-500/10 to-transparent",
    accent: "text-pink-400",
    tags: ["Marketing", "Leads", "Conversion"],
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-[#050914] py-28 text-white"
    >
      <div className="absolute -left-40 top-32 h-[420px] w-[420px] rounded-full bg-blue-600/10 blur-[140px]" />
      <div className="absolute -right-40 bottom-10 h-[460px] w-[460px] rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end"
        >
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-500">
              Our Portfolio
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
              Selected Projects We&apos;ve{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Crafted
              </span>
            </h2>

            <p className="mt-6 max-w-2xl leading-8 text-slate-400">
              A showcase of modern websites and digital experiences built for
              businesses, shops, startups and personal brands.
            </p>
          </div>

          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-4 font-bold transition hover:border-blue-500/40 hover:bg-blue-500/10"
          >
            Start Your Project
            <ArrowUpRight
              size={18}
              className="transition group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>
        </motion.div>

        <div className="mt-16 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -10 }}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] transition duration-300 hover:border-blue-500/35 hover:bg-white/[0.055]"
              >
                <div
                  className={`relative flex h-64 items-center justify-center overflow-hidden bg-gradient-to-br ${project.gradient}`}
                >
                  <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.1)_1px,transparent_1px)] [background-size:36px_36px]" />

                  <div className="absolute left-8 top-8 flex gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.07, rotate: 2 }}
                    className="relative flex h-36 w-[78%] items-center justify-center rounded-2xl border border-white/15 bg-[#081120]/90 shadow-2xl backdrop-blur-xl"
                  >
                    <div className="absolute left-0 top-0 h-7 w-full border-b border-white/10" />

                    <div
                      className={`rounded-2xl border border-white/10 bg-white/[0.05] p-6 ${project.accent}`}
                    >
                      <Icon size={48} />
                    </div>

                    <div className="absolute bottom-4 left-5 right-5 grid grid-cols-3 gap-2">
                      <div className="h-2 rounded-full bg-white/10" />
                      <div className="h-2 rounded-full bg-white/10" />
                      <div className="h-2 rounded-full bg-white/10" />
                    </div>
                  </motion.div>

                  <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/25 opacity-0 backdrop-blur-xl transition group-hover:opacity-100">
                    <ExternalLink size={18} />
                  </div>
                </div>

                <div className="p-7">
                  <p className={`text-xs font-bold uppercase tracking-widest ${project.accent}`}>
                    {project.category}
                  </p>

                  <h3 className="mt-3 text-2xl font-black">
                    {project.title}
                  </h3>

                  <p className="mt-4 min-h-[72px] text-sm leading-6 text-slate-400">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-6">
                    <a
                      href="#contact"
                      className="font-bold text-blue-400 transition hover:text-blue-300"
                    >
                      View Project
                    </a>

                    <ArrowUpRight
                      size={19}
                      className="text-slate-500 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-400"
                    />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-3xl border border-blue-500/20 bg-gradient-to-r from-blue-600/15 via-blue-500/5 to-cyan-500/10 p-8 text-center sm:p-12"
        >
          <h3 className="text-3xl font-black sm:text-4xl">
            Have a Project in Mind?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-400">
            Let&apos;s transform your idea into a professional website that
            attracts customers and grows your business.
          </p>

          <a
            href="#contact"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-bold shadow-xl shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-500"
          >
            Discuss Your Project
            <ArrowUpRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
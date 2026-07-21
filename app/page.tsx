"use client";

import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Portfolio from "@/components/Portfolio";
import WhyChoose from "@/components/WhyChoose";
import Services from "@/components/Services";
import Navbar from "@/components/Navbar";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Code2,
  Headphones,
  Laptop,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  Zap,
} from "lucide-react";

const stats = [
  { value: "100+", label: "Happy Clients" },
  { value: "150+", label: "Projects Completed" },
  { value: "5+", label: "Years Experience" },
];

const features = [
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Projects delivered on time.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Reliable",
    description: "Clean and secure development.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Help whenever you need it.",
  },
  {
    icon: BadgeCheck,
    title: "Affordable Pricing",
    description: "Premium work at fair prices.",
  },
];

export default function Home() {
  return (
    <main
      id="home"
      className="min-h-screen overflow-hidden bg-[#030712] text-white"
    >
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative flex min-h-screen items-center overflow-hidden pt-36 lg:pt-40">
        {/* Original Blue Background */}
        <div className="absolute inset-0">
          <div className="absolute -left-40 top-32 h-[440px] w-[440px] rounded-full bg-blue-600/20 blur-[140px]" />

          <div className="absolute -right-40 top-20 h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-[160px]" />

          <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(59,130,246,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.12)_1px,transparent_1px)] [background-size:58px_58px]" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,#030712_85%)]" />
        </div>

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 px-5 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          {/* LEFT SIDE - ORIGINAL DESIGN */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
          >
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300 shadow-lg shadow-blue-950/30">
              <Rocket size={16} />
              Premium Website Development Agency
            </div>

            <h1 className="max-w-3xl text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl xl:text-7xl">
              We Build Modern Websites That{" "}
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Grow Your Business
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
              We design fast, secure and high-converting websites that help
              businesses attract customers, build trust and grow online.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="group flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-bold shadow-xl shadow-blue-600/25 transition duration-300 hover:-translate-y-1 hover:bg-blue-500"
              >
                Get a Free Quote

                <ArrowRight
                  size={19}
                  className="transition group-hover:translate-x-1"
                />
              </a>

              <a
                href="#portfolio"
                className="flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-7 py-4 font-bold transition duration-300 hover:-translate-y-1 hover:bg-white/[0.08]"
              >
                View Our Work
                <BriefcaseBusiness size={18} />
              </a>
            </div>

            <div className="mt-11 grid max-w-xl grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={
                    index === 0 ? "" : "border-l border-white/10 pl-5"
                  }
                >
                  <div className="text-2xl font-black sm:text-3xl">
                    {stat.value}
                  </div>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE - PREMIUM WEBCRAFT WEBSITE MOCKUP */}
          <motion.div
            initial={{ opacity: 0, x: 55 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, delay: 0.15 }}
            className="relative"
          >
            <div className="absolute inset-10 rounded-full bg-blue-500/25 blur-[110px]" />

            <div className="relative mx-auto max-w-[650px]">
              {/* MAIN DESKTOP BROWSER */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative rounded-[30px] border border-white/15 bg-gradient-to-br from-[#172033] to-[#050912] p-3 shadow-2xl shadow-blue-950/60"
              >
                <div className="overflow-hidden rounded-[22px] border border-white/10 bg-[#06101f]">
                  {/* Browser Top Bar */}
                  <div className="flex h-11 items-center gap-2 border-b border-white/10 px-4">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                    <span className="h-3 w-3 rounded-full bg-green-400" />

                    <div className="ml-auto hidden rounded-md border border-white/5 bg-white/[0.03] px-8 py-1 text-[8px] text-slate-500 sm:block">
                      www.mywebcraft.in
                    </div>
                  </div>

                  {/* WEBSITE PREVIEW */}
                  <div className="relative overflow-hidden bg-[#030712] p-5 sm:p-7">
                    {/* Mini Glow */}
                    <div className="absolute -right-20 top-20 h-48 w-48 rounded-full bg-blue-600/15 blur-[70px]" />

                    {/* Mini Navbar */}
                    <div className="relative flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600 text-[11px] font-black text-white">
                          W
                        </div>

                        <div className="text-sm font-black">
                          Web<span className="text-blue-500">Craft</span>
                        </div>
                      </div>

                      <div className="hidden items-center gap-4 text-[8px] text-slate-400 sm:flex">
                        <span>Home</span>
                        <span>Services</span>
                        <span>Portfolio</span>
                        <span>Packages</span>
                        <span>Contact</span>
                      </div>

                      <div className="hidden rounded-md bg-blue-600 px-3 py-1.5 text-[8px] font-bold sm:block">
                        Get a Quote
                      </div>
                    </div>

                    {/* Mini Hero */}
                    <div className="relative mt-12 grid items-center gap-7 sm:grid-cols-[1fr_0.9fr]">
                      {/* Text Side */}
                      <div>
                        <div className="mb-3 inline-flex items-center gap-1 text-[8px] font-semibold text-blue-400">
                          <Sparkles size={10} />
                          Premium Website Development
                        </div>

                        <p className="text-2xl font-black leading-[1.05] sm:text-[28px]">
                          We Build Modern
                          <br />
                          Websites That
                          <br />

                          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                            Grow Your Business
                          </span>
                        </p>

                        <p className="mt-4 max-w-[220px] text-[9px] leading-4 text-slate-500">
                          Fast, secure and high-converting websites designed to
                          turn visitors into customers.
                        </p>

                        <div className="mt-5 flex gap-2">
                          <button className="rounded-md bg-blue-600 px-3 py-2 text-[8px] font-bold">
                            Get a Free Quote
                          </button>

                          <button className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-[8px] font-bold">
                            Our Work
                          </button>
                        </div>
                      </div>

                      {/* Visual Side */}
                      <div className="relative flex h-48 items-center justify-center">
                        <div className="absolute h-40 w-40 rounded-full bg-blue-500/15 blur-3xl" />

                        {/* Main UI Card */}
                        <motion.div
                          animate={{ y: [0, -8, 0] }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="relative w-[185px] rounded-xl border border-blue-500/30 bg-[#081426] p-3 shadow-[0_0_45px_rgba(59,130,246,.2)]"
                        >
                          <div className="flex items-center gap-1 border-b border-white/10 pb-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
                            <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
                            <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                          </div>

                          <div className="mt-3 grid grid-cols-[42px_1fr] gap-3">
                            <div className="space-y-2">
                              <div className="h-2 rounded bg-blue-500/40" />
                              <div className="h-2 rounded bg-white/10" />
                              <div className="h-2 rounded bg-white/10" />
                              <div className="h-2 rounded bg-white/10" />
                              <div className="h-2 rounded bg-white/10" />
                            </div>

                            <div className="rounded-lg border border-blue-500/20 bg-gradient-to-br from-blue-500/15 to-cyan-500/5 p-3">
                              <div className="flex h-16 items-center justify-center">
                                <Code2
                                  size={38}
                                  className="text-blue-400"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="mt-3 grid grid-cols-3 gap-2">
                            <div className="h-6 rounded bg-blue-500/10" />
                            <div className="h-6 rounded bg-blue-500/10" />
                            <div className="h-6 rounded bg-blue-500/10" />
                          </div>
                        </motion.div>

                        {/* Performance Card */}
                        <motion.div
                          animate={{ y: [0, 7, 0] }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="absolute -left-3 top-4 rounded-xl border border-white/10 bg-[#0c1729]/95 p-3 shadow-xl backdrop-blur-xl"
                        >
                          <div className="flex items-center gap-2">
                            <div className="rounded-lg bg-blue-500/15 p-2 text-blue-400">
                              <Zap size={14} />
                            </div>

                            <div>
                              <p className="text-[7px] text-slate-500">
                                Performance
                              </p>

                              <p className="text-[9px] font-bold">99 Score</p>
                            </div>
                          </div>
                        </motion.div>

                        {/* Rating Card */}
                        <motion.div
                          animate={{ y: [0, -7, 0] }}
                          transition={{
                            duration: 3.6,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="absolute bottom-1 right-0 rounded-xl border border-white/10 bg-[#0c1729]/95 p-3 shadow-xl backdrop-blur-xl"
                        >
                          <div className="flex items-center gap-2">
                            <div className="rounded-lg bg-yellow-500/10 p-2 text-yellow-400">
                              <Star size={14} />
                            </div>

                            <div>
                              <p className="text-[7px] text-slate-500">
                                Client Rating
                              </p>

                              <p className="text-[9px] font-bold">5.0 Stars</p>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </div>

                    {/* Mini Website Cards */}
                    <div className="relative mt-8 grid grid-cols-3 gap-2">
                      {[
                        "Modern Design",
                        "Fast Performance",
                        "Mobile Friendly",
                      ].map((item) => (
                        <div
                          key={item}
                          className="rounded-lg border border-white/5 bg-white/[0.03] p-2.5 text-center text-[7px] text-slate-400"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* MOBILE PHONE MOCKUP */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 3.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-14 -right-2 hidden w-[165px] rounded-[30px] border-[7px] border-[#172033] bg-[#050912] p-3 shadow-2xl sm:block"
              >
                <div className="mx-auto mb-8 h-1.5 w-12 rounded-full bg-slate-700" />

                <div className="flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-600 text-[9px] font-black">
                    W
                  </div>

                  <div className="text-sm font-black">
                    Web<span className="text-blue-500">Craft</span>
                  </div>
                </div>

                <p className="mt-8 text-sm font-black leading-5">
                  Powerful Websites for{" "}
                  <span className="text-blue-500">Modern Brands</span>
                </p>

                <p className="mt-3 text-[8px] leading-4 text-slate-500">
                  Fast, secure and responsive websites for your business.
                </p>

                <button className="mt-5 rounded-md bg-blue-600 px-3 py-2 text-[9px] font-bold">
                  Get Started
                </button>

                <div className="mt-8 flex justify-center">
                  <Smartphone className="text-blue-500" size={40} />
                </div>
              </motion.div>

              {/* RESPONSIVE DESIGN BADGE */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 4.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -left-6 bottom-4 hidden rounded-2xl border border-white/10 bg-[#0a1425]/90 p-4 shadow-2xl backdrop-blur-xl lg:block"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-blue-500/15 p-3 text-blue-400">
                    <Laptop size={23} />
                  </div>

                  <div>
                    <p className="text-xs text-slate-500">
                      Responsive Design
                    </p>

                    <p className="mt-1 text-sm font-bold">
                      All Devices Ready
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURES BAR - ORIGINAL BLUE */}
      <section className="relative z-10 mx-auto -mt-7 max-w-7xl px-5 pb-14 lg:px-8">
        <div className="grid overflow-hidden rounded-2xl border border-white/10 bg-[#0a1220]/90 shadow-2xl shadow-black/20 backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-center gap-4 p-6 ${
                  index !== features.length - 1
                    ? "border-b border-white/10 sm:border-r lg:border-b-0"
                    : ""
                }`}
              >
                <div className="rounded-xl bg-blue-500/10 p-3 text-blue-400">
                  <Icon size={25} />
                </div>

                <div>
                  <h3 className="font-bold">{feature.title}</h3>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* EXISTING SECTIONS */}
      <Services />
      <WhyChoose />
      <Portfolio />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
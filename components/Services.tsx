"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Layout,
  Search,
  ShoppingCart,
  Smartphone,
  Wrench,
} from "lucide-react";

const services = [
  {
    icon: Layout,
    title: "Website Design",
    description:
      "Modern and attractive website designs that match your business and brand.",
  },
  {
    icon: Code2,
    title: "Website Development",
    description:
      "Fast, secure and responsive websites developed using modern technology.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Website",
    description:
      "Professional online stores where you can easily sell your products.",
  },
  {
    icon: Smartphone,
    title: "Landing Page",
    description:
      "High-converting landing pages designed for ads, products and services.",
  },
  {
    icon: Search,
    title: "SEO & Speed",
    description:
      "Website speed optimization and basic SEO setup to improve visibility.",
  },
  {
    icon: Wrench,
    title: "Website Maintenance",
    description:
      "Regular updates, security checks and technical support for your website.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#050914] py-28"
    >
      <div className="absolute left-[-180px] top-20 h-[380px] w-[380px] rounded-full bg-blue-600/10 blur-[130px]" />

      <div className="absolute right-[-160px] bottom-0 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-500">
            Our Services
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Grow Online
            </span>
          </h2>

          <p className="mt-6 leading-8 text-slate-400">
            We provide complete website solutions for businesses, shops,
            startups and personal brands.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl transition duration-300 hover:border-blue-500/40 hover:bg-white/[0.06]"
              >
                <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-blue-500/0 blur-3xl transition duration-500 group-hover:bg-blue-500/20" />

                <div className="relative">
                  <div className="inline-flex rounded-2xl border border-blue-500/20 bg-blue-500/10 p-4 text-blue-400 transition duration-300 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white">
                    <Icon size={29} />
                  </div>

                  <h3 className="mt-7 text-2xl font-black text-white">
                    {service.title}
                  </h3>

                  <p className="mt-4 min-h-[72px] text-sm leading-6 text-slate-400">
                    {service.description}
                  </p>

                  <a
                    href="#contact"
                    className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-blue-400 transition hover:text-blue-300"
                  >
                    Learn More
                    <ArrowRight
                      size={17}
                      className="transition group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
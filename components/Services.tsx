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
      className="relative overflow-hidden bg-[#050914] py-16 sm:py-20 lg:py-28"
    >
      <div className="absolute left-[-180px] top-20 h-[380px] w-[380px] rounded-full bg-blue-600/10 blur-[130px]" />

      <div className="absolute right-[-160px] bottom-0 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-500 sm:text-sm sm:tracking-[0.25em]">
            Our Services
          </p>

          <h2 className="mt-3 text-3xl font-black leading-tight tracking-tight text-white sm:mt-5 sm:text-5xl">
            Website Development Services in Patna to{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Grow Your Business Online
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-400 sm:mt-6 sm:text-base sm:leading-8">
            We provide professional website development in Patna for businesses,
            shops, startups and brands, including business websites, e-commerce
            websites, landing pages and custom web solutions.
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:mt-16 lg:grid-cols-3 lg:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl transition duration-300 hover:border-blue-500/40 hover:bg-white/[0.06] sm:rounded-3xl sm:p-6 lg:p-7"
              >
                <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-blue-500/0 blur-3xl transition duration-500 group-hover:bg-blue-500/20" />

                <div className="relative">
                  <div className="inline-flex rounded-xl border border-blue-500/20 bg-blue-500/10 p-3 text-blue-400 transition duration-300 group-hover:scale-105 group-hover:bg-blue-500 group-hover:text-white sm:rounded-2xl sm:p-4">
                    <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                  </div>

                  <h3 className="mt-5 text-xl font-black leading-tight text-white sm:mt-6 sm:text-2xl">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-400 sm:mt-4">
                    {service.description}
                  </p>

                  <a
                    href="#contact"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-400 transition hover:text-blue-300 sm:mt-6"
                  >
                    Learn More
                    <ArrowRight
                      size={16}
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
"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  Clock3,
  Headphones,
  Rocket,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Users,
  Zap,
} from "lucide-react";

const benefits = [
  "Custom design for every business",
  "Mobile, tablet and desktop responsive",
  "Fast loading and SEO-friendly structure",
  "Clean, secure and scalable code",
  "Transparent pricing with no hidden charges",
  "Reliable support after project delivery",
];

const cards = [
  {
    icon: Sparkles,
    title: "Premium Design",
    description:
      "Modern layouts created to make your brand look professional and trustworthy.",
  },
  {
    icon: Rocket,
    title: "Fast Delivery",
    description:
      "Clear timelines and efficient development to launch your website quickly.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Website",
    description:
      "Clean code, security-focused setup and reliable website performance.",
  },
  {
    icon: Headphones,
    title: "Friendly Support",
    description:
      "Simple communication and helpful support before and after delivery.",
  },
];

const numbers = [
  {
    icon: Users,
    value: "100+",
    label: "Happy Clients",
  },
  {
    icon: BadgeCheck,
    value: "150+",
    label: "Projects Completed",
  },
  {
    icon: Star,
    value: "5.0",
    label: "Average Rating",
  },
  {
    icon: Clock3,
    value: "24/7",
    label: "Client Support",
  },
];

export default function WhyChoose() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#030712] py-28 text-white"
    >
      <div className="absolute -left-40 top-32 h-[430px] w-[430px] rounded-full bg-blue-600/10 blur-[140px]" />
      <div className="absolute -right-40 bottom-10 h-[460px] w-[460px] rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(59,130,246,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,.12)_1px,transparent_1px)] [background-size:60px_60px]" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
              <Target size={16} />
              Why Choose WebCraft
            </div>

            <h2 className="mt-7 text-4xl font-black leading-tight tracking-tight sm:text-5xl">
              We Don&apos;t Just Build Websites. We Build{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Digital Success.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-400">
              Every website is designed around your business goals. Our focus
              is to create a premium online presence that builds trust,
              attracts customers and helps you generate enquiries.
            </p>

            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-0.5 rounded-full bg-blue-500/15 p-1 text-blue-400">
                    <Check size={16} />
                  </div>

                  <span className="text-sm leading-6 text-slate-300">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </div>

            <a
              href="#contact"
              className="group mt-10 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-4 font-bold shadow-xl shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-500"
            >
              Start Your Project
              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </a>
          </motion.div>

          <div className="relative">
            <div className="absolute inset-12 rounded-full bg-blue-600/15 blur-[100px]" />

            <div className="relative grid gap-5 sm:grid-cols-2">
              {cards.map((card, index) => {
                const Icon = card.icon;

                return (
                  <motion.article
                    key={card.title}
                    initial={{ opacity: 0, scale: 0.92, y: 25 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.55,
                      delay: index * 0.1,
                    }}
                    whileHover={{ y: -9 }}
                    className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.045] p-7 backdrop-blur-xl transition duration-300 hover:border-blue-500/40 hover:bg-white/[0.07] ${
                      index % 2 === 1 ? "sm:translate-y-8" : ""
                    }`}
                  >
                    <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-blue-500/0 blur-3xl transition duration-500 group-hover:bg-blue-500/20" />

                    <div className="relative">
                      <div className="inline-flex rounded-2xl border border-blue-500/20 bg-blue-500/10 p-4 text-blue-400 transition group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white">
                        <Icon size={28} />
                      </div>

                      <h3 className="mt-7 text-2xl font-black">
                        {card.title}
                      </h3>

                      <p className="mt-4 text-sm leading-7 text-slate-400">
                        {card.description}
                      </p>

                      <div className="mt-7 h-px bg-gradient-to-r from-blue-500/50 to-transparent" />

                      <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-blue-400">
                        <Zap size={14} />
                        WebCraft Advantage
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-28 grid overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-4">
          {numbers.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className={`flex items-center gap-4 p-7 ${
                  index !== numbers.length - 1
                    ? "border-b border-white/10 sm:border-r lg:border-b-0"
                    : ""
                }`}
              >
                <div className="rounded-2xl bg-blue-500/10 p-4 text-blue-400">
                  <Icon size={27} />
                </div>

                <div>
                  <div className="text-3xl font-black">{item.value}</div>
                  <p className="mt-1 text-sm text-slate-500">{item.label}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
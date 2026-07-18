"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Crown,
  Rocket,
  Sparkles,
  Star,
} from "lucide-react";

const plans = [
  {
    name: "Starter",
    icon: Rocket,
    price: "₹4,999",
    description: "Perfect for individuals and small businesses.",
    popular: false,
    features: [
      "Up to 5 pages",
      "Mobile responsive design",
      "Contact form",
      "WhatsApp button",
      "Basic SEO setup",
      "Social media links",
      "7 days support",
    ],
  },
  {
    name: "Business",
    icon: Star,
    price: "₹9,999",
    description: "Best choice for businesses that want to grow online.",
    popular: true,
    features: [
      "Up to 10 pages",
      "Premium custom design",
      "Mobile responsive design",
      "Contact and enquiry forms",
      "WhatsApp integration",
      "SEO and speed optimization",
      "Admin-friendly structure",
      "30 days support",
    ],
  },
  {
    name: "Premium",
    icon: Crown,
    price: "₹19,999",
    description: "Advanced solution for serious brands and companies.",
    popular: false,
    features: [
      "Unlimited essential pages",
      "Fully custom premium design",
      "Advanced animations",
      "E-commerce or web application",
      "Payment gateway integration",
      "Advanced SEO setup",
      "Speed and security optimization",
      "60 days premium support",
    ],
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-[#030712] py-28 text-white"
    >
      <div className="absolute -left-40 top-24 h-[420px] w-[420px] rounded-full bg-blue-600/10 blur-[140px]" />
      <div className="absolute -right-40 bottom-10 h-[460px] w-[460px] rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="absolute inset-0 opacity-[0.15] [background-image:linear-gradient(rgba(59,130,246,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,.12)_1px,transparent_1px)] [background-size:60px_60px]" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
            <Sparkles size={16} />
            Simple & Transparent Pricing
          </div>

          <h2 className="mt-7 text-4xl font-black tracking-tight sm:text-5xl">
            Choose the Right Package for{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Your Business
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-400">
            Select a package based on your requirements. Final pricing may
            change depending on features and project complexity.
          </p>
        </motion.div>

        <div className="mt-16 grid items-stretch gap-7 lg:grid-cols-3">
          {plans.map((plan, index) => {
            const Icon = plan.icon;

            return (
              <motion.article
                key={plan.name}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -10 }}
                className={`relative flex flex-col overflow-hidden rounded-3xl border p-8 backdrop-blur-xl transition duration-300 ${
                  plan.popular
                    ? "border-blue-500/60 bg-gradient-to-b from-blue-600/20 to-white/[0.045] shadow-2xl shadow-blue-950/40"
                    : "border-white/10 bg-white/[0.035] hover:border-blue-500/35 hover:bg-white/[0.055]"
                }`}
              >
                {plan.popular && (
                  <div className="absolute right-5 top-5 rounded-full bg-blue-600 px-4 py-2 text-xs font-bold shadow-lg shadow-blue-600/30">
                    Most Popular
                  </div>
                )}

                <div className="inline-flex w-fit rounded-2xl border border-blue-500/20 bg-blue-500/10 p-4 text-blue-400">
                  <Icon size={29} />
                </div>

                <h3 className="mt-7 text-3xl font-black">{plan.name}</h3>

                <p className="mt-3 min-h-[52px] text-sm leading-6 text-slate-400">
                  {plan.description}
                </p>

                <div className="mt-7 flex items-end gap-2">
                  <span className="text-4xl font-black sm:text-5xl">
                    {plan.price}
                  </span>

                  <span className="pb-1 text-sm text-slate-500">
                    starting
                  </span>
                </div>

                <div className="my-8 h-px bg-gradient-to-r from-white/10 via-white/20 to-white/10" />

                <div className="flex-1 space-y-4">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <div className="mt-0.5 rounded-full bg-blue-500/15 p-1 text-blue-400">
                        <Check size={15} />
                      </div>

                      <span className="text-sm leading-6 text-slate-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className={`group mt-9 flex items-center justify-center gap-2 rounded-xl px-6 py-4 font-bold transition ${
                    plan.popular
                      ? "bg-blue-600 shadow-xl shadow-blue-600/25 hover:bg-blue-500"
                      : "border border-white/10 bg-white/[0.04] hover:border-blue-500/40 hover:bg-blue-500/10"
                  }`}
                >
                  Choose {plan.name}
                  <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />
                </a>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 rounded-2xl border border-white/10 bg-white/[0.035] px-6 py-5 text-center text-sm text-slate-400 backdrop-blur-xl"
        >
          Need a custom website or advanced application?{" "}
          <a href="#contact" className="font-bold text-blue-400 hover:text-blue-300">
            Contact us for a custom quote.
          </a>
        </motion.div>
      </div>
    </section>
  );
}
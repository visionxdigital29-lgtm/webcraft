"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Business Owner",
    image: "R",
    review:
      "WebCraft delivered an amazing website for my business. The design is modern, fast and helped increase customer enquiries.",
  },
  {
    name: "Priya Verma",
    role: "Startup Founder",
    image: "P",
    review:
      "Professional team with excellent communication. The website looks premium and works perfectly on every device.",
  },
  {
    name: "Amit Singh",
    role: "E-Commerce Owner",
    image: "A",
    review:
      "Our online store became much faster and more attractive. Highly recommended for anyone who wants a premium website.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative bg-[#030712] py-28 text-white overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(59,130,246,.15)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,.15)_1px,transparent_1px)] [background-size:60px_60px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-blue-400 font-semibold tracking-widest uppercase">
            Testimonials
          </p>

          <h2 className="mt-4 text-5xl font-black">
            What Our
            <span className="text-blue-400"> Clients Say</span>
          </h2>

          <p className="mt-5 text-slate-400 max-w-2xl mx-auto">
            Trusted by startups, businesses and entrepreneurs across India.
          </p>
        </motion.div>

        <div className="grid gap-8 mt-16 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl"
            >
              <Quote className="text-blue-400 mb-5" size={34} />

              <p className="text-slate-300 leading-7">
                {item.review}
              </p>

              <div className="flex mt-6 gap-1 text-yellow-400">
                <Star fill="currentColor" size={18} />
                <Star fill="currentColor" size={18} />
                <Star fill="currentColor" size={18} />
                <Star fill="currentColor" size={18} />
                <Star fill="currentColor" size={18} />
              </div>

              <div className="flex items-center gap-4 mt-8">
                <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center font-bold text-lg">
                  {item.image}
                </div>

                <div>
                  <h3 className="font-bold">{item.name}</h3>
                  <p className="text-sm text-slate-400">
                    {item.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
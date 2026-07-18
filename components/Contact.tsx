"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import { supabase } from "@/lib/supabase";

const contactDetails = [
  {
    icon: Phone,
    title: "Call Us",
    value: "+91 63864 21939",
    description: "Monday to Saturday",
    href: "tel:+916386421939",
  },
  {
    icon: Mail,
    title: "Email Us",
    value: "visionxdigital29@gmail.com",
    description: "Reply within 24 hours",
    href: "mailto:visionxdigital29@gmail.com",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "Chat with WebCraft",
    description: "Quick project discussion",
    href: "https://wa.me/916386421939",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "India",
    description: "Serving Clients Worldwide",
    href: "#contact",
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSubmitting(true);
    setSubmitted(false);
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const enquiry = {
      name: String(formData.get("name") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      website_type: String(formData.get("websiteType") || "").trim(),
      budget: String(formData.get("budget") || "").trim(),
      preferred_contact: String(
        formData.get("preferredContact") || ""
      ).trim(),
      project_details: String(formData.get("message") || "").trim(),
    };

    try {
      const { error } = await supabase
        .from("contact_enquiries")
        .insert([enquiry]);

      if (error) {
        console.error("Supabase enquiry error:", error);

        setErrorMessage(
          "Enquiry submit nahi ho payi. Please dobara try karein ya WhatsApp par contact karein."
        );

        return;
      }

      const whatsappMessage = `
🔥 New Website Enquiry

👤 Name: ${enquiry.name}
📞 Phone: ${enquiry.phone}
📧 Email: ${enquiry.email}
🌐 Website Type: ${enquiry.website_type}
💰 Budget: ${enquiry.budget}
☎ Preferred Contact: ${enquiry.preferred_contact}

📝 Project Details:
${enquiry.project_details}
      `.trim();

      const whatsappUrl = `https://wa.me/916386421939?text=${encodeURIComponent(
        whatsappMessage
      )}`;

      setSubmitted(true);

      window.open(whatsappUrl, "_blank");

      form.reset();

      setTimeout(() => {
        setSubmitted(false);
      }, 7000);
    } catch (error) {
      console.error("Unexpected enquiry error:", error);

      setErrorMessage(
        "Kuch problem aa gayi. Please dobara try karein ya WhatsApp par contact karein."
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#030712] py-28 text-white"
    >
      <div className="absolute -left-40 top-24 h-[440px] w-[440px] rounded-full bg-blue-600/10 blur-[140px]" />

      <div className="absolute -right-40 bottom-0 h-[480px] w-[480px] rounded-full bg-cyan-500/10 blur-[150px]" />

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
            <Send size={16} />
            Let&apos;s Work Together
          </div>

          <h2 className="mt-7 text-4xl font-black tracking-tight sm:text-5xl">
            Ready to Build Your{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Dream Website?
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-400">
            Apne business aur website requirement ke baare me batayein. Hum
            aapse contact karke best solution aur quotation share karenge.
          </p>
        </motion.div>

        <div className="mt-16 grid items-start gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl sm:p-8">
              <h3 className="text-3xl font-black">
                Contact Information
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                Phone, email ya WhatsApp se humse contact karein. Project
                discussion aur initial consultation free rahegi.
              </p>

              <div className="mt-8 space-y-4">
                {contactDetails.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.title}
                      href={item.href}
                      target={
                        item.href.startsWith("https") ? "_blank" : undefined
                      }
                      rel={
                        item.href.startsWith("https")
                          ? "noreferrer"
                          : undefined
                      }
                      className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-4 transition hover:border-blue-500/40 hover:bg-blue-500/[0.08]"
                    >
                      <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 p-3 text-blue-400 transition group-hover:bg-blue-600 group-hover:text-white">
                        <Icon size={24} />
                      </div>

                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                          {item.title}
                        </p>

                        <p className="mt-1 font-bold text-white">
                          {item.value}
                        </p>

                        <p className="mt-1 text-xs text-slate-500">
                          {item.description}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
                            <div className="mt-7 flex items-start gap-3 rounded-2xl border border-blue-500/20 bg-blue-500/[0.07] p-5">
                <Clock3
                  size={21}
                  className="mt-0.5 shrink-0 text-blue-400"
                />

                <div>
                  <p className="font-bold">Working Hours</p>

                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    Monday–Saturday, 10:00 AM–7:00 PM
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-white/10 bg-white/[0.045] p-7 backdrop-blur-xl sm:p-9"
          >
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
                Get a Free Quote
              </p>

              <h3 className="mt-3 text-3xl font-black">
                Tell Us About Your Project
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                Form bhariye aur hum jaldi aapse contact karenge.
              </p>
            </div>

            {submitted && (
              <div className="mt-7 flex items-start gap-3 rounded-2xl border border-green-500/30 bg-green-500/10 p-4 text-green-300">
                <CheckCircle2 size={21} className="mt-0.5 shrink-0" />

                <p className="text-sm leading-6">
                  Thank you! Aapki enquiry save ho gayi hai aur WhatsApp open ho
                  raha hai. Wahan message send kar dein.
                </p>
              </div>
            )}

            {errorMessage && (
              <div className="mt-7 rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-sm leading-6 text-red-300">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-slate-300">
                    Your Name
                  </span>

                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-white/10 bg-[#07101e] px-4 py-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500/60 focus:ring-4 focus:ring-blue-500/10"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-slate-300">
                    Phone Number
                  </span>

                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+91 98765 43210"
                    className="w-full rounded-xl border border-white/10 bg-[#07101e] px-4 py-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500/60 focus:ring-4 focus:ring-blue-500/10"
                  />
                </label>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-slate-300">
                    Email Address
                  </span>

                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-white/10 bg-[#07101e] px-4 py-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500/60 focus:ring-4 focus:ring-blue-500/10"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-slate-300">
                    Website Type
                  </span>

                  <select
                    name="websiteType"
                    required
                    defaultValue=""
                    className="w-full rounded-xl border border-white/10 bg-[#07101e] px-4 py-4 text-sm text-white outline-none transition focus:border-blue-500/60 focus:ring-4 focus:ring-blue-500/10"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option>Business Website</option>
                    <option>E-Commerce Website</option>
                    <option>Portfolio Website</option>
                    <option>Landing Page</option>
                    <option>Web Application</option>
                    <option>Website Redesign</option>
                    <option>Other</option>
                  </select>
                </label>
              </div>
                            <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-slate-300">
                    Estimated Budget
                  </span>

                  <select
                    name="budget"
                    required
                    defaultValue=""
                    className="w-full rounded-xl border border-white/10 bg-[#07101e] px-4 py-4 text-sm text-white outline-none transition focus:border-blue-500/60 focus:ring-4 focus:ring-blue-500/10"
                  >
                    <option value="" disabled>
                      Select budget
                    </option>
                    <option>₹5,000–₹10,000</option>
                    <option>₹10,000–₹20,000</option>
                    <option>₹20,000–₹50,000</option>
                    <option>₹50,000+</option>
                    <option>Need Consultation</option>
                  </select>
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-slate-300">
                    Preferred Contact
                  </span>

                  <select
                    name="preferredContact"
                    required
                    defaultValue="WhatsApp"
                    className="w-full rounded-xl border border-white/10 bg-[#07101e] px-4 py-4 text-sm text-white outline-none transition focus:border-blue-500/60 focus:ring-4 focus:ring-blue-500/10"
                  >
                    <option>WhatsApp</option>
                    <option>Phone Call</option>
                    <option>Email</option>
                  </select>
                </label>
              </div>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-300">
                  Project Details
                </span>

                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Apne business aur website requirements ke baare me batayein..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-[#07101e] px-4 py-4 text-sm leading-7 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500/60 focus:ring-4 focus:ring-blue-500/10"
                />
              </label>

              <button
                type="submit"
                disabled={submitting}
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-bold shadow-xl shadow-blue-600/25 transition hover:-translate-y-1 hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
              >
                {submitting ? "Submitting..." : "Send Project Enquiry"}

                {!submitting && (
                  <ArrowRight
                    size={19}
                    className="transition group-hover:translate-x-1"
                  />
                )}
              </button>

              <p className="text-center text-xs leading-5 text-slate-500">
                Form submit karke aap WebCraft ko project ke baare me contact
                karne ki permission dete hain.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
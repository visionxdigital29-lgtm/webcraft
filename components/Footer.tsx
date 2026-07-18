"use client";

import {
  ArrowUp,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Packages", href: "#pricing" },
  { name: "About", href: "#about" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

const services = [
  "Business Website",
  "E-Commerce Website",
  "Portfolio Website",
  "Landing Page",
  "Web Application",
  "Website Maintenance",
];

const socialLinks = [
  {
    label: "Instagram",
    shortName: "IG",
    href: "#",
  },
  {
    label: "Facebook",
    shortName: "f",
    href: "#",
  },
  {
    label: "LinkedIn",
    shortName: "in",
    href: "#",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#02050c] text-white">
      {/* Background glow */}
      <div className="absolute -left-40 top-10 h-[340px] w-[340px] rounded-full bg-blue-600/10 blur-[130px]" />
      <div className="absolute -right-40 bottom-0 h-[360px] w-[360px] rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-5 pb-10 pt-20 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.25fr_0.8fr_1fr_1.15fr]">
          {/* Brand */}
          <div>
            <a href="#home" className="inline-flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 text-xl font-black shadow-lg shadow-blue-600/30">
                W
              </div>

              <div>
                <div className="text-2xl font-black tracking-tight">
                  Web<span className="text-blue-500">Craft</span>
                </div>

                <p className="text-[10px] text-slate-500">
                  Crafting Your Digital Success
                </p>
              </div>
            </a>

            <p className="mt-6 max-w-sm text-sm leading-7 text-slate-400">
              WebCraft modern, fast aur professional websites banata hai jo
              businesses ko online grow karne aur customer enquiries paane me
              help karti hain.
            </p>

            {/* Social links */}
            <div className="mt-7 flex flex-wrap gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  title={item.label}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-xs font-black text-slate-400 transition hover:-translate-y-1 hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-blue-400"
                >
                  {item.shortName}
                </a>
              ))}

              {/* WhatsApp */}
              <a
                href="https://wa.me/916386421939"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                title="WhatsApp"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-400 transition hover:-translate-y-1 hover:border-green-500/40 hover:bg-green-500/10 hover:text-green-400"
              >
                <MessageCircle size={19} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-black">Quick Links</h3>

            <div className="mt-6 space-y-3">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-sm text-slate-400 transition hover:translate-x-1 hover:text-blue-400"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-black">Our Services</h3>

            <div className="mt-6 space-y-3">
              {services.map((service) => (
                <a
                  key={service}
                  href="#services"
                  className="block text-sm text-slate-400 transition hover:translate-x-1 hover:text-blue-400"
                >
                  {service}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-black">Contact WebCraft</h3>

            <div className="mt-6 space-y-4">
              {/* Phone */}
              <a
                href="tel:+916386421939"
                className="flex items-start gap-3 text-sm text-slate-400 transition hover:text-blue-400"
              >
                <Phone size={18} className="mt-0.5 shrink-0" />
                <span>+91 63864 21939</span>
              </a>

              {/* Email */}
              <a
                href="mailto:visionxdigital29@gmail.com"
                className="flex items-start gap-3 text-sm text-slate-400 transition hover:text-blue-400"
              >
                <Mail size={18} className="mt-0.5 shrink-0" />
                <span>visionxdigital29@gmail.com</span>
              </a>

              {/* Location */}
              <div className="flex items-start gap-3 text-sm leading-6 text-slate-400">
                <MapPin size={18} className="mt-0.5 shrink-0" />

                <span>
                  India
                  <br />
                  Serving Clients Worldwide
                </span>
              </div>
            </div>

            {/* Quote button */}
            <a
              href="#contact"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold shadow-lg shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-500"
            >
              Get a Free Quote
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-8 text-center text-sm text-slate-500 sm:flex-row sm:text-left">
          <p>© 2026 WebCraft. All rights reserved.</p>

          <div className="flex flex-wrap justify-center gap-5">
            <a href="#" className="transition hover:text-blue-400">
              Privacy Policy
            </a>

            <a href="#" className="transition hover:text-blue-400">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>

      {/* Back to Top */}
      <a
        href="#home"
        aria-label="Back to top"
        className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-blue-400/30 bg-blue-600 text-white shadow-xl shadow-blue-600/30 transition hover:-translate-y-1 hover:bg-blue-500"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
}
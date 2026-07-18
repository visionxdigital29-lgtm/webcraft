"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Website banne me kitna time lagega?",
    answer:
      "Normal business website banne me lagbhag 5 se 10 din lag sakte hain. Advanced website, e-commerce ya custom web application me zyada time lag sakta hai.",
  },
  {
    question: "Kya website mobile me bhi sahi chalegi?",
    answer:
      "Haan, har website mobile, tablet aur desktop ke liye responsive banayi jayegi.",
  },
  {
    question: "Domain aur hosting bhi milega?",
    answer:
      "Domain aur hosting package ke hisab se include kiya ja sakta hai. Zarurat par hum setup me bhi madad karenge.",
  },
  {
    question: "Kya website me WhatsApp button add hoga?",
    answer:
      "Haan, WhatsApp chat button, contact form aur enquiry system add kiya ja sakta hai.",
  },
  {
    question: "Payment kaise karna hoga?",
    answer:
      "Project start karne ke liye advance payment li jayegi. Remaining payment project completion ke according li jayegi.",
  },
  {
    question: "Website banne ke baad support milega?",
    answer:
      "Haan, selected package ke according support diya jayega. Extra maintenance plan bhi available rahega.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#050914] py-28 text-white"
    >
      <div className="absolute -left-40 top-28 h-[420px] w-[420px] rounded-full bg-blue-600/10 blur-[140px]" />
      <div className="absolute -right-40 bottom-0 h-[460px] w-[460px] rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="relative mx-auto max-w-5xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
            <HelpCircle size={16} />
            Frequently Asked Questions
          </div>

          <h2 className="mt-7 text-4xl font-black tracking-tight sm:text-5xl">
            Questions? We Have{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Answers
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-400">
            Website project start karne se pehle log aksar ye questions puchte
            hain.
          </p>
        </motion.div>

        <div className="mt-16 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.article
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className={`overflow-hidden rounded-2xl border backdrop-blur-xl transition ${
                  isOpen
                    ? "border-blue-500/40 bg-blue-500/[0.07]"
                    : "border-white/10 bg-white/[0.035]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left"
                >
                  <span className="text-base font-bold sm:text-lg">
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition ${
                      isOpen
                        ? "rotate-180 border-blue-500/40 bg-blue-500 text-white"
                        : "border-white/10 bg-white/[0.04] text-slate-400"
                    }`}
                  >
                    <ChevronDown size={20} />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="border-t border-white/10 px-6 py-6 text-sm leading-7 text-slate-400 sm:text-base">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "What printing services do you provide?",
    answer:
      "We provide Digital Printing, Flex Printing, ACP Sign Boards, Glow Sign Boards, Wedding Cards, Visiting Cards, Brochures, Flyers, Banners, Stickers and complete branding solutions.",
  },
  {
    question: "Where is Ad Bazaar located?",
    answer:
      "We are located at 65-A, Pardevanpurwa, Near Poonam Talkies, Lal Bangla, Kanpur.",
  },
  {
    question: "What are your business hours?",
    answer:
      "Our shop is open Monday to Sunday from 10:00 AM to 9:00 PM.",
  },
  {
    question: "Do you accept bulk printing orders?",
    answer:
      "Yes. We handle both small and bulk printing orders with competitive pricing and fast delivery.",
  },
  {
    question: "Can I contact you on WhatsApp?",
    answer:
      "Yes. You can contact us anytime on WhatsApp at +91 9026283091 for quotations and inquiries.",
  },
  {
    question: "Do you provide custom design services?",
    answer:
      "Yes. We also provide custom graphic design and branding solutions according to your requirements.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-[#080808] text-white py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-yellow-400 uppercase tracking-[5px] text-sm font-semibold">
            FAQ
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Frequently Asked <span className="text-yellow-400">Questions</span>
          </h2>
        </div>

        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-[#151515] rounded-2xl border border-gray-800 overflow-hidden"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="w-full flex justify-between items-center px-6 py-5 text-left"
              >
                <span className="font-semibold">{faq.question}</span>

                <FaChevronDown
                  className={`transition-transform ${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {open === index && (
                <div className="px-6 pb-5 text-gray-400 leading-7">
                  {faq.answer}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
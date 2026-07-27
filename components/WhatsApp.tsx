"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsApp() {
  return (
    <a
      href="https://wa.me/919026283091"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-green-600 px-5 py-3 font-semibold text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-green-700 animate-pulse"
    >
      <FaWhatsapp size={26} />
      <span>Chat Now</span>
    </a>
  );
}
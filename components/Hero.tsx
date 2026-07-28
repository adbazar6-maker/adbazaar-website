"use client";

import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaPhoneAlt,
  FaWhatsapp,
  FaStar,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#0B0B0B] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-yellow-500/10 blur-3xl" />
        <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-yellow-400/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block bg-yellow-500/10 text-yellow-400 border border-yellow-500/30 rounded-full px-4 py-2 text-sm font-semibold mb-6">
            ★ Premium Printing Solutions
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-white">
            Ad <span className="text-yellow-400">Bazaar</span>
          </h1>

          <h2 className="text-2xl md:text-3xl mt-6 text-gray-200 font-semibold">
            Your Complete Printing & Branding Partner
          </h2>

          <p className="text-gray-400 mt-6 text-lg leading-8 max-w-xl">
            Digital Printing, Flex Printing, ACP Sign Boards, Glow Sign,
            Wallpaper, Wedding Cards, Branding Solutions and much more —
            delivering premium quality with fast turnaround across Kanpur.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="tel:+919026283091"
              className="btn-primary flex items-center gap-2"
            >
              <FaPhoneAlt />
              Call Now
            </a>

            <a
              href="https://wa.me/919026283091"
              target="_blank"
              className="btn-secondary flex items-center gap-2"
            >
              <FaWhatsapp />
              WhatsApp
            </a>

            <a
              href="#contact"
              className="text-yellow-400 flex items-center gap-2 font-semibold"
            >
              Get Free Quote
              <FaArrowRight />
            </a>
          </div>

          <div className="flex flex-wrap gap-6 mt-12 text-sm text-gray-300">
            <span className="flex items-center gap-2">
              <FaStar className="text-yellow-400" />
              Premium Quality
            </span>

            <span className="flex items-center gap-2">
              ⚡ Fast Delivery
            </span>

            <span className="flex items-center gap-2">
              🎨 Custom Design
            </span>

            <span className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-yellow-400" />
              Lal Bangla, Kanpur
            </span>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="w-full max-w-md rounded-3xl border border-yellow-500/30 bg-[#161616] p-8 shadow-gold">

            <div className="grid grid-cols-2 gap-6 text-center">

              <div>
                <h3 className="text-4xl font-bold text-yellow-400">1000+</h3>
                <p className="text-gray-400 mt-2">Projects</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-yellow-400">500+</h3>
                <p className="text-gray-400 mt-2">Clients</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-yellow-400">15+</h3>
                <p className="text-gray-400 mt-2">Services</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-yellow-400">100%</h3>
                <p className="text-gray-400 mt-2">Quality</p>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
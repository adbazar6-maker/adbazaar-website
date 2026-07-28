"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  FaArrowRight,
  FaPhoneAlt,
  FaWhatsapp,
  FaStar,
  FaMapMarkerAlt,
  FaCheckCircle,
} from "react-icons/fa";
import HeroSlider from "./HeroSlider";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#080808] overflow-hidden flex items-center">

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-yellow-500/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-yellow-400/5 blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
        >

          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 text-sm font-semibold">
            <FaStar />
            Premium Printing Solutions
          </span>

          <h1 className="mt-8 text-5xl md:text-7xl font-black leading-tight text-white">
            Ad <span className="text-yellow-400">Bazaar</span>
          </h1>

          <h2 className="mt-5 text-2xl md:text-3xl font-semibold text-gray-200">
            Your Complete Printing & Branding Partner
          </h2>

          <p className="mt-6 text-gray-400 text-lg leading-8 max-w-xl">
            Digital Printing, Flex Printing, ACP Sign Boards,
            Glow Sign, Wallpaper, Wedding Cards,
            Indoor & Outdoor Branding and much more.
          </p>

          {/* Trust Points */}

          <div className="mt-8 grid grid-cols-2 gap-3">

            {[
              "Premium Quality",
              "Fast Delivery",
              "Modern Machines",
              "Affordable Pricing",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 text-gray-300"
              >
                <FaCheckCircle className="text-yellow-400" />
                {item}
              </div>
            ))}

          </div>

          {/* Buttons */}

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
              className="text-yellow-400 flex items-center gap-2 font-bold"
            >
              Get Free Quote
              <FaArrowRight />
            </a>

          </div>

          {/* Counters */}

          <div className="grid grid-cols-3 gap-6 mt-14">

            <div>
              <h3 className="text-4xl font-black text-yellow-400">
                <CountUp end={5000} duration={3} />+
              </h3>
              <p className="text-gray-400 mt-2">
                Projects
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-black text-yellow-400">
                <CountUp end={3000} duration={3} />+
              </h3>
              <p className="text-gray-400 mt-2">
                Happy Clients
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-black text-yellow-400">
                <CountUp end={2018} duration={2} />
              </h3>
              <p className="text-gray-400 mt-2">
                Since
              </p>
            </div>

          </div>

          <div className="flex items-center gap-3 mt-10 text-gray-300">

            <FaMapMarkerAlt className="text-yellow-400" />

            Lal Bangla, Kanpur

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
        >
          <HeroSlider />
        </motion.div>

      </div>

    </section>
  );
}
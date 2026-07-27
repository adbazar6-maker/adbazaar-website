"use client";

import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

export default function About() {
  return (
    <section className="bg-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-yellow-400 uppercase tracking-widest font-semibold">
            About Us
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Complete Printing &
            <span className="text-yellow-400"> Branding Solutions</span>
          </h2>

          <p className="text-gray-300 mt-6 leading-8 text-lg">
            Ad Bazaar is a professional printing and branding company based in
            Kanpur. We help businesses create a strong visual identity with
            premium-quality printing, signage, and customized branding
            solutions.
          </p>

          <div className="mt-8 space-y-4">

            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-yellow-400" />
              <span>Digital & Offset Printing</span>
            </div>

            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-yellow-400" />
              <span>ACP & Glow Sign Boards</span>
            </div>

            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-yellow-400" />
              <span>Indoor & Outdoor Branding</span>
            </div>

            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-yellow-400" />
              <span>Fast Delivery & Premium Quality</span>
            </div>

          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl border border-yellow-500 p-10 shadow-2xl">

            <div className="grid grid-cols-2 gap-8 text-center">

              <div>
                <h3 className="text-4xl font-bold text-yellow-400">1000+</h3>
                <p className="text-gray-300 mt-2">Projects Completed</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-yellow-400">500+</h3>
                <p className="text-gray-300 mt-2">Happy Clients</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-yellow-400">10+</h3>
                <p className="text-gray-300 mt-2">Printing Services</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-yellow-400">100%</h3>
                <p className="text-gray-300 mt-2">Quality Commitment</p>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section className="bg-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-yellow-400 uppercase tracking-widest font-semibold">
            Contact Us
          </p>

          <h2 className="text-5xl font-bold mt-3">
            Let's Build Your Brand
          </h2>

          <p className="text-gray-400 mt-5">
            Get in touch with Ad Bazaar for premium printing,
            signage and branding solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="bg-gray-900 rounded-2xl p-8 text-center border border-gray-800 hover:border-yellow-500 transition">
            <FaMapMarkerAlt className="text-yellow-400 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3">Address</h3>
            <p className="text-gray-400">
              65-A, Pardevanpurwa<br />
              Near Poonam Talkies<br />
              Lal Bangla, Kanpur
            </p>
          </div>

          <div className="bg-gray-900 rounded-2xl p-8 text-center border border-gray-800 hover:border-yellow-500 transition">
            <FaPhoneAlt className="text-yellow-400 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3">Call Us</h3>
            <p className="text-gray-400">
              +91 9026283091<br />
              +91 7355470776
            </p>
          </div>

          <div className="bg-gray-900 rounded-2xl p-8 text-center border border-gray-800 hover:border-yellow-500 transition">
            <FaEnvelope className="text-yellow-400 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3">Email</h3>
            <p className="text-gray-400">
              adbazar6@gmail.com
            </p>
          </div>

          <div className="bg-gray-900 rounded-2xl p-8 text-center border border-gray-800 hover:border-yellow-500 transition">
            <FaClock className="text-yellow-400 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3">Business Hours</h3>
            <p className="text-gray-400">
              Monday - Sunday<br />
              10:00 AM – 9:00 PM
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
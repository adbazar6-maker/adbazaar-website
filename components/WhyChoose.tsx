"use client";

import { motion } from "framer-motion";
import {
  FaAward,
  FaClock,
  FaHandshake,
  FaPrint,
  FaCheckCircle,
  FaHeadset,
} from "react-icons/fa";

const reasons = [
  {
    icon: <FaAward />,
    title: "Premium Quality",
    text: "Sharp colors, premium materials and professional finishing for every project.",
  },
  {
    icon: <FaClock />,
    title: "On-Time Delivery",
    text: "We value your time and deliver every order within the committed schedule.",
  },
  {
    icon: <FaPrint />,
    title: "Complete Printing Solutions",
    text: "From visiting cards to ACP sign boards, we provide everything under one roof.",
  },
  {
    icon: <FaHandshake />,
    title: "Trusted Since 2018",
    text: "Serving businesses across Kanpur with quality and reliability.",
  },
  {
    icon: <FaCheckCircle />,
    title: "5000+ Projects",
    text: "Successfully completed thousands of printing and branding projects.",
  },
  {
    icon: <FaHeadset />,
    title: "3000+ Happy Clients",
    text: "Our customers trust us for consistent quality and dependable service.",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-gradient-to-b from-black to-gray-950 text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-yellow-400 uppercase tracking-widest font-semibold">
            Why Choose Us
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Why Businesses Trust Ad Bazaar
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            We combine creative design, premium-quality printing and dependable
            customer service to help businesses build a strong brand presence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {reasons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-gray-900 border border-gray-800 hover:border-yellow-500 rounded-2xl p-8 transition-all duration-300"
            >
              <div className="text-yellow-400 text-4xl mb-5">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-400 leading-7">
                {item.text}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
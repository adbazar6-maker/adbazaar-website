"use client";

import { motion } from "framer-motion";
import {
  FaPrint,
  FaImage,
  FaBuilding,
  FaLightbulb,
  FaIdCard,
  FaRing,
  FaFileAlt,
  FaPaintRoller,
  FaArrowRight,
} from "react-icons/fa";

const services = [
  {
    icon: <FaPrint />,
    title: "Digital Printing",
    desc: "Premium digital printing with vibrant colors and sharp quality.",
  },
  {
    icon: <FaImage />,
    title: "Flex Printing",
    desc: "Indoor & outdoor flex printing for every business requirement.",
  },
  {
    icon: <FaBuilding />,
    title: "ACP Sign Boards",
    desc: "Premium ACP signage for shops, offices and showrooms.",
  },
  {
    icon: <FaLightbulb />,
    title: "Glow Sign Boards",
    desc: "LED illuminated glow sign boards with premium finishing.",
  },
  {
    icon: <FaIdCard />,
    title: "Visiting Cards",
    desc: "Luxury business cards with modern premium finishes.",
  },
  {
    icon: <FaRing />,
    title: "Wedding Printing",
    desc: "Wedding cards and invitation printing with elegant designs.",
  },
  {
    icon: <FaFileAlt />,
    title: "Brochure & Flyers",
    desc: "Professional brochures, flyers and promotional materials.",
  },
  {
    icon: <FaPaintRoller />,
    title: "Branding Solutions",
    desc: "Complete indoor & outdoor branding for your business.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#0B0B0B] text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">

          <p className="text-yellow-400 uppercase tracking-[4px] font-semibold">
            Our Services
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Complete Printing Solutions
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-5">
            From business cards to large-format branding, Ad Bazaar
            provides complete printing solutions under one roof.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((service, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-[#161616] border border-gray-800 hover:border-yellow-400 rounded-3xl p-8 transition-all duration-300 group"
            >

              <div className="w-16 h-16 rounded-2xl bg-yellow-400 text-black flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition">

                {service.icon}

              </div>

              <h3 className="text-2xl font-bold mb-4">

                {service.title}

              </h3>

              <p className="text-gray-400 leading-7">

                {service.desc}

              </p>

              <div className="mt-6 flex items-center gap-2 text-yellow-400 font-semibold">

                Learn More

                <FaArrowRight />

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const projects = [
  "Digital Printing",
  "Flex Printing",
  "Glow Sign Board",
  "ACP Sign Board",
  "Visiting Cards",
  "Wedding Cards",
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-yellow-400 uppercase tracking-[4px] font-semibold">
            Our Gallery
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Our Recent Projects
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-5">
            A glimpse of our premium printing and branding work completed for
            businesses across Kanpur.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group overflow-hidden rounded-3xl border border-yellow-500/20 bg-[#161616]"
            >
              <div className="h-64 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-5xl text-yellow-400 font-bold">
                {index + 1}
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold">
                  {project}
                </h3>

                <p className="text-gray-400 mt-3">
                  Premium quality printing with modern finishing and vibrant colors.
                </p>

                <div className="flex items-center gap-2 text-yellow-400 mt-5 font-semibold">
                  View Project
                  <FaArrowRight />
                </div>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
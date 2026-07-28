"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const projects = [
  {
    title: "Digital Printing",
    image: "IMG_20260509_204653.jpg",
  },
  {
    title: "Flex Printing",
    image: "IMG_20260509_204659.jpg",
  },
  {
    title: "Glow Sign Board",
    image: "IMG_20260509_204701.jpg",
  },
  {
    title: "ACP Sign Board",
    image: "IMG_20260520_182632.jpg",
  },
  {
    title: "Visiting Cards",
    image: "IMG_20260528_213659.jpg",
  },
  {
    title: "Wedding Cards",
    image: "IMG_20260528_213712.jpg",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
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

        {/* Gallery Grid */}
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
              {/* Image */}
              <div className="relative h-64 overflow-hidden">

                <Image
                  src={`/gallery/${project.image}`}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-500 flex items-end">

                  <div className="p-4 opacity-0 group-hover:opacity-100 transition duration-500">
                    <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                      View Project
                    </span>
                  </div>

                </div>

              </div>

              {/* Content */}
              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="text-gray-400 mt-3">
                  Premium quality printing with modern finishing and vibrant colors.
                </p>

                <div className="flex items-center gap-2 text-yellow-400 mt-5 font-semibold">
                  View Details
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
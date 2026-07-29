"use client";

import { motion } from "framer-motion";
import { FaStar, FaGoogle } from "react-icons/fa";

const reviews = [
  {
    name: "Dava India Generic Pharmacy",
    review:
      "Good quality, reasonable rates, great service. Ad Bazaar always delivers excellent printing work on time.",
    rating: 5,
  },
  {
    name: "Amit Sharma",
    review:
      "Very professional team. High-quality flex printing and excellent customer support.",
    rating: 5,
  },
  {
    name: "Priya Gupta",
    review:
      "Best printing shop in Kanpur. Fast delivery and premium quality printing.",
    rating: 5,
  },
];

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="bg-[#080808] text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-yellow-400 uppercase tracking-[5px] text-sm font-semibold">
            Google Reviews
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            What Our Customers Say
          </h2>

          <p className="text-gray-400 mt-5">
            Trusted by hundreds of happy customers in Kanpur.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {reviews.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-[#151515] rounded-3xl border border-gray-800 p-8 hover:border-yellow-400 transition"
            >
              <div className="flex gap-1 text-yellow-400 mb-4">
                {[...Array(item.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              <p className="text-gray-300 leading-7">
                "{item.review}"
              </p>

              <h3 className="mt-6 font-bold text-xl">
                {item.name}
              </h3>
            </motion.div>
          ))}

        </div>

        <div className="text-center mt-12">
          <a
            href="https://maps.app.goo.gl/ZeWVwhoA7Nf9e66Q9"
            target="_blank"
            className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition"
          >
            <FaGoogle />
            View All Google Reviews
          </a>
        </div>

      </div>
    </section>
  );
}
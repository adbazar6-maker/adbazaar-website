"use client";

import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const reviews = [
  {
    name: "Rajesh Kumar",
    service: "Flex Printing",
    review:
      "Excellent printing quality with fast delivery. Highly recommended for business branding.",
  },
  {
    name: "Amit Sharma",
    service: "ACP Sign Board",
    review:
      "Professional team, premium finishing and excellent customer support throughout the project.",
  },
  {
    name: "Pooja Gupta",
    service: "Wedding Cards",
    review:
      "Beautiful designs, vibrant printing and timely delivery. Amazing experience with Ad Bazaar.",
  },
];

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="bg-[#0B0B0B] text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">

          <p className="text-yellow-400 uppercase tracking-[4px] font-semibold">
            Customer Reviews
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            What Our Clients Say
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-5">
            Customer satisfaction is our biggest achievement.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {reviews.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-[#161616] border border-gray-800 hover:border-yellow-400 rounded-3xl p-8 transition-all duration-300"
            >

              <FaQuoteLeft className="text-yellow-400 text-3xl mb-5" />

              <div className="flex text-yellow-400 mb-5">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <p className="text-gray-300 leading-7">
                {item.review}
              </p>

              <div className="mt-8 border-t border-gray-700 pt-5">

                <h3 className="text-xl font-bold">
                  {item.name}
                </h3>

                <p className="text-yellow-400 text-sm mt-1">
                  {item.service}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}
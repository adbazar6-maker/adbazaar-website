"use client";

import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const reviews = [
  {
    name: "Rajesh Kumar",
    service: "Flex Printing",
    review: "Excellent printing quality and fast service."
  },
  {
    name: "Amit Sharma",
    service: "ACP Sign Board",
    review: "Professional work with premium finishing."
  },
  {
    name: "Pooja Gupta",
    service: "Wedding Cards",
    review: "Beautiful designs and timely delivery."
  }
];

export default function Reviews() {
  return (
    <section className="bg-black text-white py-24 px-6">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center text-yellow-400 mb-12">
          What Our Clients Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {reviews.map((item, index) => (

            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-[#151515] border border-gray-800 rounded-3xl p-8"
            >

              <FaQuoteLeft className="text-yellow-400 text-3xl mb-5" />

              <div className="flex text-yellow-400 mb-5">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <p className="text-gray-300">
                "{item.review}"
              </p>

              <h3 className="text-xl font-bold mt-6">
                {item.name}
              </h3>

              <p className="text-yellow-400 text-sm">
                {item.service}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}
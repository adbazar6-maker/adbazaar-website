"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useMemo, useState } from "react";
import Lightbox from "./Lightbox";

const categories = [
  "All",
  "Our Store",
  "Workspace",
  "Visiting Cards",
  "ACP Sign Board",
];

const galleryItems = [
  {
    title: "Ad Bazaar Shop",
    image: "/gallery/portfolio/shop-front.jpeg",
    category: "Our Store",
  },

  {
    title: "Shop Interior",
    image: "/gallery/portfolio/shop-interior.png",
    category: "Workspace",
  },

  {
    title: "Visiting Card",
    image: "/gallery/portfolio/visiting-Card-Front.jpg"
    category: "Visiting Cards",
  },

  {
    title: "Visiting Card Back",
    image: "/gallery/portfolio/visiting-card-back.jpeg",
    category: "Visiting Cards",
  },

  {
    title: "Dr Guddu ACP Board",
    image: "/gallery/portfolio/dr-guddu-acp-board.webp",
    category: "ACP Sign Board",
  },
];
  {
    title: "ACP Sign Board",
        category: "ACP Sign Board",
  },
];

console.log(galleryItems);
export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredItems = useMemo(() => {
    if (selectedCategory === "All") return galleryItems;

    return galleryItems.filter(
      (item) => item.category === selectedCategory
    );
  }, [selectedCategory]);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => setIsOpen(false);

  const nextImage = () =>
    setCurrentIndex((prev) => (prev + 1) % filteredItems.length);

  const prevImage = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + filteredItems.length) % filteredItems.length
    );

  return (
    <section
      id="gallery"
      className="bg-[#080808] text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-yellow-400 uppercase tracking-[5px] text-sm font-semibold">
            Our Portfolio
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Creative <span className="text-yellow-400">Gallery</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-5 leading-7">
            Explore our real printing work and branding projects.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full transition-all ${
                selectedCategory === category
                  ? "bg-yellow-400 text-black font-semibold"
                  : "bg-[#151515] hover:bg-yellow-400 hover:text-black"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

  {filteredItems.map((item, index) => (
                  
            <motion.div
              key={item.image}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              onClick={() => openLightbox(index)}
              className="
                group
                rounded-3xl
                overflow-hidden
                bg-[#151515]
                border
                border-gray-800
                hover:border-yellow-400
                transition-all
                cursor-pointer
              "
            >
              <div className="relative w-full h-[280px]">

                <Image
  src={item.image}
  alt={item.title}
  fill
  className="object-cover"
  unoptimized
/>

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6">

                  <h3 className="text-xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="text-yellow-400 mt-2">
                    {item.category}
                  </p>

                </div>

              </div>

                        </motion.div>
          ))}
        </div>

      </div>

      <Lightbox
        images={filteredItems}
        currentIndex={currentIndex}
        isOpen={isOpen}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </section>
  );
}
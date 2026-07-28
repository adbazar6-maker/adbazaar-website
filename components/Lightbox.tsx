"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface LightboxProps {
  images: {
    title: string;
    image: string;
    category: string;
  }[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onPrev,
  onNext,
}: LightboxProps) {
  if (!isOpen) return null;

  const current = images[currentIndex];

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white text-3xl hover:text-yellow-400 transition"
        >
          <FaTimes />
        </button>

        {/* Previous */}
        <button
          onClick={onPrev}
          className="absolute left-5 text-white text-3xl hover:text-yellow-400 transition"
        >
          <FaChevronLeft />
        </button>

        {/* Image */}
        <motion.div
          key={current.image}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="relative w-[90vw] h-[80vh]"
        >
          <Image
            src={current.image}
            alt={current.title}
            fill
            className="object-contain rounded-xl"
          />
        </motion.div>

        {/* Next */}
        <button
          onClick={onNext}
          className="absolute right-5 text-white text-3xl hover:text-yellow-400 transition"
        >
          <FaChevronRight />
        </button>

        {/* Caption */}
        <div className="absolute bottom-8 text-center">
          <h3 className="text-2xl font-bold text-white">
            {current.title}
          </h3>
          <p className="text-yellow-400">
            {current.category}
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useEffect } from "react";

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

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen) return null;

  const current = images[currentIndex];

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[999999] bg-black/90 backdrop-blur-md flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-50 text-white text-3xl hover:text-yellow-400"
        >
          <FaTimes />
        </button>

        {/* Previous */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-6 z-50 text-white text-3xl hover:text-yellow-400"
        >
          <FaChevronLeft />
        </button>

        {/* Image */}
        <motion.div
          key={current.image}
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.85, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="relative w-[90vw] max-w-6xl h-[85vh]"
        >
          <Image
            src={current.image}
            alt={current.title}
            fill
            className="object-contain rounded-xl"
            priority
          />
        </motion.div>

        {/* Next */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-6 z-50 text-white text-3xl hover:text-yellow-400"
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
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const images = [
  "/gallery/IMG_20260509_204653.jpg",
  "/gallery/IMG_20260509_204659.jpg",
  "/gallery/IMG_20260509_204701.jpg",
  "/gallery/IMG_20260520_182632.jpg",
  "/gallery/IMG_20260528_213659.jpg",
  "/gallery/IMG_20260528_213712.jpg",
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-lg aspect-[4/5] rounded-3xl overflow-hidden border border-yellow-500/30 shadow-2xl">

      <Image
        src={images[current]}
        alt="Ad Bazaar Portfolio"
        fill
        priority
        className="object-cover transition-all duration-700"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-white text-2xl font-bold">
          Ad Bazaar
        </h3>

        <p className="text-yellow-400 mt-1">
          Premium Printing & Branding Solutions
        </p>
      </div>

    </div>
  );
}
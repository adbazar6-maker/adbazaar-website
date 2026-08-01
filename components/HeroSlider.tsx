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
    <div
      className="
        relative
        w-full
        max-w-xl
        h-[550px]
        overflow-hidden
        rounded-3xl
        border
        border-yellow-500/30
        shadow-2xl
        group
      "
    >
      <Image
        src={images[current]}
        alt="Ad Bazaar"
        fill
        priority
        sizes="(max-width:768px) 100vw, 600px"
        className="object-cover transition-all duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6">
        <h2 className="text-3xl font-bold text-white">
          Ad Bazaar
        </h2>

        <p className="mt-2 text-yellow-400">
          Premium Printing & Branding Solutions
        </p>
      </div>

      <div className="absolute bottom-6 right-6 flex gap-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 rounded-full transition-all ${
              current === index
                ? "bg-yellow-400 w-6"
                : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
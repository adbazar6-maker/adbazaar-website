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
    <div className="w-full h-[550px] bg-red-500 rounded-3xl flex items-center justify-center">
      <h1 className="text-5xl font-bold text-white">
        HERO SLIDER WORKING
      </h1>
    </div>
  );
}
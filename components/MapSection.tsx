"use client";

import { FaMapMarkedAlt, FaDirections } from "react-icons/fa";

export default function MapSection() {
  return (
    <section className="bg-[#080808] py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">
          <p className="text-yellow-400 uppercase tracking-[5px] text-sm font-semibold">
            Our Location
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Visit <span className="text-yellow-400">Ad Bazaar</span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Visit our shop for Digital Printing, Flex Printing,
            ACP Sign Boards, Wedding Cards and complete Branding Solutions.
          </p>
        </div>

        <div className="rounded-3xl overflow-hidden border border-yellow-500/30 shadow-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4396.56613830447!2d80.38895527542257!3d26.420819876943806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c41f96da0c20b%3A0x4cf7409d11d7b5e6!2sAd%20Bazaar!5e1!3m2!1sen!2sin!4v1785328853993!5m2!1sen!2sin"
            width="100%"
            height="500"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>

        <div className="flex flex-wrap justify-center gap-5 mt-10">

          <a
            href="https://maps.app.goo.gl/ZeWVwhoA7Nf9e66Q9"
            target="_blank"
            className="flex items-center gap-3 bg-yellow-400 text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition"
          >
            <FaDirections />
            Get Directions
          </a>

          <a
            href="tel:+919026283091"
            className="flex items-center gap-3 border border-yellow-400 text-yellow-400 px-8 py-4 rounded-full font-bold hover:bg-yellow-400 hover:text-black transition"
          >
            <FaMapMarkedAlt />
            Visit Our Store
          </a>

        </div>

      </div>
    </section>
  );
}
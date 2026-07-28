"use client";

import { FaMapMarkerAlt, FaClock, FaPhoneAlt } from "react-icons/fa";

export default function MapSection() {
  return (
    <section className="bg-[#0B0B0B] text-white py-20 px-6">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">

        <div className="h-[400px] rounded-3xl overflow-hidden border border-gray-800">

          <iframe
            src="https://www.google.com/maps?q=Ad%20Bazaar%20Kanpur&output=embed"
            width="100%"
            height="100%"
            style={{border:0}}
            loading="lazy"
          ></iframe>

        </div>


        <div className="bg-[#151515] border border-gray-800 rounded-3xl p-8">

          <h2 className="text-4xl font-bold text-yellow-400 mb-8">
            Ad Bazaar
          </h2>


          <p className="flex gap-4 mb-6">
            <FaMapMarkerAlt className="text-yellow-400 text-xl"/>
            65-A, Pardevanpurwa, Lal Bangla, Kanpur
          </p>


          <p className="flex gap-4 mb-6">
            <FaClock className="text-yellow-400 text-xl"/>
            10:00 AM - 9:00 PM
          </p>


          <p className="flex gap-4">
            <FaPhoneAlt className="text-yellow-400 text-xl"/>
            +91 9026283091
          </p>


        </div>

      </div>

    </section>
  );
}
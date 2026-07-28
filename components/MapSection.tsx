"use client";

import { FaMapMarkerAlt, FaClock, FaPhoneAlt } from "react-icons/fa";

export default function MapSection() {
  return (
    <section className="bg-black text-white py-16 px-6">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-yellow-400 text-center mb-10">
          Visit Ad Bazaar
        </h2>


        <div className="grid md:grid-cols-2 gap-8">


          <iframe
            src="https://www.google.com/maps?q=Ad%20Bazaar%20Kanpur&output=embed"
            className="w-full h-[350px] rounded-2xl"
            loading="lazy"
          ></iframe>



          <div className="bg-[#151515] p-8 rounded-2xl border border-gray-800">

            <h3 className="text-3xl font-bold mb-6">
              Ad Bazaar
            </h3>


            <p className="flex gap-3 mb-5">
              <FaMapMarkerAlt className="text-yellow-400"/>
              65-A, Pardevanpurwa, Lal Bangla, Kanpur
            </p>


            <p className="flex gap-3 mb-5">
              <FaClock className="text-yellow-400"/>
              10 AM - 9 PM
            </p>


            <p className="flex gap-3">
              <FaPhoneAlt className="text-yellow-400"/>
              +91 9026283091
            </p>


          </div>

        </div>

      </div>

    </section>
  );
}
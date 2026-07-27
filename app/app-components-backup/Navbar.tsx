"use client";

import { useState } from "react";

export default function Navbar() {

  const [open, setOpen] = useState(false);


  return (

    <nav className="bg-black text-white sticky top-0 z-50 shadow-lg border-b border-yellow-500">

      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">


        {/* Logo */}

        <div>

          <h1 className="text-3xl font-bold text-yellow-400">
            Ad Bazaar
          </h1>

          <p className="text-xs text-gray-300">
            All Type of Printing Solution
          </p>

        </div>



        {/* Desktop Menu */}

        <div className="hidden md:flex items-center gap-8">


          <a
            href="#"
            className="hover:text-yellow-400 transition"
          >
            Home
          </a>


          <a
            href="#services"
            className="hover:text-yellow-400 transition"
          >
            Services
          </a>


          <a
            href="#gallery"
            className="hover:text-yellow-400 transition"
          >
            Gallery
          </a>


          <a
            href="#contact"
            className="hover:text-yellow-400 transition"
          >
            Contact
          </a>


          <a
            href="tel:9026283091"
            className="bg-yellow-400 text-black px-5 py-2 rounded-full font-bold"
          >
            Call Now
          </a>


        </div>




        {/* Mobile Button */}

        <button
          className="md:hidden text-yellow-400 text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>



      </div>




      {/* Mobile Menu */}

      {open && (

        <div className="md:hidden bg-gray-900 px-6 py-5 space-y-4">


          <a className="block hover:text-yellow-400">
            Home
          </a>


          <a className="block hover:text-yellow-400">
            Services
          </a>


          <a className="block hover:text-yellow-400">
            Gallery
          </a>


          <a className="block hover:text-yellow-400">
            Contact
          </a>


          <a
            href="https://wa.me/919026283091"
            target="_blank"
            className="block bg-green-500 text-center py-2 rounded-full font-bold"
          >
            WhatsApp
          </a>


        </div>

      )}



    </nav>

  );

}
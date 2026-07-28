"use client";

import { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-xl border-b border-yellow-500/10">

      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}

        <a href="#" className="leading-tight">

          <h1 className="text-2xl font-bold text-yellow-400">
            Ad Bazaar
          </h1>

          <p className="text-xs text-gray-400">
            All Type of Printing Solution
          </p>

        </a>

        {/* Desktop Menu */}

        <nav className="hidden lg:flex items-center gap-8">

          {menuItems.map((item) => (

            <a
              key={item.name}
              href={item.href}
              className="text-gray-300 hover:text-yellow-400 transition"
            >
              {item.name}
            </a>

          ))}

        </nav>

        {/* Desktop Buttons */}

        <div className="hidden lg:flex items-center gap-3">

          <a
            href="https://wa.me/919026283091"
            target="_blank"
            className="btn-secondary flex items-center gap-2"
          >
            <FaWhatsapp />
            WhatsApp
          </a>

          <a
            href="tel:+919026283091"
            className="btn-primary flex items-center gap-2"
          >
            <FaPhoneAlt />
            Call Now
          </a>

        </div>

        {/* Mobile Button */}

        <button
          className="lg:hidden text-yellow-400 text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (

        <div className="lg:hidden bg-[#111] border-t border-yellow-500/20">

          <div className="flex flex-col p-6 gap-5">

            {menuItems.map((item) => (

              <a
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 hover:text-yellow-400"
              >
                {item.name}
              </a>

            ))}

            <a
              href="https://wa.me/919026283091"
              className="btn-secondary text-center"
            >
              WhatsApp
            </a>

            <a
              href="tel:+919026283091"
              className="btn-primary text-center"
            >
              Call Now
            </a>

          </div>

        </div>

      )}

    </header>
  );
}
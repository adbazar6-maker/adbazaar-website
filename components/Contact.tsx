"use client";

import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

const contactItems = [
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    text: (
      <>
        <a
          href="https://maps.google.com/?q=Ad+Bazaar+Lal+Bangla+Kanpur"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-400 transition"
        >
          65-A, Pardevanpurwa
          <br />
          Near Poonam Talkies
          <br />
          Lal Bangla, Kanpur
        </a>
      </>
    ),
  },
  {
    icon: <FaPhoneAlt />,
    title: "Call Us",
    text: (
      <>
        <a
          href="tel:+919026283091"
          className="hover:text-yellow-400 transition"
        >
          +91 9026283091
        </a>
        <br />
        <a
          href="tel:+917355470776"
          className="hover:text-yellow-400 transition"
        >
          +91 7355470776
        </a>
      </>
    ),
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    text: (
      <a
        href="mailto:adbazar6@gmail.com"
        className="hover:text-yellow-400 transition"
      >
        adbazar6@gmail.com
      </a>
    ),
  },
  {
    icon: <FaClock />,
    title: "Business Hours",
    text: (
      <>
        Monday - Sunday
        <br />
        10:00 AM – 9:00 PM
      </>
    ),
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#080808] text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-yellow-400 uppercase tracking-[5px] text-sm font-semibold">
            Contact Us
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Let's Build Your{" "}
            <span className="text-yellow-400">Brand</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-5">
            Get in touch with Ad Bazaar for premium printing,
            signage and branding solutions.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-[#151515] border border-gray-800 hover:border-yellow-400 rounded-3xl p-8 text-center transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-yellow-300 to-yellow-500 text-black flex items-center justify-center text-3xl mb-5">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold mb-3">
                {item.title}
              </h3>

              <div className="text-gray-400 leading-7">
                {item.text}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.form
          action="https://formspree.io/f/meeydarn"
          method="POST"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mt-16"
        >
          <div className="grid md:grid-cols-2 gap-6">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="bg-[#151515] border border-gray-700 rounded-xl p-4 text-white outline-none focus:border-yellow-400"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Mobile Number"
              required
              className="bg-[#151515] border border-gray-700 rounded-xl p-4 text-white outline-none focus:border-yellow-400"
            />

          </div>

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="w-full mt-6 bg-[#151515] border border-gray-700 rounded-xl p-4 text-white outline-none focus:border-yellow-400"
          />

          <textarea
            name="message"
            rows={5}
            placeholder="Tell us about your printing requirement..."
            required
            className="w-full mt-6 bg-[#151515] border border-gray-700 rounded-xl p-4 text-white resize-none outline-none focus:border-yellow-400"
          />
                    <button
            type="submit"
            className="
              mt-8
              w-full
              bg-gradient-to-r
              from-yellow-300
              to-yellow-500
              text-black
              font-bold
              py-4
              rounded-xl
              hover:scale-[1.02]
              transition-all
              duration-300
            "
          >
            Send Inquiry
          </button>

        </motion.form>

        {/* Google Map */}
        <div className="mt-20">

          <h3 className="text-3xl font-bold text-center mb-8">
            Find Us On{" "}
            <span className="text-yellow-400">
              Google Maps
            </span>
          </h3>

          <div className="overflow-hidden rounded-3xl border border-gray-800 shadow-2xl">

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4396.566137425426!2d80.39153019999999!3d26.420819899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c41f96da0c20b%3A0x4cf7409d11d7b5e6!2sAd%20Bazaar!5e1!3m2!1sen!2sin!4v1785395647428!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              title="Ad Bazaar Location"
            />

          </div>

        </div>
              </div>
    </section>
  );
}
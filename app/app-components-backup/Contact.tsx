"use client";

import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";


export default function Contact() {

  return (

    <section
      id="contact"
      className="bg-[#0B0B0B] text-white py-24 px-6"
    >

      <div className="max-w-7xl mx-auto">


        {/* Heading */}

        <motion.div
          initial={{opacity:0,y:30}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          className="text-center mb-16"
        >

          <p className="text-yellow-400 uppercase tracking-[4px] font-semibold">
            Contact Us
          </p>


          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Let's Start Your Project
          </h2>


          <p className="text-gray-400 mt-5">
            Get premium printing solutions for your business.
          </p>

        </motion.div>




        <div className="grid lg:grid-cols-2 gap-12">



          {/* Left Information */}


          <div>


            <h3 className="text-3xl font-bold mb-6">
              Ad Bazaar
            </h3>


            <p className="text-gray-400 leading-7 mb-8">
              All Type of Printing Solution.
              Digital Printing, Flex, ACP Sign Board,
              Glow Sign, Wallpaper, Branding and complete
              printing solutions in Kanpur.
            </p>



            <div className="space-y-5">


              <div className="flex items-center gap-4">

                <div className="bg-yellow-400 text-black p-3 rounded-full">
                  <FaPhoneAlt/>
                </div>

                <div>
                  <p className="text-gray-400 text-sm">
                    Call Us
                  </p>

                  <p className="font-semibold">
                    +91 9026283091
                  </p>
                </div>

              </div>



              <div className="flex items-center gap-4">

                <div className="bg-yellow-400 text-black p-3 rounded-full">
                  <FaWhatsapp/>
                </div>

                <div>
                  <p className="text-gray-400 text-sm">
                    WhatsApp
                  </p>

                  <p className="font-semibold">
                    +91 9026283091
                  </p>
                </div>

              </div>



              <div className="flex items-center gap-4">

                <div className="bg-yellow-400 text-black p-3 rounded-full">
                  <FaMapMarkerAlt/>
                </div>

                <div>
                  <p className="text-gray-400 text-sm">
                    Address
                  </p>

                  <p className="font-semibold">
                    Lal Bangla, Kanpur
                  </p>
                </div>

              </div>



              <div className="flex items-center gap-4">

                <div className="bg-yellow-400 text-black p-3 rounded-full">
                  <FaEnvelope/>
                </div>

                <div>
                  <p className="text-gray-400 text-sm">
                    Email
                  </p>

                  <p className="font-semibold">
                    adbazar6@gmail.com
                  </p>
                </div>

              </div>


            </div>


          </div>





          {/* Form */}


          <motion.div

            initial={{opacity:0,x:40}}
            whileInView={{opacity:1,x:0}}
            viewport={{once:true}}

            className="
            bg-[#151515]
            border
            border-gray-800
            rounded-3xl
            p-8
            "

          >


            <h3 className="text-2xl font-bold mb-6">
              Get Free Quote
            </h3>



            <div className="space-y-5">


              <input
                type="text"
                placeholder="Your Name"
                className="
                w-full
                bg-black
                border
                border-gray-700
                rounded-xl
                px-5
                py-4
                outline-none
                focus:border-yellow-400
                "
              />



              <input
                type="tel"
                placeholder="Mobile Number"
                className="
                w-full
                bg-black
                border
                border-gray-700
                rounded-xl
                px-5
                py-4
                outline-none
                focus:border-yellow-400
                "
              />



              <select
                className="
                w-full
                bg-black
                border
                border-gray-700
                rounded-xl
                px-5
                py-4
                outline-none
                focus:border-yellow-400
                "
              >

                <option>Select Service</option>
                <option>Digital Printing</option>
                <option>Flex Printing</option>
                <option>ACP Sign Board</option>
                <option>Glow Sign</option>
                <option>Wedding Cards</option>
                <option>Branding</option>

              </select>



              <textarea

                rows={5}

                placeholder="Your Message"

                className="
                w-full
                bg-black
                border
                border-gray-700
                rounded-xl
                px-5
                py-4
                outline-none
                focus:border-yellow-400
                "

              />




              <a

                href="https://wa.me/919026283091"

                target="_blank"

                className="
                flex
                justify-center
                items-center
                gap-3
                bg-yellow-400
                text-black
                font-bold
                rounded-xl
                py-4
                hover:bg-yellow-300
                transition
                "

              >

                <FaWhatsapp/>
                Send Enquiry on WhatsApp

              </a>



            </div>


          </motion.div>


        </div>


      </div>


    </section>

  );
}
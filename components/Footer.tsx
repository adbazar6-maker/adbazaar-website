"use client";

import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";


export default function Footer() {

  return (

    <footer className="bg-black text-white border-t border-gray-800">


      <div className="max-w-7xl mx-auto px-6 py-16">


        <div className="grid md:grid-cols-4 gap-10">



          {/* Brand */}


          <motion.div
            initial={{opacity:0,y:30}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true}}
          >

            <h2 className="text-3xl font-bold text-yellow-400">
              Ad Bazaar
            </h2>


            <p className="text-gray-400 mt-5 leading-7">

              All Type of Printing Solution.
              Premium Digital Printing, Flex,
              ACP Sign Board, Glow Sign,
              Wallpaper & Branding Services.

            </p>


          </motion.div>




          {/* Services */}


          <div>

            <h3 className="text-xl font-bold mb-5">
              Services
            </h3>


            <ul className="space-y-3 text-gray-400">

              <li>Digital Printing</li>
              <li>Flex Printing</li>
              <li>ACP Sign Board</li>
              <li>Glow Sign Board</li>
              <li>Wedding Cards</li>
              <li>Corporate Branding</li>

            </ul>

          </div>





          {/* Quick Links */}


          <div>


            <h3 className="text-xl font-bold mb-5">
              Quick Links
            </h3>


            <ul className="space-y-3 text-gray-400">


              <li className="hover:text-yellow-400 cursor-pointer">
                Home
              </li>

              <li className="hover:text-yellow-400 cursor-pointer">
                About
              </li>

              <li className="hover:text-yellow-400 cursor-pointer">
                Services
              </li>

              <li className="hover:text-yellow-400 cursor-pointer">
                Gallery
              </li>

              <li className="hover:text-yellow-400 cursor-pointer">
                Contact
              </li>


            </ul>


          </div>






          {/* Contact */}


          <div>


            <h3 className="text-xl font-bold mb-5">
              Contact
            </h3>



            <div className="space-y-4 text-gray-400">



              <p className="flex gap-3 items-start">

                <FaMapMarkerAlt className="text-yellow-400 mt-1"/>

                65-A, Pardevanpurwa,
                Lal Bangla, Kanpur
                Near Poonam Talkies

              </p>




              <p className="flex gap-3 items-center">

                <FaPhoneAlt className="text-yellow-400"/>

                +91 9026283091

              </p>





              <p className="flex gap-3 items-center">

                <FaWhatsapp className="text-yellow-400"/>

                +91 7355470776

              </p>





              <p className="flex gap-3 items-center">

                <FaEnvelope className="text-yellow-400"/>

                adbazar6@gmail.com

              </p>



            </div>


          </div>



        </div>





        {/* Social + Bottom */}


        <div className="
        border-t
        border-gray-800
        mt-12
        pt-8
        flex
        flex-col
        md:flex-row
        justify-between
        items-center
        gap-5
        ">



          <p className="text-gray-500 text-sm">

            © {new Date().getFullYear()} Ad Bazaar.
            All Rights Reserved.

          </p>





          <div className="flex gap-4">


            <a
              href="#"
              className="
              w-10
              h-10
              rounded-full
              bg-yellow-400
              text-black
              flex
              items-center
              justify-center
              hover:scale-110
              transition
              "
            >

              <FaFacebookF/>

            </a>




            <a
              href="#"
              className="
              w-10
              h-10
              rounded-full
              bg-yellow-400
              text-black
              flex
              items-center
              justify-center
              hover:scale-110
              transition
              "
            >

              <FaInstagram/>

            </a>


          </div>



        </div>



      </div>


    </footer>

  );
}
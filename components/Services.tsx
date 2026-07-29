"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import {
  FaPrint,
  FaImage,
  FaBuilding,
  FaLightbulb,
  FaIdCard,
  FaRing,
  FaFileAlt,
  FaPaintRoller,
  FaArrowRight,
  FaWhatsapp,
} from "react-icons/fa";


const services = [
  {
    icon: <FaPrint />,
    title: "Digital Printing",
    image: "/gallery/1181d4c3-5fcf-4352-922e-b6fcb9953dff.jpg",
    desc: "Premium digital printing with vibrant colors and sharp quality.",
  },

  {
    icon: <FaImage />,
    title: "Flex Printing",
    image: "/gallery/ad8e2f8b-91e6-46e1-8813-24053058799c.jpg",
    desc: "Indoor & outdoor flex printing for every business requirement.",
  },

  {
    icon: <FaBuilding />,
    title: "ACP Sign Boards",
    image: "/gallery/IMG_20260509_204653.jpg",
    desc: "Premium ACP signage for shops, offices and showrooms.",
  },

  {
    icon: <FaLightbulb />,
    title: "Glow Sign Boards",
    image: "/gallery/IMG_20260509_204659.jpg",
    desc: "LED illuminated glow sign boards with premium finishing.",
  },

  {
    icon: <FaIdCard />,
    title: "Visiting Cards",
    image: "/gallery/IMG_20260509_204701.jpg",
    desc: "Luxury business cards with modern premium finishes.",
  },

  {
    icon: <FaRing />,
    title: "Wedding Printing",
    image: "/gallery/IMG_20260520_182632.jpg",
    desc: "Elegant wedding cards and invitation printing solutions.",
  },

  {
    icon: <FaFileAlt />,
    title: "Brochure & Flyers",
    image: "/gallery/IMG_20260528_213659.jpg",
    desc: "Professional brochures, flyers and marketing materials.",
  },

  {
    icon: <FaPaintRoller />,
    title: "Branding Solutions",
    image: "/gallery/IMG_20260528_213712.jpg",
    desc: "Complete indoor & outdoor branding for your business.",
  },

];


export default function Services() {

  return (

    <section
      id="services"
      className="bg-[#080808] text-white py-24 px-6"
    >

      <div className="max-w-7xl mx-auto">


        {/* Heading */}

        <div className="text-center mb-16">

          <p className="text-yellow-400 uppercase tracking-[5px] font-semibold text-sm">
            Our Services
          </p>


          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Complete Printing Solutions
          </h2>


          <p className="text-gray-400 max-w-2xl mx-auto mt-5 leading-7">
            From business cards to large format branding,
            Ad Bazaar provides complete printing solutions
            under one roof.
          </p>

        </div>



        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">


          {services.map((service,index)=>(


            <motion.div

              key={index}

              initial={{
                opacity:0,
                y:50
              }}

              whileInView={{
                opacity:1,
                y:0
              }}

              transition={{
                duration:.5,
                delay:index*0.08
              }}

              viewport={{
                once:true
              }}

              whileHover={{
                y:-12
              }}


              className="
              bg-[#151515]
border border-gray-800
hover:border-yellow-400
hover:shadow-2xl
hover:shadow-yellow-500/20
              rounded-3xl
              overflow-hidden
              transition-all
              duration-300
              group
              "

            >



              {/* Image */}

              <div className="relative h-52 overflow-hidden">


                <Image
  src={service.image}
  alt={service.title}
  fill
  sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 25vw"
  className="
    object-cover
    group-hover:scale-110
    transition duration-500
  "
/>


                <div className="
                absolute inset-0
                bg-gradient-to-t
                from-black
                via-transparent
                to-transparent
                " />

              </div>





              <div className="p-7">



                {/* Icon */}

                <div
                className="
                w-14 h-14
                rounded-2xl
                bg-gradient-to-br
                from-yellow-300
                to-yellow-500
                text-black
                flex items-center justify-center
                text-2xl
                mb-5
                "
                >

                  {service.icon}

                </div>





                <h3 className="text-xl font-bold mb-3">

                  {service.title}

                </h3>




                <p className="text-gray-400 leading-7 text-sm">

                  {service.desc}

                </p>





                <button

                className="
                mt-6
                flex items-center gap-3
                text-yellow-400
                font-semibold
                group-hover:gap-5
                transition-all
                "

                >

                  Book Now →

                  <FaArrowRight />

                </button>


              </div>


            </motion.div>


          ))}



        </div>





        {/* WhatsApp CTA */}

        <div className="text-center mt-16">


          <a

          href="https://wa.me/919026283091"

          target="_blank"

          className="
          inline-flex
          items-center
          gap-3
          bg-green-500
          text-white
          px-8
          py-4
          rounded-full
          font-semibold
          hover:scale-105
          transition
          "

          >

            <FaWhatsapp className="text-2xl"/>

            Get Printing Quote

          </a>


        </div>



      </div>


    </section>

  );

}
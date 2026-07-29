"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import Lightbox from "./Lightbox";

const galleryItems = [
  {
    title: "Digital Printing Work",
    image: "/gallery/IMG_20260509_204653.jpg",
    category: "Digital Printing",
  },

  {
    title: "Branding Work",
    image: "/gallery/IMG_20260509_204659.jpg",
    category: "Business Branding",
  },

  {
    title: "Sign Board Work",
    image: "/gallery/IMG_20260509_204701.jpg",
    category: "Signage Solutions",
  },

  {
    title: "Flex Printing",
    image: "/gallery/IMG_20260520_182632.jpg",
    category: "Outdoor Printing",
  },

  {
    title: "Interior Branding",
    image: "/gallery/IMG_20260528_213659.jpg",
    category: "Interior Work",
  },

  {
    title: "Creative Printing",
    image: "/gallery/IMG_20260528_213712.jpg",
    category: "Custom Printing",
  },

  {
    title: "Ad Bazaar Projects",
    image: "/gallery/1181d4c3-5fcf-4352-922e-b6fcb9953dff.jpg",
    category: "Latest Work",
  },

  {
    title: "Printing Solutions",
    image: "/gallery/ad8e2f8b-91e6-46e1-8813-24053058799c.jpg",
    category: "All Type Printing",
  },
];


export default function Gallery() {

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);


  const openLightbox = (index:number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };


  const closeLightbox = () => {
    setIsOpen(false);
  };


  const nextImage = () => {
    setCurrentIndex(
      (prev) => (prev + 1) % galleryItems.length
    );
  };


  const prevImage = () => {
    setCurrentIndex(
      (prev) =>
      (prev - 1 + galleryItems.length) % galleryItems.length
    );
  };


  return (

    <section
      id="gallery"
      className="bg-[#080808] text-white py-24 px-6"
    >

      <div className="max-w-7xl mx-auto">


        {/* Heading */}

        <motion.div

          initial={{
            opacity:0,
            y:40
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          transition={{
            duration:.6
          }}

          viewport={{
            once:true
          }}

          className="text-center mb-16"

        >

          <p className="
          text-yellow-400
          uppercase
          tracking-[5px]
          text-sm
          font-semibold
          ">
            Our Portfolio
          </p>


          <h2 className="
          text-4xl
          md:text-5xl
          font-bold
          mt-4
          ">
            Creative 
            <span className="text-yellow-400">
              Gallery
            </span>
          </h2>


          <p className="
          text-gray-400
          max-w-2xl
          mx-auto
          mt-5
          leading-7
          ">
            Explore our latest printing projects including
            digital printing, signage, branding and customized solutions.
          </p>


        </motion.div>



        {/* Gallery Grid */}


        <div className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-4
        gap-8
        ">


          {
            galleryItems.map((item,index)=>(


              <motion.div

                key={index}

                initial={{
                  opacity:0,
                  scale:.9
                }}

                whileInView={{
                  opacity:1,
                  scale:1
                }}

                transition={{
                  duration:.5,
                  delay:index*0.08
                }}

                viewport={{
                  once:true
                }}


                whileHover={{
                  y:-10
                }}


                onClick={() => openLightbox(index)}


                className="
                group
                cursor-pointer
                relative
                overflow-hidden
                rounded-3xl
                border
                border-gray-800
                bg-[#151515]
                hover:border-yellow-400
                hover:shadow-2xl
                hover:shadow-yellow-500/20
                transition
                duration-300
                "

              >


                <div className="
                relative
                h-72
                w-full
                overflow-hidden
                ">


                  <Image

                    src={item.image}

                    alt={item.title}

                    fill

                    sizes="
                    (max-width:768px) 100vw,
                    (max-width:1200px) 50vw,
                    25vw
                    "

                    className="
                    object-cover
                    group-hover:scale-110
                    transition
                    duration-700
                    "

                  />



                  <div className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black
                  via-black/30
                  to-transparent
                  " />



                  <div className="
                  absolute
                  bottom-0
                  left-0
                  right-0
                  p-6
                  ">


                    <h3 className="
                    text-xl
                    font-bold
                    ">
                      {item.title}
                    </h3>


                    <p className="
                    text-yellow-400
                    text-sm
                    mt-2
                    ">
                      {item.category}
                    </p>


                  </div>


                </div>


              </motion.div>


            ))
          }


        </div>



      </div>



      {/* Lightbox */}

      <Lightbox

        images={galleryItems}

        currentIndex={currentIndex}

        isOpen={isOpen}

        onClose={closeLightbox}

        onNext={nextImage}

        onPrev={prevImage}

      />


    </section>

  );
}
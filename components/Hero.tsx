"use client";

import { motion } from "framer-motion";

import {
  FaArrowRight,
  FaPhoneAlt,
  FaWhatsapp,
  FaStar,
  FaMapMarkerAlt,
  FaCheckCircle,
} from "react-icons/fa";

import HeroSlider from "./HeroSlider";


export default function Hero() {


return (
<section
  className="
    relative
    min-h-screen
    pt-24
    flex
    items-center
    bg-[#080808]
    overflow-hidden
  "
>





<div className="
relative
z-10
max-w-7xl
mx-auto
px-6
py-20
grid
lg:grid-cols-2
gap-12
items-center
">





{/* Left Content */}


<motion.div

initial={{
opacity:0,
x:-50
}}

animate={{
opacity:1,
x:0
}}

transition={{
duration:.8
}}

>



<div className="
inline-flex
items-center
gap-2
bg-yellow-400/10
border
border-yellow-400/30
text-yellow-400
px-5
py-2
rounded-full
text-sm
font-semibold
mb-6
">

★ Premium Printing Solutions

</div>






<h1 className="
text-5xl
md:text-7xl
font-extrabold
leading-tight
text-white
">


Build Your Brand With


<span className="
text-yellow-400
block
">

Ad Bazaar

</span>


</h1>







<h2 className="
text-2xl
md:text-3xl
text-gray-200
font-semibold
mt-6
">

Complete Printing & Branding Partner

</h2>







<p className="
text-gray-400
mt-6
text-lg
leading-8
max-w-xl
">

Digital Printing, Flex Printing, ACP Sign Boards,
Glow Sign, Wedding Cards, Business Branding
and complete advertising solutions in Kanpur.

</p>







{/* Buttons */}


<div className="
flex
flex-wrap
gap-4
mt-10
">


<a

href="tel:+919026283091"

className="
flex
items-center
gap-2
bg-gradient-to-r
from-yellow-300
to-yellow-500
text-black
px-7
py-3.5
rounded-full
font-bold
hover:scale-105
transition
"

>

<FaPhoneAlt/>

Call Now

</a>





<a

href="https://wa.me/919026283091"

target="_blank"

className="
flex
items-center
gap-2
border
border-green-500
text-green-400
px-7
py-3.5
rounded-full
font-bold
hover:bg-green-500
hover:text-white
transition
"

>

<FaWhatsapp/>

WhatsApp

</a>





<a

href="#contact"

className="
flex
items-center
gap-2
text-yellow-400
font-semibold
"

>

Get Free Quote

<FaArrowRight/>

</a>


</div>








{/* Trust Points */}


<div className="
grid
sm:grid-cols-2
gap-4
mt-12
text-sm
text-gray-300
">


<span className="
flex
items-center
gap-2
">

<FaCheckCircle className="text-yellow-400"/>

Premium Quality

</span>




<span className="
flex
items-center
gap-2
">

<FaCheckCircle className="text-yellow-400"/>

Fast Delivery

</span>





<span className="
flex
items-center
gap-2
">

<FaStar className="text-yellow-400"/>

5000+ Projects

</span>





<span className="
flex
items-center
gap-2
">

<FaMapMarkerAlt className="text-yellow-400"/>

Lal Bangla, Kanpur

</span>


</div>



</motion.div>









{/* Slider */}


<motion.div

initial={{
opacity:0,
x:50
}}

animate={{
opacity:1,
x:0
}}

transition={{
duration:.8
}}

className="
flex
justify-center
"

>

<div className="w-full h-[550px] rounded-3xl bg-yellow-400 flex items-center justify-center">
  <h2 className="text-4xl font-bold text-black">
    Hero Slider Test
  </h2>
</div>

</motion.div>





</div>


</section>

);

}
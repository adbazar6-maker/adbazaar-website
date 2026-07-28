"use client";

import { motion } from "framer-motion";

import {
  FaAward,
  FaClock,
  FaHandshake,
  FaPrint,
  FaCheckCircle,
  FaHeadset,
} from "react-icons/fa";


const reasons = [

  {
    icon: <FaAward />,
    title: "Premium Quality",
    text: "Sharp colors, premium materials and professional finishing for every project.",
  },

  {
    icon: <FaClock />,
    title: "On-Time Delivery",
    text: "We value your time and deliver every order within the committed schedule.",
  },

  {
    icon: <FaPrint />,
    title: "Complete Printing Solutions",
    text: "From visiting cards to ACP sign boards, everything under one roof.",
  },

  {
    icon: <FaHandshake />,
    title: "Trusted Since 2018",
    text: "Serving businesses across Kanpur with quality and reliability.",
  },

  {
    icon: <FaCheckCircle />,
    title: "5000+ Projects",
    text: "Successfully completed thousands of printing and branding projects.",
  },

  {
    icon: <FaHeadset />,
    title: "3000+ Happy Clients",
    text: "Customers trust us for consistent quality and dependable service.",
  },

];


export default function WhyChoose() {


return (

<section
className="
bg-[#080808]
text-white
py-24
px-6
"
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

Why Choose Us

</p>



<h2 className="
text-4xl
md:text-5xl
font-bold
mt-4
">

Why Businesses Trust 
<span className="text-yellow-400">
 Ad Bazaar
</span>

</h2>



<p className="
text-gray-400
max-w-2xl
mx-auto
mt-5
leading-7
">

We combine creative design, premium printing quality
and reliable service to help businesses build a strong brand presence.

</p>


</motion.div>





{/* Cards */}


<div className="
grid
md:grid-cols-2
lg:grid-cols-3
gap-8
">


{
reasons.map((item,index)=>(


<motion.div


key={index}


initial={{
opacity:0,
y:40
}}


whileInView={{
opacity:1,
y:0
}}


transition={{
duration:.5,
delay:index*.08
}}


viewport={{
once:true
}}


whileHover={{
y:-10
}}


className="
group
bg-[#151515]
border
border-gray-800
hover:border-yellow-400
rounded-3xl
p-8
transition-all
duration-300
hover:shadow-[0_0_30px_rgba(250,204,21,0.15)]
"

>


{/* Icon */}


<div
className="
w-16
h-16
rounded-2xl
bg-gradient-to-br
from-yellow-300
to-yellow-500
text-black
flex
items-center
justify-center
text-3xl
mb-6
group-hover:rotate-6
transition
"
>

{item.icon}

</div>




<h3 className="
text-2xl
font-bold
mb-3
">

{item.title}

</h3>



<p className="
text-gray-400
leading-7
">

{item.text}

</p>



</motion.div>


))

}


</div>



</div>


</section>

);

}
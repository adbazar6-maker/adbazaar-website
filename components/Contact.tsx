"use client";

import { motion } from "framer-motion";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaWhatsapp,
} from "react-icons/fa";


const contactItems = [

  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    text: (
      <>
        65-A, Pardevanpurwa
        <br />
        Near Poonam Talkies
        <br />
        Lal Bangla, Kanpur
      </>
    ),
  },


  {
    icon: <FaPhoneAlt />,
    title: "Call Us",
    text: (
      <>
        +91 9026283091
        <br />
        +91 7355470776
      </>
    ),
  },


  {
    icon: <FaEnvelope />,
    title: "Email",
    text: (
      <>
        adbazar6@gmail.com
      </>
    ),
  },


  {
    icon: <FaClock />,
    title: "Business Hours",
    text: (
      <>
        Monday - Sunday
        <br />
        10:00 AM - 9:00 PM
      </>
    ),
  },

];



export default function Contact() {


return (

<section
id="contact"
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
Contact Us
</p>


<h2 className="
text-4xl
md:text-5xl
font-bold
mt-4
">

Let's Build Your

<span className="text-yellow-400">
 Brand
</span>

</h2>


<p className="
text-gray-400
max-w-2xl
mx-auto
mt-5
">

Get in touch with Ad Bazaar for premium printing,
signage and branding solutions.

</p>

</motion.div>




{/* Contact Cards */}


<div className="
grid
md:grid-cols-2
lg:grid-cols-4
gap-8
">


{
contactItems.map((item,index)=>(


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
delay:index*.1
}}

viewport={{
once:true
}}

whileHover={{
y:-10
}}

className="
bg-[#151515]
border
border-gray-800
hover:border-yellow-400
rounded-3xl
p-8
text-center
transition-all
duration-300
"

>


<div className="
w-16
h-16
mx-auto
rounded-2xl
bg-gradient-to-br
from-yellow-300
to-yellow-500
text-black
flex
items-center
justify-center
text-3xl
mb-5
">

{item.icon}

</div>


<h3 className="
text-xl
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





{/* Inquiry Form */}


<motion.form

action="https://formspree.io/f/meeydarn"

method="POST"

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

className="
max-w-3xl
mx-auto
mt-16
"

>


<div className="
grid
md:grid-cols-2
gap-6
">


<input

type="text"

name="name"

placeholder="Your Name"

required

className="
bg-[#151515]
border
border-gray-700
rounded-xl
p-4
text-white
outline-none
focus:border-yellow-400
"

/>



<input

type="tel"

name="phone"

placeholder="Mobile Number"

required

className="
bg-[#151515]
border
border-gray-700
rounded-xl
p-4
text-white
outline-none
focus:border-yellow-400
"

/>


</div>



<input

type="email"

name="email"

placeholder="Email Address"

required

className="
w-full
mt-6
bg-[#151515]
border
border-gray-700
rounded-xl
p-4
text-white
outline-none
focus:border-yellow-400
"

/>




<textarea

name="message"

rows={5}

placeholder="Tell us about your printing requirement..."

required

className="
w-full
mt-6
bg-[#151515]
border
border-gray-700
rounded-xl
p-4
text-white
resize-none
outline-none
focus:border-yellow-400
"

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
transition
"

>

Send Inquiry

</button>



</motion.form>





{/* WhatsApp Button */}


<div className="text-center mt-12">


<a

href="https://wa.me/919026283091"

target="_blank"

className="
inline-flex
items-center
gap-3
bg-green-500
hover:bg-green-600
px-8
py-4
rounded-full
font-semibold
transition
hover:scale-105
"

>

<FaWhatsapp className="text-2xl"/>

Chat On WhatsApp

</a>


</div>



</div>


</section>


);

}
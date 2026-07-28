"use client";

import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";


const reviews = [

  {
    name: "Rajesh Kumar",
    service: "Flex Printing",
    review:
      "Excellent printing quality with fast delivery. Highly recommended for business branding.",
  },

  {
    name: "Amit Sharma",
    service: "ACP Sign Board",
    review:
      "Professional team, premium finishing and excellent customer support throughout the project.",
  },

  {
    name: "Pooja Gupta",
    service: "Wedding Cards",
    review:
      "Beautiful designs, vibrant printing and timely delivery. Amazing experience with Ad Bazaar.",
  },

];



export default function Reviews() {


return (

<section
id="reviews"
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

Customer Reviews

</p>



<h2 className="
text-4xl
md:text-5xl
font-bold
mt-4
">

What Our 
<span className="text-yellow-400">
 Clients Say
</span>

</h2>



<p className="
text-gray-400
max-w-2xl
mx-auto
mt-5
">

Customer satisfaction is our biggest achievement.

</p>


</motion.div>






{/* Review Cards */}


<div className="
grid
md:grid-cols-3
gap-8
">


{
reviews.map((item,index)=>(


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
relative
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



{/* Quote */}


<div className="
absolute
top-6
right-6
text-yellow-400/20
text-6xl
">

<FaQuoteLeft />

</div>





<div className="
flex
text-yellow-400
gap-1
mb-6
">

<FaStar/>
<FaStar/>
<FaStar/>
<FaStar/>
<FaStar/>

</div>





<p className="
text-gray-300
leading-7
relative
z-10
">

"{item.review}"

</p>






<div className="
mt-8
border-t
border-gray-700
pt-5
">


<h3 className="
text-xl
font-bold
">

{item.name}

</h3>



<p className="
text-yellow-400
text-sm
mt-1
">

{item.service}

</p>


</div>



</motion.div>


))

}



</div>



</div>


</section>

);

}
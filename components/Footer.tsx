"use client";

import AnimationWrapper from "./AnimationWrapper";

import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";


export default function Footer() {


return (

<footer
className="
bg-[#050505]
text-white
border-t
border-yellow-500/40
py-14
px-6
"
>


<div className="max-w-7xl mx-auto">


<AnimationWrapper>


<div className="
grid
md:grid-cols-2
lg:grid-cols-4
gap-10
">



{/* Brand */}


<div>

<h2 className="
text-4xl
font-bold
bg-gradient-to-r
from-yellow-300
to-yellow-600
bg-clip-text
text-transparent
">

Ad Bazaar

</h2>



<p className="
text-yellow-400
mt-3
font-semibold
">

All Type of Printing Solution

</p>



<p className="
text-gray-400
mt-5
leading-7
">

Professional Digital Printing,
Branding, Sign Boards and
Advertising Solutions for businesses
in Kanpur.

</p>


</div>






{/* Services */}


<div>


<h3 className="
text-xl
font-bold
text-yellow-400
mb-5
">

Our Services

</h3>



<ul className="
space-y-3
text-gray-400
">


<li>
Digital Printing
</li>


<li>
Flex Printing
</li>


<li>
ACP Sign Boards
</li>


<li>
Wedding Printing
</li>


<li>
Business Branding
</li>


</ul>


</div>







{/* Quick Links */}


<div>


<h3 className="
text-xl
font-bold
text-yellow-400
mb-5
">

Quick Links

</h3>



<ul className="
space-y-3
text-gray-400
">


<li>
<a href="#services" className="hover:text-yellow-400 transition">
Services
</a>
</li>


<li>
<a href="#gallery" className="hover:text-yellow-400 transition">
Gallery
</a>
</li>


<li>
<a href="#reviews" className="hover:text-yellow-400 transition">
Reviews
</a>
</li>


<li>
<a href="#contact" className="hover:text-yellow-400 transition">
Contact
</a>
</li>


</ul>


</div>







{/* Contact */}


<div>


<h3 className="
text-xl
font-bold
text-yellow-400
mb-5
">

Contact Us

</h3>




<p className="
text-gray-400
leading-7
flex
gap-3
">

<FaMapMarkerAlt className="text-yellow-400 mt-1"/>

65-A, Pardevanpurwa,
<br/>
Lal Bangla, Kanpur

</p>





<a
href="tel:+919026283091"
className="
flex
items-center
gap-3
mt-4
text-gray-400
hover:text-yellow-400
"
>

<FaPhoneAlt/>

+91 9026283091

</a>





<a

href="mailto:adbazar6@gmail.com"

className="
flex
items-center
gap-3
mt-3
text-gray-400
hover:text-yellow-400
"

>

<FaEnvelope/>

adbazar6@gmail.com

</a>





<a

href="https://wa.me/919026283091"

target="_blank"

className="
inline-flex
items-center
gap-3
mt-6
bg-green-500
px-6
py-3
rounded-full
font-semibold
hover:scale-105
transition
"

>


<FaWhatsapp/>

WhatsApp

</a>


</div>



</div>


</AnimationWrapper>







{/* Bottom */}


<div className="
border-t
border-gray-800
mt-12
pt-6
text-center
text-gray-500
">


<p>

© {new Date().getFullYear()} Ad Bazaar Kanpur.
All Rights Reserved.

</p>


<p className="mt-2 text-sm">

Designed & Developed with ❤️

</p>


</div>




</div>


</footer>

);

}
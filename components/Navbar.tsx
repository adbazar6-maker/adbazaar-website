"use client";

import { useState } from "react";

import {
  FaBars,
  FaTimes,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";


export default function Navbar() {


const [menuOpen,setMenuOpen] = useState(false);



const menuItems = [

{
name:"Home",
href:"#"
},

{
name:"About",
href:"#about"
},

{
name:"Services",
href:"#services"
},

{
name:"Gallery",
href:"#gallery"
},

{
name:"Reviews",
href:"#reviews"
},

{
name:"Contact",
href:"#contact"
},

];



return (


<header

className="
fixed
top-0
left-0
w-full
z-50
bg-black/80
backdrop-blur-xl
border-b
border-yellow-500/20
"

>


<div className="
max-w-7xl
mx-auto
px-6
h-20
flex
items-center
justify-between
">





{/* Logo */}


<a href="#" className="group">


<h1

className="
text-3xl
font-extrabold
bg-gradient-to-r
from-yellow-300
to-yellow-600
bg-clip-text
text-transparent
"

>

Ad Bazaar

</h1>



<p className="
text-xs
text-gray-400
tracking-wide
">

All Type of Printing Solution

</p>


</a>








{/* Desktop Menu */}


<nav className="
hidden
lg:flex
items-center
gap-8
">


{

menuItems.map((item)=>(


<a

key={item.name}

href={item.href}

className="
relative
text-gray-300
hover:text-yellow-400
transition
font-medium
group
"

>


{item.name}


<span

className="
absolute
left-0
bottom-[-8px]
w-0
h-[2px]
bg-yellow-400
group-hover:w-full
transition-all
"

></span>


</a>


))

}


</nav>








{/* Buttons */}


<div className="
hidden
lg:flex
items-center
gap-4
">


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
px-5
py-2.5
rounded-full
hover:bg-green-500
hover:text-white
transition
"

>


<FaWhatsapp/>

WhatsApp


</a>





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
px-5
py-2.5
rounded-full
font-semibold
hover:scale-105
transition
"

>


<FaPhoneAlt/>

Call Now


</a>


</div>









{/* Mobile Button */}


<button

className="
lg:hidden
text-yellow-400
text-2xl
"

onClick={()=>setMenuOpen(!menuOpen)}

>


{
menuOpen
?
<FaTimes/>
:
<FaBars/>
}

</button>



</div>










{/* Mobile Menu */}


{

menuOpen && (


<div

className="
lg:hidden
bg-[#111]
border-t
border-yellow-500/20
"

>


<div

className="
flex
flex-col
p-6
gap-5
"

>


{

menuItems.map((item)=>(


<a

key={item.name}

href={item.href}

onClick={()=>setMenuOpen(false)}

className="
text-gray-300
hover:text-yellow-400
transition
"

>

{item.name}

</a>


))


}



<a

href="https://wa.me/919026283091"

target="_blank"

className="
flex
justify-center
items-center
gap-2
border
border-green-500
text-green-400
py-3
rounded-full
"

>


<FaWhatsapp/>

WhatsApp


</a>





<a

href="tel:+919026283091"

className="
flex
justify-center
items-center
gap-2
bg-yellow-400
text-black
py-3
rounded-full
font-bold
"

>


<FaPhoneAlt/>

Call Now


</a>



</div>


</div>


)


}



</header>


);

}
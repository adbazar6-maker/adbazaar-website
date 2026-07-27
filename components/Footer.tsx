import AnimationWrapper from "./AnimationWrapper";

export default function Footer() {

  return (

    <footer className="bg-black text-white py-12 px-6 border-t border-yellow-500">


      <div className="max-w-6xl mx-auto">


        <AnimationWrapper>

          <div className="grid md:grid-cols-3 gap-10">


            {/* Brand */}

            <div>

              <h2 className="text-4xl font-bold text-yellow-400">
                Ad Bazaar
              </h2>


              <p className="mt-3 text-gray-300">
                All Type of Printing Solution
              </p>


              <p className="mt-4 text-gray-400 leading-relaxed">
                Professional Digital Printing, Branding,
                Sign Board and Advertising Solutions
                for businesses in Kanpur.
              </p>


            </div>





            {/* Quick Links */}

            <div>

              <h3 className="text-2xl font-bold text-yellow-400 mb-5">
                Quick Links
              </h3>


              <ul className="space-y-3 text-gray-300">


                <li>
                  <a 
                    href="#"
                    className="hover:text-yellow-400 transition"
                  >
                    Home
                  </a>
                </li>


                <li>
                  <a 
                    href="#services"
                    className="hover:text-yellow-400 transition"
                  >
                    Services
                  </a>
                </li>


                <li>
                  <a 
                    href="#gallery"
                    className="hover:text-yellow-400 transition"
                  >
                    Gallery
                  </a>
                </li>


                <li>
                  <a 
                    href="#contact"
                    className="hover:text-yellow-400 transition"
                  >
                    Contact
                  </a>
                </li>


              </ul>


            </div>






            {/* Contact */}

            <div>


              <h3 className="text-2xl font-bold text-yellow-400 mb-5">
                Contact Us
              </h3>



              <p className="text-gray-300">

                📍 65-A, Pardevanpurwa,
                <br />
                Lal Bangla, Kanpur
                <br />
                Near Poonam Talkies

              </p>



              <a
                href="tel:9026283091"
                className="block mt-3 text-gray-300 hover:text-yellow-400"
              >
                📞 +91 9026283091
              </a>



              <a
                href="mailto:adbazar6@gmail.com"
                className="block mt-2 text-gray-300 hover:text-yellow-400"
              >
                ✉️ adbazar6@gmail.com
              </a>



              <a
                href="https://wa.me/919026283091"
                target="_blank"
                className="inline-block mt-5 bg-green-500 text-white px-6 py-2 rounded-full font-bold hover:scale-105 transition"
              >
                WhatsApp
              </a>


            </div>


          </div>


        </AnimationWrapper>





        {/* Bottom */}

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">


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
import AnimationWrapper from "./AnimationWrapper";

export default function Contact() {

  return (

    <section 
      className="bg-black text-white py-20 px-6"
      id="contact"
    >

      <div className="max-w-6xl mx-auto">


        <AnimationWrapper>

          <div className="text-center mb-12">

            <h2 className="text-4xl md:text-5xl font-bold text-yellow-400">
              Contact Ad Bazaar
            </h2>

            <p className="text-gray-300 mt-4 text-lg">
              Need Printing Solution? Contact Us Today
            </p>

          </div>

        </AnimationWrapper>



        <div className="grid md:grid-cols-3 gap-8">


          <AnimationWrapper>

            <div className="border border-yellow-500 rounded-2xl p-8 text-center hover:bg-yellow-500 hover:text-black transition">

              <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                Address
              </h3>

              <p>
                65-A, Pardevanpurwa,
                <br />
                Lal Bangla, Kanpur
                <br />
                Near Poonam Talkies
              </p>

            </div>

          </AnimationWrapper>



          <AnimationWrapper>

            <div className="border border-yellow-500 rounded-2xl p-8 text-center hover:bg-yellow-500 hover:text-black transition">

              <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                Contact
              </h3>


              <a
                href="tel:9026283091"
                className="block mb-3"
              >
                📞 +91 9026283091
              </a>


              <a
                href="mailto:adbazar6@gmail.com"
              >
                ✉️ adbazar6@gmail.com
              </a>


            </div>

          </AnimationWrapper>




          <AnimationWrapper>

            <div className="border border-yellow-500 rounded-2xl p-8 text-center hover:bg-yellow-500 hover:text-black transition">

              <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                Business Hours
              </h3>


              <p>
                Monday - Sunday
                <br />
                10:00 AM - 9:00 PM
              </p>


              <a
                href="https://wa.me/919026283091"
                target="_blank"
                className="inline-block mt-5 bg-green-500 text-white px-6 py-2 rounded-full font-bold"
              >
                WhatsApp Now
              </a>


            </div>

          </AnimationWrapper>


        </div>



        <div className="mt-12 rounded-2xl overflow-hidden border border-yellow-500">

          <iframe
            src="https://www.google.com/maps?q=Ad%20Bazaar%20Kanpur&output=embed"
            width="100%"
            height="350"
            loading="lazy"
            className="border-0"
          ></iframe>

        </div>


      </div>


    </section>

  );

}
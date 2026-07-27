export default function Hero() {

  return (

    <section className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-24 px-6">


      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">


        <div>


          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">

            Complete Printing

            <span className="text-yellow-400">
              {" "}Solution
            </span>

            <br />

            For Your Business

          </h1>



          <p className="text-2xl mt-6 text-yellow-400 font-bold">
            Ad Bazaar Kanpur
          </p>



          <p className="text-gray-300 mt-5 text-lg leading-relaxed">

            Professional Digital Printing, Flex Printing,
            ACP Sign Board, Glow Sign Board, Branding
            and Complete Advertising Solutions under one roof.

          </p>



          <div className="flex flex-wrap gap-4 mt-8">


            <a
              href="tel:9026283091"
              className="bg-yellow-400 text-black px-7 py-3 rounded-full font-bold hover:scale-105 transition"
            >
              Call Now
            </a>



            <a
              href="https://wa.me/919026283091"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-7 py-3 rounded-full font-bold hover:scale-105 transition"
            >
              WhatsApp
            </a>


          </div>



          <div className="flex gap-6 mt-10">


            <div className="border border-yellow-400 rounded-xl px-5 py-3 text-center">

              <h3 className="text-2xl font-bold text-yellow-400">
                2018+
              </h3>

              <p className="text-sm text-gray-300">
                Experience
              </p>

            </div>



            <div className="border border-yellow-400 rounded-xl px-5 py-3 text-center">

              <h3 className="text-2xl font-bold text-yellow-400">
                3000+
              </h3>

              <p className="text-sm text-gray-300">
                Happy Clients
              </p>

            </div>


          </div>


        </div>





        <div className="bg-gradient-to-br from-gray-800 to-black rounded-3xl h-96 flex items-center justify-center border border-yellow-500 shadow-2xl">


          <div className="text-center">


            <div className="text-7xl mb-6">
              🖨️
            </div>


            <h2 className="text-4xl font-bold text-yellow-400">
              Ad Bazaar
            </h2>


            <p className="text-gray-300 mt-3 text-lg">
              Printing • Branding • Designing
            </p>


          </div>


        </div>


      </div>


    </section>

  );

}
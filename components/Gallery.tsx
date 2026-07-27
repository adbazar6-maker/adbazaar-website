import AnimationWrapper from "./AnimationWrapper";

export default function Gallery() {

  const gallery = [
    {
      title: "Flex Printing",
      image: "/gallery/flex.jpg",
      desc: "Premium quality flex printing for banners and advertisements."
    },
    {
      title: "ACP Sign Board",
      image: "/gallery/acp.jpg",
      desc: "Modern ACP signage solutions for business branding."
    },
    {
      title: "Glow Sign Board",
      image: "/gallery/glow.jpg",
      desc: "Attractive LED glow sign boards for better visibility."
    },
    {
      title: "Visiting Cards",
      image: "/gallery/card.jpg",
      desc: "Professional visiting cards with premium finishing."
    },
    {
      title: "Wedding Printing",
      image: "/gallery/wedding.jpg",
      desc: "Elegant wedding cards and invitation printing."
    },
    {
      title: "Shop Branding",
      image: "/gallery/branding.jpg",
      desc: "Complete shop branding and advertising solutions."
    }
  ];


  return (

    <section className="bg-gray-100 py-20 px-6">

      <div className="max-w-6xl mx-auto">


        <AnimationWrapper>

          <div className="text-center mb-12">

            <h2 className="text-4xl md:text-5xl font-bold text-black">
              Our Work Gallery
            </h2>

            <p className="text-gray-600 mt-4 text-lg">
              Quality Printing Work By Ad Bazaar
            </p>

          </div>

        </AnimationWrapper>



        <div className="grid md:grid-cols-3 gap-8">


          {gallery.map((item, index) => (

            <AnimationWrapper key={index}>

              <div
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500"
              >


                <div className="h-64 overflow-hidden bg-gray-300">


                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />


                </div>



                <div className="p-6 text-center">


                  <h3 className="text-2xl font-bold text-yellow-600">
                    {item.title}
                  </h3>


                  <p className="text-gray-600 mt-3">
                    {item.desc}
                  </p>


                  <button
                    className="mt-5 bg-black text-yellow-400 px-5 py-2 rounded-full font-semibold hover:bg-yellow-400 hover:text-black transition"
                  >
                    View Work
                  </button>


                </div>


              </div>


            </AnimationWrapper>

          ))}


        </div>


      </div>


    </section>

  );

}
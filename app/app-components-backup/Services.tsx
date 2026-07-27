import AnimationWrapper from "./AnimationWrapper";

export default function Services() {

  const services = [
    {
      icon: "🖨️",
      title: "Digital Printing",
      desc: "High quality digital printing for posters, flyers, brochures and complete marketing material."
    },
    {
      icon: "🪧",
      title: "Flex Printing",
      desc: "Premium flex printing for banners, hoardings and outdoor advertisements."
    },
    {
      icon: "🏢",
      title: "ACP Sign Board",
      desc: "Modern ACP signage solutions to give your business a premium look."
    },
    {
      icon: "✨",
      title: "Glow Sign Board",
      desc: "Attractive LED glow sign boards for better brand visibility."
    },
    {
      icon: "💳",
      title: "Visiting Cards",
      desc: "Professional visiting cards with premium finishing and quality."
    },
    {
      icon: "💍",
      title: "Wedding Printing",
      desc: "Beautiful wedding cards and invitation printing with elegant designs."
    }
  ];


  return (

    <section className="bg-white py-20 px-6">

      <div className="max-w-6xl mx-auto">


        <AnimationWrapper>

          <div className="text-center mb-12">

            <h2 className="text-4xl md:text-5xl font-bold text-black">
              Our Printing Services
            </h2>

            <p className="text-gray-600 mt-4 text-lg">
              Complete Printing Solution Under One Roof
            </p>

          </div>

        </AnimationWrapper>



        <div className="grid md:grid-cols-3 gap-8">


          {services.map((service, index) => (

            <AnimationWrapper key={index}>

              <div
                className="bg-gray-100 rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl hover:-translate-y-3 transition duration-300 border-b-4 border-yellow-500"
              >

                <div className="text-6xl mb-5">
                  {service.icon}
                </div>


                <h3 className="text-2xl font-bold text-yellow-600">
                  {service.title}
                </h3>


                <p className="text-gray-600 mt-4 leading-relaxed">
                  {service.desc}
                </p>


              </div>


            </AnimationWrapper>

          ))}


        </div>


      </div>


    </section>

  );
}
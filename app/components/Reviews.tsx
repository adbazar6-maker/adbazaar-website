import AnimationWrapper from "./AnimationWrapper";
import {
  Printer,
  CreditCard,
  Signpost,
  Lightbulb,
  Heart,
  Building2
} from "lucide-react";


export default function Services() {


  const services = [

    {
      title: "Digital Printing",
      text: "High quality digital printing with sharp colors and premium finishing.",
      icon: Printer
    },

    {
      title: "Flex Printing",
      text: "Large format flex printing for banners, events and promotions.",
      icon: Signpost
    },

    {
      title: "ACP Sign Board",
      text: "Modern ACP signage solutions for shops and businesses.",
      icon: Building2
    },

    {
      title: "Glow Sign Board",
      text: "Attractive LED glow sign boards to highlight your brand.",
      icon: Lightbulb
    },

    {
      title: "Visiting Cards",
      text: "Premium visiting cards with elegant designs and finishing.",
      icon: CreditCard
    },

    {
      title: "Wedding Printing",
      text: "Beautiful wedding cards and invitation printing.",
      icon: Heart
    }

  ];


  return (

    <section className="bg-gray-100 py-20 px-6" id="services">


      <div className="max-w-6xl mx-auto">


        <AnimationWrapper>

          <div className="text-center mb-12">

            <h2 className="text-4xl md:text-5xl font-bold text-black">
              Our Services
            </h2>

            <p className="text-gray-600 mt-4 text-lg">
              Complete Printing & Branding Solutions Under One Roof
            </p>

          </div>

        </AnimationWrapper>



        <div className="grid md:grid-cols-3 gap-8">


          {services.map((service,index)=>{


            const Icon = service.icon;


            return (

              <AnimationWrapper key={index}>

                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 border-b-4 border-yellow-400 text-center">


                  <div className="flex justify-center mb-5">

                    <div className="bg-black p-4 rounded-full">

                      <Icon 
                        size={35}
                        className="text-yellow-400"
                      />

                    </div>

                  </div>


                  <h3 className="text-2xl font-bold text-black">
                    {service.title}
                  </h3>


                  <p className="text-gray-600 mt-4">
                    {service.text}
                  </p>


                </div>

              </AnimationWrapper>

            )

          })}


        </div>


      </div>


    </section>

  );

}
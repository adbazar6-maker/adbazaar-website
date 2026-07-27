import AnimationWrapper from "./AnimationWrapper";

export default function Gallery() {

  const images = [
    {
      title: "Flex Printing",
      image: "/gallery/1181d4c3-5fcf-4352-922e-b6fcb9953dff.jpg",
    },
    {
      title: "ACP Sign Board",
      image: "/gallery/ad8e2f8b-91e6-46e1-8813-24053058799c.jpg",
    },
    {
      title: "Glow Sign Board",
      image: "/gallery/Gemini_Generated_Image_8dh2eu8dh2eu8dh2.png",
    },
    {
      title: "Visiting Cards",
      image: "/gallery/IMG_20260509_204653.jpg",
    },
    {
      title: "Wedding Cards",
      image: "/gallery/IMG_20260520_182632.jpg",
    },
    {
      title: "Shop Branding",
      image: "/gallery/IMG_20260528_213659.jpg",
    },
  ];


  return (
    <section id="gallery" className="bg-gray-100 py-20 px-6">

      <div className="max-w-6xl mx-auto">

        <AnimationWrapper>

          <div className="text-center mb-12">

            <h2 className="text-4xl font-bold text-black">
              Our Gallery
            </h2>

            <p className="text-gray-600 mt-3">
              Premium Printing & Branding Work
            </p>

          </div>

        </AnimationWrapper>


        <div className="grid md:grid-cols-3 gap-8">

          {images.map((item,index)=>(

            <AnimationWrapper key={index}>

              <div className="bg-white rounded-2xl overflow-hidden shadow-lg">

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />

                <div className="p-4 text-center">
                  <h3 className="font-bold text-xl">
                    {item.title}
                  </h3>
                </div>

              </div>

            </AnimationWrapper>

          ))}

        </div>

      </div>

    </section>
  );
}
export default function Services() {
  const services = [
    "Digital Printing",
    "Flex Printing",
    "ACP Board",
    "Glow Sign Board",
    "Visiting Cards",
    "Wedding Printing",
    "Banner & Poster",
    "Interior Branding",
  ];

  return (
    <section className="bg-gray-100 py-16 px-6">
      
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-black">
          Our Printing Services
        </h2>

        <p className="text-gray-600 mt-3">
          Complete Printing Solutions Under One Roof
        </p>
      </div>


      <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">

        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg text-center hover:scale-105 transition"
          >

            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold text-xl">
              {index + 1}
            </div>

            <h3 className="font-semibold text-lg">
              {service}
            </h3>

            <p className="text-gray-500 text-sm mt-2">
              High Quality Printing With Professional Finish
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}
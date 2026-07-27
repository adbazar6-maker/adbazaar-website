import {
  FaAward,
  FaClock,
  FaThumbsUp,
  FaHeadset,
} from "react-icons/fa";

const features = [
  {
    icon: <FaAward size={40} />,
    title: "Premium Quality",
    text: "We use high-quality materials and modern printing technology.",
  },
  {
    icon: <FaClock size={40} />,
    title: "Fast Delivery",
    text: "Quick turnaround without compromising on quality.",
  },
  {
    icon: <FaThumbsUp size={40} />,
    title: "Affordable Pricing",
    text: "Best prices with premium finishing for every project.",
  },
  {
    icon: <FaHeadset size={40} />,
    title: "Customer Support",
    text: "Friendly support before, during and after every order.",
  },
];

export default function WhyChoose() {
  return (
    <section
      id="about"
      className="bg-slate-900 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-sky-400 uppercase font-semibold">
            Why Choose Us
          </p>

          <h2 className="text-5xl font-bold mt-3">
            Why Ad Bazaar?
          </h2>

          <p className="text-gray-400 mt-5 max-w-3xl mx-auto">
            We help businesses create a powerful brand identity through
            premium printing solutions, modern technology and reliable service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((item, index) => (
            <div
              key={index}
              className="bg-slate-950 rounded-3xl p-8 border border-slate-800 hover:border-sky-500 transition"
            >
              <div className="text-sky-400 mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold">
                {item.title}
              </h3>

              <p className="text-gray-400 mt-4">
                {item.text}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
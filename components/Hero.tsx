export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white px-6">
      <div className="text-center max-w-4xl">

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Ad Bazaar
        </h1>

        <p className="text-xl md:text-3xl text-yellow-400 mb-4">
          All Type of Printing Solution
        </p>

        <p className="text-gray-300 text-lg mb-8">
          Digital Printing | Flex Printing | ACP | Glow Sign Board |
          Wedding Printing | Branding Solutions
        </p>

        <div className="flex justify-center gap-4">
          <button className="bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold">
            Call Now
          </button>

          <button className="border border-yellow-500 text-yellow-400 px-8 py-3 rounded-full font-semibold">
            WhatsApp
          </button>
        </div>

      </div>
    </section>
  );
}
export default function Navbar() {
  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center">
      
      <div>
        <h1 className="text-2xl font-bold text-yellow-400">
          Ad Bazaar
        </h1>
        <p className="text-xs text-gray-300">
          All Type of Printing Solution
        </p>
      </div>

      <div className="hidden md:flex gap-8 items-center">
        <a href="#" className="hover:text-yellow-400">
          Home
        </a>

        <a href="#" className="hover:text-yellow-400">
          Services
        </a>

        <a href="#" className="hover:text-yellow-400">
          About
        </a>

        <a href="#" className="hover:text-yellow-400">
          Contact
        </a>

        <button className="bg-yellow-500 text-black px-5 py-2 rounded-full font-semibold">
          Call Now
        </button>
      </div>

    </nav>
  );
}
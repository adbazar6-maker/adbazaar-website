<input
  type="hidden"
  name="_next"
  value="http://localhost:3000/thank-you"
/>
import Link from "next/link";
import { FaCheckCircle, FaHome } from "react-icons/fa";

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-[#080808] flex items-center justify-center px-6">
      <div className="max-w-xl w-full bg-[#151515] border border-yellow-500/20 rounded-3xl p-10 text-center">

        <FaCheckCircle className="text-green-500 text-7xl mx-auto mb-6" />

        <h1 className="text-4xl font-bold text-white">
          Thank You!
        </h1>

        <p className="text-gray-400 mt-5 leading-7">
          Your inquiry has been submitted successfully.
          Our team will contact you as soon as possible.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-3 mt-8 bg-yellow-400 text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition"
        >
          <FaHome />
          Back to Home
        </Link>

      </div>
    </main>
  );
}
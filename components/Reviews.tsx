export default function Reviews() {
  return (
    <section className="bg-gray-100 py-16 px-6">

      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-4xl font-bold text-black">
          Customer Reviews
        </h2>

        <p className="text-gray-600 mt-4">
          Our customers trust Ad Bazaar for quality printing service.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div className="bg-white p-6 rounded-xl shadow">
            ⭐⭐⭐⭐⭐
            <p className="mt-3">
              Excellent printing quality and fast service.
            </p>
            <b>Rajesh Kumar</b>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            ⭐⭐⭐⭐⭐
            <p className="mt-3">
              Professional work and premium finishing.
            </p>
            <b>Amit Sharma</b>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            ⭐⭐⭐⭐⭐
            <p className="mt-3">
              Best printing solution for business branding.
            </p>
            <b>Pooja Gupta</b>
          </div>

        </div>

      </div>

    </section>
  );
}
export default function HomePage() {
  return (
    <main className="space-y-16">

      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-400 text-white py-24 text-center rounded-xl shadow-lg">
        <h1 className="text-5xl font-bold mb-6">
          Jaliwa Freight Ltd
        </h1>

        <p className="text-xl max-w-3xl mx-auto">
          Global Freight & Cargo Logistics Company delivering reliable,
          secure and efficient transportation solutions worldwide.
        </p>

        <div className="mt-10 flex justify-center gap-6">
          <a
            href="/quote"
            className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow hover:scale-105 transition"
          >
            Get Quote
          </a>

          <a
            href="/track"
            className="border-2 border-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-700 transition"
          >
            Track Shipment
          </a>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold text-blue-700 mb-6">
          About Our Company
        </h2>

        <p className="text-gray-700 text-lg leading-relaxed">
          Jaliwa Freight Ltd is a trusted logistics and cargo solutions
          provider specializing in international freight forwarding,
          shipment tracking, and supply chain management. We connect
          businesses and individuals globally through efficient transport
          systems and reliable logistics expertise.
        </p>
      </section>

      {/* ================= EXPERIENCE ================= */}
      <section className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">

        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">
          <h3 className="text-2xl font-bold text-blue-600 mb-4">
            Our Experience
          </h3>
          <p className="text-gray-600">
            Years of logistics expertise handling air, sea, and land cargo
            operations with efficiency and professionalism.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">
          <h3 className="text-2xl font-bold text-blue-600 mb-4">
            Our Vision
          </h3>
          <p className="text-gray-600">
            To become a leading global logistics partner recognized for
            innovation, reliability, and customer satisfaction.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">
          <h3 className="text-2xl font-bold text-blue-600 mb-4">
            Our Mission
          </h3>
          <p className="text-gray-600">
            Deliver safe, fast, and cost-effective freight solutions while
            building long-term relationships with our clients worldwide.
          </p>
        </div>

      </section>

      {/* ================= SERVICES ================= */}
      <section className="bg-sky-50 py-16 rounded-xl">
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-10">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h4 className="font-bold text-xl text-blue-600 mb-2">
              Air Freight
            </h4>
            <p>Fast international cargo delivery worldwide.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h4 className="font-bold text-xl text-blue-600 mb-2">
              Sea Freight
            </h4>
            <p>Reliable and economical shipping for large cargo.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h4 className="font-bold text-xl text-blue-600 mb-2">
              Cargo Tracking
            </h4>
            <p>Monitor shipments in real time anywhere.</p>
          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="text-center py-16 bg-gradient-to-r from-cyan-400 to-blue-600 text-white rounded-xl shadow-lg">
        <h2 className="text-4xl font-bold mb-4">
          Ready to Ship With Us?
        </h2>

        <p className="mb-6 text-lg">
          Request a quote today and experience professional logistics services.
        </p>

        <a
          href="/quote"
          className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:scale-105 transition"
        >
          Request Quote
        </a>
      </section>

    </main>
  );
}
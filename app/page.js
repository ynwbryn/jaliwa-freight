export default function HomePage() {
  return (
    <div>

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 text-white py-24 text-center px-6">
        <h1 className="text-5xl font-bold mb-6">
          Global Freight & Logistics Solutions
        </h1>

        <p className="max-w-3xl mx-auto text-lg mb-8">
          Jaliwa Freight Ltd is a trusted logistics and cargo solutions provider
          specializing in international freight forwarding, cargo tracking,
          and supply chain management. We connect businesses worldwide through
          reliable, secure, and efficient transport systems.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="/quote"
            className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold shadow hover:scale-105 transition"
          >
            Get a Quote
          </a>

          <a
            href="/track"
            className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-700 transition"
          >
            Track Shipment
          </a>
        </div>
      </section>


      {/* TRUST BAR */}
      <section className="bg-white py-6 text-center shadow">
        <p className="text-gray-700 font-medium">
          Reliable Logistics • Global Shipping Network • Secure Cargo Handling • Real-Time Tracking
        </p>
      </section>


      {/* ABOUT COMPANY */}
      <section className="bg-gradient-to-b from-slate-900 to-blue-900 py-20 text-white text-center px-6">
        <h2 className="text-4xl font-bold mb-6">About Our Company</h2>

        <p className="max-w-3xl mx-auto text-gray-200 mb-14">
          Jaliwa Freight Ltd is a leading logistics partner delivering
          international cargo transportation across air, sea, and land.
          With years of industry expertise, we provide reliable supply chain
          solutions designed to help businesses expand globally.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div className="bg-white text-gray-700 p-8 rounded-xl shadow-xl">
            <h3 className="text-xl font-bold text-blue-600 mb-3">
              Our Experience
            </h3>
            <p>
              Years of logistics expertise handling air, sea, and land cargo
              operations with efficiency and professionalism.
            </p>
          </div>

          <div className="bg-white text-gray-700 p-8 rounded-xl shadow-xl">
            <h3 className="text-xl font-bold text-blue-600 mb-3">
              Our Vision
            </h3>
            <p>
              To become a globally recognized logistics partner known for
              innovation, reliability, and exceptional customer service.
            </p>
          </div>

          <div className="bg-white text-gray-700 p-8 rounded-xl shadow-xl">
            <h3 className="text-xl font-bold text-blue-600 mb-3">
              Our Mission
            </h3>
            <p>
              Deliver safe, fast, and cost-effective freight solutions while
              building long-term partnerships with clients worldwide.
            </p>
          </div>

        </div>
      </section>


     {/* ================= SERVICES ================= */}
<section className="bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100 py-24">

  <h2 className="text-4xl font-bold text-center text-blue-800 mb-16">
    Our Services
  </h2>

  <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">

    {/* Air Freight */}
    <div className="bg-white/70 backdrop-blur-lg border border-blue-100 p-10 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-3 transition duration-300">
      <div className="text-4xl mb-4">✈️</div>
      <h3 className="text-xl font-bold text-blue-700 mb-3">
        Air Freight
      </h3>
      <p className="text-gray-600">
        Fast international cargo delivery worldwide with secure handling
        and efficient customs processing.
      </p>
    </div>

    {/* Sea Freight */}
    <div className="bg-white/70 backdrop-blur-lg border border-blue-100 p-10 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-3 transition duration-300">
      <div className="text-4xl mb-4">🚢</div>
      <h3 className="text-xl font-bold text-blue-700 mb-3">
        Sea Freight
      </h3>
      <p className="text-gray-600">
        Reliable and economical shipping solutions for large cargo and
        global import/export logistics.
      </p>
    </div>

    {/* Cargo Tracking */}
    <div className="bg-white/70 backdrop-blur-lg border border-blue-100 p-10 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-3 transition duration-300">
      <div className="text-4xl mb-4">📦</div>
      <h3 className="text-xl font-bold text-blue-700 mb-3">
        Cargo Tracking
      </h3>
      <p className="text-gray-600">
        Monitor shipments in real time through our advanced cargo tracking
        system available 24/7.
      </p>
    </div>

  </div>
</section>


{/* ================= WHY CHOOSE US ================= */}
<section className="bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-800 text-white py-24">

  <h2 className="text-4xl font-bold text-center mb-16">
    Why Choose Jaliwa Freight Ltd
  </h2>

  <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto px-6 text-center">

    {/* Fast Delivery */}
    <div className="bg-white/10 backdrop-blur-lg p-10 rounded-2xl shadow-lg hover:scale-105 transition">
      <div className="text-4xl mb-4">⚡</div>
      <h3 className="font-semibold text-xl mb-3">
        Fast Delivery
      </h3>
      <p className="text-blue-100">
        Optimized logistics routes ensure faster cargo transportation
        across international destinations.
      </p>
    </div>

    {/* Global Network */}
    <div className="bg-white/10 backdrop-blur-lg p-10 rounded-2xl shadow-lg hover:scale-105 transition">
      <div className="text-4xl mb-4">🌍</div>
      <h3 className="font-semibold text-xl mb-3">
        Global Network
      </h3>
      <p className="text-blue-100">
        Strong partnerships with international carriers and agents
        worldwide.
      </p>
    </div>

    {/* Secure Handling */}
    <div className="bg-white/10 backdrop-blur-lg p-10 rounded-2xl shadow-lg hover:scale-105 transition">
      <div className="text-4xl mb-4">🔒</div>
      <h3 className="font-semibold text-xl mb-3">
        Secure Handling
      </h3>
      <p className="text-blue-100">
        Professional cargo management ensuring safety, reliability,
        and compliance with global standards.
      </p>
    </div>

  </div>
</section>


      {/* TRACK CTA */}
      <section className="bg-blue-700 text-white text-center py-20">
        <h2 className="text-3xl font-bold mb-4">
          Track Your Shipment Anytime
        </h2>

        <p className="mb-6">
          Use our online cargo tracking system to monitor shipment progress
          in real time.
        </p>

        <a
          href="/track"
          className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold shadow"
        >
          Track Cargo
        </a>
      </section>


      {/* QUOTE CTA */}
      <section className="py-20 text-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Ship With Us?
        </h2>

        <p className="mb-8">
          Request a freight quote today and let our logistics experts
          handle your cargo transportation needs.
        </p>

        <a
          href="/quote"
          className="bg-white text-blue-700 px-8 py-4 rounded-xl font-bold shadow-lg"
        >
          Request a Free Quote
        </a>
      </section>

    </div>
  );
}
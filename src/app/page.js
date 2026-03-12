import Link from "next/link";

export default function Home() {
  return (
    <div>

      {/* ===== HERO SECTION ===== */}
      <section className="bg-gray-200 text-center py-20 px-6">
        <h1 className="text-5xl font-bold text-blue-800 mb-6">
          Global Freight & Cargo Logistics
        </h1>

        <p className="text-gray-700 max-w-2xl mx-auto mb-8">
          Reliable air freight and cargo export solutions from Nairobi
          to the world. Specialists in perishable cargo, fresh produce,
          flowers, and logistics coordination.
        </p>

        <Link
          href="/track"
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold"
        >
          Track Your Shipment
        </Link>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section className="bg-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-700 mb-6">
            About Jaliwa Freight Ltd
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed">
            Jaliwa Freight Ltd provides professional cargo handling,
            export logistics, documentation services, and air freight
            coordination. Located near JKIA cargo terminals, we ensure
            efficient shipment processing, secure handling, and reliable
            global delivery solutions for businesses worldwide.
          </p>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">
              Cargo Handling
            </h3>
            <p className="text-gray-600">
              Safe and professional cargo preparation and export management.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">
              Air Freight
            </h3>
            <p className="text-gray-600">
              Fast global air freight solutions with reliable airline partnerships.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">
              Documentation
            </h3>
            <p className="text-gray-600">
              Complete export documentation and logistics coordination.
            </p>
          </div>

        </div>
      </section>
{/* ===== MISSION & VISION ===== */}
<section className="bg-white py-20 px-6">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 text-center">

    {/* Mission */}
    <div className="bg-gray-100 p-10 rounded-xl shadow-md">
      <h3 className="text-2xl font-bold text-blue-700 mb-4">
        Our Mission
      </h3>
      <p className="text-gray-700 leading-relaxed">
        To provide reliable, efficient, and professional cargo logistics
        solutions that connect businesses in Kenya to global markets through
        safe handling, timely delivery, and exceptional customer service.
      </p>
    </div>

    {/* Vision */}
    <div className="bg-gray-100 p-10 rounded-xl shadow-md">
      <h3 className="text-2xl font-bold text-blue-700 mb-4">
        Our Vision
      </h3>
      <p className="text-gray-700 leading-relaxed">
        To become a leading international freight and logistics partner
        recognized for innovation, trust, and excellence in global cargo
        transportation and export coordination.
      </p>
    </div>

  </div>
</section>
{/* ===== WHY CHOOSE US / EXPERIENCE ===== */}
<section className="bg-gray-50 py-20 px-6 text-center">
  <div className="max-w-6xl mx-auto">

    <h2 className="text-3xl font-bold text-blue-700 mb-6">
      Why Choose Jaliwa Freight Ltd
    </h2>

    <p className="text-gray-600 max-w-3xl mx-auto mb-12">
      With years of experience in international cargo logistics, we provide
      dependable freight solutions tailored to exporters, businesses, and
      individuals requiring fast and secure global delivery.
    </p>

    <div className="grid md:grid-cols-3 gap-8">

      {/* Experience */}
      <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
        <h3 className="text-xl font-semibold text-blue-600 mb-3">
          Industry Experience
        </h3>
        <p className="text-gray-600">
          Extensive knowledge in air freight handling, export logistics,
          and cargo coordination from Nairobi to worldwide destinations.
        </p>
      </div>

      {/* Reliability */}
      <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
        <h3 className="text-xl font-semibold text-blue-600 mb-3">
          Reliable Operations
        </h3>
        <p className="text-gray-600">
          We ensure secure cargo handling, accurate documentation, and
          timely shipment processing for every client.
        </p>
      </div>

      {/* Support */}
      <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
        <h3 className="text-xl font-semibold text-blue-600 mb-3">
          Dedicated Support
        </h3>
        <p className="text-gray-600">
          Our customer service team provides continuous communication and
          shipment updates throughout the logistics journey.
        </p>
      </div>

    </div>
  </div>
</section>
    </div>
  );
}
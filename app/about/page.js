import Authority from "../components/Authority";
import Exports from "../components/Exports";
import Stats from "../components/Stats";
import Image from "next/image";
import Reveal from "../components/Reveal";
import QuoteCTA from "../components/QuoteCTA";
export default function About() {
  return (
    <div className="bg-gray-50 text-gray-800">

      {/* ================= HERO ================= */}
      <section className="relative h-[75vh] flex items-center justify-center text-center bg-gradient-to-r from-blue-900 to-blue-700 text-white px-6">
        <div>
          <h1 className="text-5xl font-bold mb-6">
            About Jaliwa Freight Logistics Ltd
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-gray-200">
            Delivering reliable customs clearing and freight forwarding
            solutions across air, sea, and road transportation networks —
            connecting Kenyan businesses to global markets.
          </p>
        </div>
      </section>

      {/* ================= WHO WE ARE ================= */}
<Reveal>
<section className="max-w-6xl mx-auto py-24 px-6 grid md:grid-cols-2 gap-12">        
        <div>
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            Who We Are
          </h2>

          <p className="text-gray-700 mb-4 leading-relaxed">
            Jaliwa Freight Logistics Ltd is a trusted logistics and customs
            clearing company based in Kenya, providing efficient cargo
            transportation and supply chain solutions for businesses locally
            and internationally.
          </p>

          <p className="text-gray-700 mb-4 leading-relaxed">
            Inspired by global logistics leaders, our operations focus on
            reliability, transparency, and speed. We coordinate air freight,
            ocean freight, and road transport while ensuring seamless customs
            clearance and compliance.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Our mission is to simplify international trade by providing
            dependable logistics services that allow our clients to focus on
            growing their businesses.
          </p>
        </div>

        {/* YOUR COMPANY IMAGE */}
        <div className="relative h-[400px] rounded-xl overflow-hidden group">
      <Image
  src="/images/warehouse.png"
  alt="Jaliwa Freight Operations"
  fill
  className="object-cover group-hover:scale-110 transition duration-700"
/>
        </div>
      </section>
      </Reveal>

      {/* ================= MISSION & VISION ================= */}
     <Reveal>
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

          <div className="p-8 rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              Our Mission
            </h3>
            <p>
              To deliver reliable, fast, and cost-effective customs clearing
              and freight forwarding services that enhance global trade
              efficiency for our clients.
            </p>
          </div>

          <div className="p-8 rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              Our Vision
            </h3>
            <p>
              To be a trusted and leading logistics partner in Kenya and
              international markets through innovation, professionalism,
              and customer-focused service delivery.
            </p>
          </div>

        </div>
      </section>
      </Reveal>
      <Stats />
      <section className="py-24 bg-gray-50">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-4xl font-bold text-blue-900 mb-12">
      Why Choose Jaliwa Freight
    </h2>

    <div className="grid md:grid-cols-3 gap-10">
      <div className="bg-white p-8 rounded-xl shadow hover:shadow-2xl transition">
        <h3 className="font-bold text-xl mb-3">Reliable Delivery</h3>
        <p>
          We ensure safe and timely cargo delivery through trusted global
          logistics networks.
        </p>
      </div>

      <div className="bg-white p-8 rounded-xl shadow hover:shadow-2xl transition">
        <h3 className="font-bold text-xl mb-3">Global Reach</h3>
        <p>
          Strong international partnerships allow us to move cargo efficiently
          across continents.
        </p>
      </div>

      <div className="bg-white p-8 rounded-xl shadow hover:shadow-2xl transition">
        <h3 className="font-bold text-xl mb-3">Custom Solutions</h3>
        <p>
          Tailored freight forwarding and customs clearing services designed
          for businesses of all sizes.
        </p>
      </div>
    </div>
  </div>
</section>
<section className="py-24">
  <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
    
    <div>
      <h2 className="text-4xl font-bold text-blue-900 mb-6">
        Global Logistics Expertise
      </h2>

      <p className="text-gray-700 mb-4">
        Inspired by international freight leaders, Jaliwa Freight delivers
        integrated logistics solutions including air freight, ocean freight,
        road transportation, customs clearance, and cargo consolidation.
      </p>

      <p className="text-gray-700">
        Our operational approach combines efficiency, compliance, and advanced
        logistics coordination to ensure seamless cargo movement worldwide.
      </p>
    </div>

    <div className="relative h-[400px] rounded-xl overflow-hidden">
      <img
        src="/images/ship.png"
        className="w-full h-full object-cover"
        alt="Global logistics"
      />
    </div>

  </div>
</section>

      {/* ================= LOGISTICS EXPERTISE ================= */}
      <Reveal>
      <section className="py-24 max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-10">
          Our Logistics Expertise
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="p-6 bg-white rounded-xl shadow hover:shadow-2xl hover:-translate-y-2 transition duration-300">
            <Image src="/images/plane.png" width={60} height={60} alt="" />
            <h3 className="font-semibold mt-4">Air Freight</h3>
            <p className="text-sm text-gray-600 mt-2">
              Fast international cargo solutions with secure handling and
              real-time coordination.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow hover:shadow-2xl hover:-translate-y-2 transition duration-300">
            <Image src="/images/ship.png" width={60} height={60} alt="" />
            <h3 className="font-semibold mt-4">Ocean Freight</h3>
            <p className="text-sm text-gray-600 mt-2">
              Cost-effective global shipping solutions for bulk and containerized cargo.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow hover:shadow-2xl hover:-translate-y-2 transition duration-300">
            <Image src="/images/truck.png" width={60} height={60} alt="" />
            <h3 className="font-semibold mt-4">Road Transport</h3>
            <p className="text-sm text-gray-600 mt-2">
              Reliable regional distribution ensuring timely delivery across East Africa.
            </p>
          </div>

        </div>
      </section>
      </Reveal>

      {/* ================= PRODUCTS WE EXPORT ================= */}
     <Reveal>
      <section className="bg-blue-50 py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-10">
            Products We Export
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            {[
              "Fresh Flowers",
              "Avocados",
              "Vegetables",
              "Tea & Coffee",
              "Textiles",
              "Industrial Goods",
              "Machinery",
              "General Cargo",
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow">
                {item}
              </div>
            ))}

          </div>
        </div>
      </section>
      </Reveal>

      {/* ================= WHY CHOOSE US ================= */}
      <Reveal>
      <section className="py-24 max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-10">
          Why Customers Choose Jaliwa Freight
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-left">

          <div>
            <h4 className="font-semibold mb-2">Reliable Operations</h4>
            <p className="text-gray-600">
              Consistent cargo handling supported by experienced logistics professionals.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Global Network</h4>
            <p className="text-gray-600">
              Strong partnerships enabling international shipping coverage.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Customer Focused</h4>
            <p className="text-gray-600">
              Tailored logistics solutions designed around client needs.
            </p>
          </div>

        </div>
      </section>
      </Reveal>

<Exports />
<Authority />
<QuoteCTA />

    </div>
  );
}
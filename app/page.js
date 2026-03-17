"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

export default function Home() {
 const { scrollY } = useScroll();

const planeY = useTransform(scrollY, [0, 500], [0, 80]);
const planeScale = useTransform(scrollY, [0, 500], [1, 1.08]); 
  return (
    <main className="bg-white text-gray-900 overflow-hidden">

    {/* ================= HERO SECTION ================= */}
<section className="relative h-screen flex items-center justify-center overflow-hidden">

  {/* Plane Background */}
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
   <motion.img
  src="/images/plane.png"
  alt="Jaliwa Freight Aircraft"
  style={{ y: planeY, scale: planeScale }}
  className="
    w-[1400px]
    max-w-none
    object-contain
    opacity-90
    animate-planeFloat
    select-none
  "
/>
  </div>
<div className="network-glow"></div>
{/* World Route Lines */}
<div className="absolute inset-0 pointer-events-none">
  <div className="route-lines"></div>
</div>

  {/* Premium Blue Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r
      from-blue-950/80
      via-blue-900/40
      to-transparent">
  </div>

  {/* Light Glow Effect */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]"></div>

  {/* Hero Content */}
  <div className="relative z-10 text-center text-white px-6">

    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
      Fast. Reliable. Global Freight.
    </h1>

    <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8">
      Jaliwa Freight delivers secure logistics solutions across air, sea,
      and road — connecting your business to the world.
    </p>

    <div className="flex gap-4 justify-center">
      <a href="/quote">
        <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition">
          Get a Quote
        </button>
      </a>

      <a href="/contact">
        <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
          Contact Us
        </button>
      </a>
    </div>

  </div>

</section>
       {/* LOGISTICS BACKGROUND VISUALS */}
<div className="absolute inset-0 overflow-hidden pointer-events-none">

  {/* Plane */}
  <div className="absolute top-20 animate-plane opacity-20 text-white text-6xl font-bold whitespace-nowrap">
    ✈ JALIWA FREIGHT AIR CARGO
  </div>

  {/* Truck */}
  <div className="absolute bottom-24 animate-truck opacity-20 text-white text-5xl font-bold whitespace-nowrap">
    🚛 JALIWA FREIGHT LOGISTICS
  </div>

  {/* Ship */}
  <div className="absolute bottom-10 animate-ship opacity-20 text-white text-6xl font-bold whitespace-nowrap">
    🚢 GLOBAL SHIPPING • JALIWA FREIGHT
  </div>
<div className="speed-lines"></div>
</div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center px-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white">
            Fast. Reliable. Global Freight.
          </h1>

          <p className="mt-6 text-lg md:text-xl text-white max-w-2xl mx-auto">
            Jaliwa Freight delivers secure logistics solutions across air,
            sea, and road — connecting your business to the world.
          </p>

        
        </motion.div>

        "use client";
import { motion } from "framer-motion";

{/* ===== PREMIUM LOGISTICS BROCHURE ===== */}
<section className="relative py-28 bg-[#1f2937] text-white overflow-hidden">

  {/* top accent line */}
  <div className="absolute top-0 left-0 w-full h-2 bg-yellow-400"></div>

  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-20">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        Why Choose Jaliwa Freight
      </h2>

      <p className="text-gray-300 max-w-3xl mx-auto text-lg">
        We combine advanced logistics technology, global partnerships,
        and industry expertise to deliver seamless freight solutions
        across air, sea, and road networks worldwide.
      </p>
    </div>

    {/* Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

      {/* 01 */}
      <div className="border-l-2 border-gray-500 pl-6 hover:border-yellow-400 transition duration-300">
        <span className="text-yellow-400 text-2xl font-bold">01</span>
        <h3 className="text-xl font-semibold mt-3 mb-3">
          Tailored Transport Solutions
        </h3>
        <p className="text-gray-300">
          Every shipment is unique. Our logistics experts design
          customized transport strategies ensuring efficiency,
          safety, and cost optimization for your cargo.
        </p>
      </div>

      {/* 02 */}
      <div className="border-l-2 border-gray-500 pl-6 hover:border-yellow-400 transition duration-300">
        <span className="text-yellow-400 text-2xl font-bold">02</span>
        <h3 className="text-xl font-semibold mt-3 mb-3">
          Global Reach & Expertise
        </h3>
        <p className="text-gray-300">
          Through international partnerships and strategic hubs,
          Jaliwa Freight connects businesses to global markets with
          reliable cross-border logistics solutions.
        </p>
      </div>

      {/* 03 */}
      <div className="border-l-2 border-gray-500 pl-6 hover:border-yellow-400 transition duration-300">
        <span className="text-yellow-400 text-2xl font-bold">03</span>
        <h3 className="text-xl font-semibold mt-3 mb-3">
          Customer Satisfaction
        </h3>
        <p className="text-gray-300">
          Real-time communication, shipment visibility, and dedicated
          support teams ensure transparency and confidence throughout
          the delivery journey.
        </p>
      </div>

      {/* 04 */}
      <div className="border-l-2 border-gray-500 pl-6 hover:border-yellow-400 transition duration-300">
        <span className="text-yellow-400 text-2xl font-bold">04</span>
        <h3 className="text-xl font-semibold mt-3 mb-3">
          Quality & Operational Excellence
        </h3>
        <p className="text-gray-300">
          From customs clearance to final delivery, optimized workflows
          and strict quality control guarantee speed, reliability,
          and secure cargo handling.
        </p>
      </div>

    </div>

    {/* EXTRA PREMIUM CONTENT */}
    <div className="mt-24 grid md:grid-cols-3 gap-10 text-center">

      <div>
        <h4 className="text-4xl font-bold text-yellow-400">120+</h4>
        <p className="text-gray-300 mt-2">Global Shipping Partners</p>
      </div>

      <div>
        <h4 className="text-4xl font-bold text-yellow-400">5K+</h4>
        <p className="text-gray-300 mt-2">Shipments Delivered</p>
      </div>

      <div>
        <h4 className="text-4xl font-bold text-yellow-400">98%</h4>
        <p className="text-gray-300 mt-2">On-Time Delivery Rate</p>
      </div>

    </div>

  </div>
</section>
{/* ===== END PREMIUM BROCHURE ===== */}
      
{/* BRAND FLYERS / LOGISTICS BRANDING */}
<section className="relative py-16 bg-white overflow-hidden">

  {/* Reflector stripes */}
  <div className="absolute top-0 left-0 w-full h-3 bg-yellow-400"></div>
  <div className="absolute bottom-0 left-0 w-full h-3 bg-red-500"></div>

  <div className="max-w-7xl mx-auto px-6">

    <motion.h2
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="text-4xl font-bold text-center mb-12"
    >
      Powered by Jaliwa Freight Logistics
    </motion.h2>

    <div className="grid md:grid-cols-3 gap-8">

      {/* PLANE FLYER */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-gradient-to-br from-yellow-400 to-red-500 text-white p-8 rounded-2xl shadow-xl"
      >
        <h3 className="text-2xl font-bold mb-3">
          ✈️ JALIWA AIR FREIGHT
        </h3>

        <p className="mb-4">
          Our branded cargo aircraft deliver speed, safety, and reliability
          across international routes.
        </p>

        <div className="bg-white text-black px-4 py-2 rounded-lg inline-block font-semibold">
          JALIWA FREIGHT LTD
        </div>
      </motion.div>

      {/* TRUCK FLYER */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-black text-white p-8 rounded-2xl shadow-xl border-4 border-yellow-400"
      >
        <h3 className="text-2xl font-bold mb-3">
          🚛 ROAD TRANSPORT
        </h3>

        <p className="mb-4">
          Branded trucks moving cargo safely with high-visibility reflector
          protection and real-time delivery tracking.
        </p>

        <div className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold">
          Trusted Across Africa
        </div>
      </motion.div>

      {/* GLOBAL FLYER */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-gray-900 text-white p-8 rounded-2xl shadow-xl"
      >
        <h3 className="text-2xl font-bold mb-3">
          🌍 GLOBAL NETWORK
        </h3>

        <p className="mb-4">
          From ports to airports, Jaliwa Freight branding represents secure
          logistics worldwide.
        </p>

        <div className="border border-yellow-400 px-4 py-2 rounded-lg inline-block">
          Secure • Fast • Reliable
        </div>
      </motion.div>

    </div>
  </div>
</section>

   {/* ================= PREMIUM SERVICES SECTION ================= */}
<section className="relative py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden">

  {/* Background Glow */}
  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,#2563eb,transparent_70%)]"></div>

  <div className="relative max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-900">
        Our Logistics Services
      </h2>
      <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
        Jaliwa Freight delivers reliable global transportation solutions
        across air, sea, and road networks with precision and speed.
      </p>
    </div>

    {/* Service Cards */}
    <div className="grid md:grid-cols-3 gap-10">

      {/* AIR FREIGHT */}
      <div className="group relative p-8 rounded-3xl bg-white/70 backdrop-blur-xl shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">

        <div className="text-4xl mb-4">✈️</div>

        <h3 className="text-xl font-semibold mb-3">
          Air Freight
        </h3>

        <p className="text-gray-600 mb-6">
          Fast international cargo delivery with priority handling and
          secure global airline partnerships.
        </p>

        <span className="text-blue-600 font-medium group-hover:translate-x-2 inline-block transition">
          Express Global Delivery →
        </span>

      </div>

      {/* SEA FREIGHT */}
      <div className="group relative p-8 rounded-3xl bg-white/70 backdrop-blur-xl shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">

        <div className="text-4xl mb-4">🚢</div>

        <h3 className="text-xl font-semibold mb-3">
          Sea Freight
        </h3>

        <p className="text-gray-600 mb-6">
          Cost-effective bulk shipping with worldwide port coverage
          and reliable cargo consolidation services.
        </p>

        <span className="text-blue-600 font-medium group-hover:translate-x-2 inline-block transition">
          Global Ocean Network →
        </span>

      </div>

      {/* ROAD TRANSPORT */}
      <div className="group relative p-8 rounded-3xl bg-white/70 backdrop-blur-xl shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">

        <div className="text-4xl mb-4">🚚</div>

        <h3 className="text-xl font-semibold mb-3">
          Road Transport
        </h3>

        <p className="text-gray-600 mb-6">
          Reliable inland delivery supported by tracking systems
          and branded Jaliwa Freight logistics vehicles.
        </p>

        <span className="text-blue-600 font-medium group-hover:translate-x-2 inline-block transition">
          Regional Distribution →
        </span>

      </div>

    </div>
  </div>
</section>

      {/* WHY CHOOSE US */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Why Choose Jaliwa Freight?
            </h2>

            <ul className="space-y-4 text-lg">
              <li>✔ Global logistics network</li>
              <li>✔ Secure cargo handling</li>
              <li>✔ Fast customs clearance</li>
              <li>✔ Dedicated customer support</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="bg-white p-10 rounded-2xl shadow-xl"
          >
            <h3 className="text-2xl font-semibold mb-4">
              Trusted Logistics Partner
            </h3>
            <p className="text-gray-600">
              We combine technology, expertise, and global partnerships to
              deliver freight solutions tailored for businesses of all sizes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 px-6 text-center">
        <div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {[
            { number: "120+", label: "Countries Served" },
            { number: "5K+", label: "Shipments Delivered" },
            { number: "98%", label: "Customer Satisfaction" },
            { number: "24/7", label: "Support" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.2 }}
            >
              <h3 className="text-4xl font-bold text-red-500">
                {stat.number}
              </h3>
              <p className="mt-2 text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

     {/* ===== PREMIUM ENTERPRISE CTA SECTION ===== */}
<section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-20 px-6 overflow-hidden">

  {/* background glow */}
  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_#ffffff22,_transparent_70%)]"></div>

  <div className="relative max-w-6xl mx-auto text-center">

    <h2 className="text-4xl md:text-5xl font-bold mb-6">
      Ready to Move Your Cargo Worldwide?
    </h2>

    <p className="text-lg text-gray-200 max-w-3xl mx-auto mb-10">
      Jaliwa Freight Logistics provides secure air, sea, and road freight
      solutions connecting businesses across global markets with speed,
      reliability, and precision.
    </p>

    <div className="flex flex-col md:flex-row justify-center gap-6">
      
      <a
        href="/quote"
        className="bg-yellow-400 text-black font-semibold px-8 py-4 rounded-xl hover:scale-105 transition duration-300 shadow-xl"
      >
        Get a Shipping Quote
      </a>

      <a
        href="/contact"
        className="border border-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-900 transition duration-300"
      >
        Speak With Our Team
      </a>

    </div>

  </div>
</section>
{/* ===== END PREMIUM CTA ===== */}
    </main>
  );
}
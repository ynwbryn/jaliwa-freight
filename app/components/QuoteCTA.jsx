"use client";

export default function QuoteCTA() {
  return (
    <section className="relative bg-blue-900 text-white py-20 overflow-hidden">

      {/* Background Overlay */}
      <div className="absolute inset-0 opacity-20 bg-[url('/images/logistics-bg.jpg')] bg-cover bg-center"></div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold mb-6">
          Ready to Ship Your Cargo?
        </h2>

        <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-10">
          Partner with Jaliwa Freight Logistics for fast customs clearance,
          reliable freight forwarding, and professional cargo handling across
          global markets. Request a quote today and let our experts handle
          your shipment.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-6">

          {/* Quote Button */}
          <a
            href="/contact"
            className="bg-yellow-400 text-blue-900 font-semibold px-8 py-4 rounded-lg hover:bg-yellow-300 transition"
          >
            Request Freight Quote
          </a>

          {/* Email Button */}
          <a
            href="mailto:info@jaliwafreightltd.com"
            className="border border-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-900 transition"
          >
            Email Us Directly
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/254700000000"
            target="_blank"
            className="bg-green-500 px-8 py-4 rounded-lg hover:bg-green-400 transition"
          >
            WhatsApp Inquiry
          </a>

        </div>

      </div>
    </section>
  );
}
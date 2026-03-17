"use client";

import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const departments = [
    {
      name: "Customer Service",
      description:
        "General inquiries, shipment tracking assistance and customer support.",
      email: "customerservice@jaliwafreightltd.com",
      subject: "Customer Support Request",
    },
    {
      name: "Bookings",
      description:
        "Cargo reservations, export bookings and shipment scheduling.",
      email: "booking@jaliwafreightltd.com",
      subject: "New Shipment Booking",
    },
    {
      name: "Operations",
      description:
        "Operational updates and cargo handling coordination.",
      email: "operations@jaliwafreightltd.com",
      subject: "Operations Inquiry",
    },
    {
      name: "Documentation",
      description:
        "Export documentation and customs clearance processing.",
      email: "documentation@jaliwafreightltd.com",
      subject: "Documentation Request",
    },
    {
      name: "General Inquiries",
      description:
        "For partnerships, business inquiries and general communication.",
      email: "info@jaliwafreightltd.com",
      subject: "General Inquiry",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-yellow-50 to-white min-h-screen relative">

      {/* FLOATING WHATSAPP */}
      <a
        href="https://wa.me/254119981188"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition z-50"
      >
        <MessageCircle />
      </a>

      {/* HERO */}
      <section className="text-center py-16 px-4">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-red-600 mb-4"
        >
          Contact Jaliwa Freight Ltd
        </motion.h1>

        <p className="text-gray-600 mb-6">
          Reliable Global Logistics & Freight Forwarding Solutions
        </p>

        <div className="flex flex-wrap justify-center gap-6 text-gray-700 text-sm">
          <div className="flex items-center gap-2">
            <MapPin size={18} />
            JKIA – Toll, Nairobi, Kenya
          </div>
          <a href="tel:+254119981188" className="flex items-center gap-2 hover:text-red-600">
            <Phone size={18} />
            +254 119 981 188
          </a>
          <div className="flex items-center gap-2">
            <Clock size={18} />
            Mon – Fri | 8:00 AM – 6:00 PM
          </div>
        </div>
      </section>

      {/* QUICK ACTION BAR */}
      <section className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4 px-4 mb-10">
        <a
          href="mailto:info@jaliwafreightltd.com?subject=Quick Inquiry"
          className="bg-red-600 text-white py-3 rounded-xl text-center font-semibold hover:bg-red-700 transition"
        >
          📧 Email Us Instantly
        </a>
        <a
          href="tel:+254119981188"
          className="bg-black text-white py-3 rounded-xl text-center font-semibold hover:bg-gray-800 transition"
        >
          📞 Call Us Now
        </a>
      </section>

      {/* DEPARTMENTS */}
      <section className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 pb-16">
        {departments.map((dept, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-red-600 hover:shadow-2xl hover:-translate-y-2 transition duration-300"
          >
            <h3 className="text-xl font-semibold text-red-600 mb-2">
              {dept.name}
            </h3>

            <p className="text-gray-600 text-sm mb-6">
              {dept.description}
            </p>

            <a
              href={`mailto:${dept.email}?subject=${encodeURIComponent(
                dept.subject
              )}`}
              className="flex items-center justify-center gap-2 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition"
            >
              <Mail size={18} />
              Email Department
            </a>

            <p className="text-center text-sm text-gray-500 mt-4">
              {dept.email}
            </p>
          </motion.div>
        ))}
      </section>

      {/* TRUST SECTION */}
      <section className="bg-red-600 text-white py-14">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 text-center gap-8">
          <div>
            <h3 className="text-2xl font-bold">24/7</h3>
            <p className="opacity-90">Cargo Monitoring & Support</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">Global</h3>
            <p className="opacity-90">International Freight Network</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">Secure</h3>
            <p className="opacity-90">Licensed Customs Clearance</p>
          </div>
        </div>
      </section>
    </div>
  );
}
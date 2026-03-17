"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactPage() {

  const departments = [
    {
      name: "Customer Service",
      description:
        "General enquiries, shipment tracking assistance and customer support.",
      email: "customerservice@jaliwafreightltd.com",
    },
    {
      name: "Bookings",
      description:
        "Cargo reservations, export bookings and shipment scheduling.",
      email: "booking@jaliwafreightltd.com",
    },
    {
      name: "Operations",
      description:
        "Operational updates and cargo handling coordination.",
      email: "operations@jaliwafreightltd.com",
    },
    {
      name: "Documentation",
      description:
        "Export documentation and customs clearance processing.",
      email: "documentation@jaliwafreightltd.com",
    },
    {
      name: "General Inquiries",
      description:
        "For all other questions, partnerships, and general communication.",
       email: "info@jaliwafreightltd.com", 
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fff7cc] via-white to-[#ffe680]">

      {/* HERO */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center py-20 px-6"
      >
        <h1 className="text-5xl font-bold text-red-600">
          Contact Jaliwa Freight Ltd
        </h1>

        <p className="text-gray-600 mt-4">
          Reliable Global Logistics & Freight Forwarding Solutions
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6 mt-8 text-gray-700">

          <div className="flex items-center gap-2">
            <MapPin size={18} />
            JKIA – Toll, Nairobi, Kenya
          </div>

          <div className="flex items-center gap-2">
            <Phone size={18} />
            +254 119 981 188
          </div>

          <div className="flex items-center gap-2">
            <Clock size={18} />
            Mon – Fri | 8:00 AM – 6:00 PM
          </div>

        </div>
      </motion.section>

      {/* DEPARTMENTS */}
      <section className="max-w-6xl mx-auto px-6 pb-20 grid md:grid-cols-3 gap-8">

        {departments.map((dept, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-red-500 hover:shadow-2xl"
          >
            <h3 className="text-xl font-semibold text-red-600 mb-2">
              {dept.name}
            </h3>

            <p className="text-gray-600 text-sm mb-6">
              {dept.description}
            </p>

            <a
              href={`mailto:${dept.email}`}
              className="flex items-center justify-center gap-2 bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition"
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

      {/* TRUST SECTION (DHL STYLE) */}
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
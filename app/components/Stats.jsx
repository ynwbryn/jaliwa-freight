"use client";

import { motion } from "framer-motion";

const stats = [
  { number: "500+", label: "Shipments Delivered" },
  { number: "50+", label: "Global Partners" },
  { number: "10+", label: "Years Logistics Experience" },
  { number: "24/7", label: "Customer Support" },
];

export default function Stats() {
  return (
    <section className="bg-blue-900 text-white py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-10 text-center">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <h3 className="text-4xl font-bold text-orange-400">
              {stat.number}
            </h3>
            <p className="mt-2 text-gray-200">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
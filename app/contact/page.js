"use client";

export default function Contact() {

  const departments = [
    {
      name: "Customer Service",
      description:
        "General inquiries, shipment tracking assistance and customer support.",
      email: "customerservice@jaliwafreight.co.ke",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Bookings",
      description: "Cargo reservations and shipment bookings.",
      email: "booking@jaliwafreight.co.ke",
      color: "from-indigo-500 to-blue-600",
    },
    {
      name: "Operations",
      description: "Operational updates and cargo handling coordination.",
      email: "operations@jaliwafreight.co.ke",
      color: "from-sky-500 to-teal-500",
    },
    {
      name: "Documentation",
      description: "Export documentation and customs paperwork.",
      email: "documentation@jaliwafreight.co.ke",
      color: "from-purple-500 to-indigo-500",
    },
    {
      name: "Quality Control (QC)",
      description: "Cargo inspection and quality assurance services.",
      email: "qc@jaliwafreight.co.ke",
      color: "from-blue-600 to-cyan-600",
    },
    {
      name: "Sales",
      description: "Business partnerships and service inquiries.",
      email: "sales@jaliwafreight.co.ke",
      color: "from-teal-500 to-blue-500",
    },
    {
      name: "Commercial",
      description: "Pricing, contracts and commercial discussions.",
      email: "commercial@jaliwafreight.co.ke",
      color: "from-indigo-600 to-purple-500",
    },
    {
      name: "Human Resources",
      description: "Recruitment, careers and HR inquiries.",
      email: "hr@jaliwafreight.co.ke",
      color: "from-cyan-500 to-blue-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-100 py-14 px-6">

      {/* TITLE */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-800">
          Contact Jaliwa Freight Ltd
        </h1>

        <p className="text-gray-600 mt-3">
          📍 JKIA-Toll, Nairobi, Kenya <br />
          📞 +254 119 981 188
        </p>
      </div>

      {/* CARDS */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {departments.map((dept, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-300"
          >
            <h3 className="text-xl font-bold text-blue-700 mb-3">
              {dept.name}
            </h3>

            <p className="text-gray-600 mb-5">
              {dept.description}
            </p>

            <a
              href={`mailto:${dept.email}`}
              className={`block text-center text-white font-semibold py-3 rounded-lg bg-gradient-to-r ${dept.color} hover:scale-105 transition`}
            >
              Email {dept.name}
            </a>

            <p className="text-sm text-gray-500 text-center mt-3">
              {dept.email}
            </p>
          </div>
        ))}
      </div>

      {/* WHATSAPP BUTTON */}
      <a
        href="https://wa.me/254119981188"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 text-white px-6 py-3 rounded-full shadow-xl hover:bg-green-600 transition"
      >
        WhatsApp Us
      </a>

    </div>
  );
}
import Link from "next/link";

export default function Contact() {

  const departments = [
    {
      name: "Customer Service",
      email: "customerservice@jaliwafreight.co.ke",
      description:
        "General inquiries, shipment tracking assistance and customer support.",
    },
    {
      name: "Bookings",
      email: "booking@jaliwafreight.co.ke",
      description: "Cargo reservations and shipment bookings.",
    },
    {
      name: "Operations",
      email: "operations@jaliwafreight.co.ke",
      description: "Operational updates and cargo handling coordination.",
    },
    {
      name: "Documentation",
      email: "documentation@jaliwafreight.co.ke",
      description: "Export documentation and customs paperwork.",
    },
    {
      name: "Quality Control (QC)",
      email: "qc@jaliwafreight.co.ke",
      description: "Cargo inspection and quality assurance services.",
    },
    {
      name: "Sales",
      email: "sales@jaliwafreight.co.ke",
      description: "Business partnerships and service inquiries.",
    },
    {
      name: "Commercial",
      email: "commercial@jaliwafreight.co.ke",
      description: "Pricing, contracts and commercial discussions.",
    },
    {
      name: "Human Resources",
      email: "hr@jaliwafreight.co.ke",
      description: "Recruitment, careers and HR inquiries.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">

      {/* PAGE TITLE */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-700">
          Contact Jaliwa Freight Ltd
        </h2>

        <p className="text-gray-600 mt-3">
          📍 JKIA-Toll, Nairobi, Kenya
        </p>

        <p className="text-gray-600">
          📞 +254 119 981 188
        </p>
      </div>

      {/* DEPARTMENTS GRID */}
      <div className="grid md:grid-cols-3 gap-8">

        {departments.map((dept, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-1 transition-all border border-blue-100"
          >
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              {dept.name}
            </h3>

            <p className="text-gray-600 mb-5">
              {dept.description}
            </p>

            <a
              href={`mailto:${dept.email}`}
              className="block text-center bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-2 rounded-lg shadow hover:scale-105 transition"
            >
              Email {dept.name}
            </a>

            <p className="text-sm text-gray-500 text-center mt-3">
              {dept.email}
            </p>
          </div>
        ))}

      </div>

    </div>
  );
}
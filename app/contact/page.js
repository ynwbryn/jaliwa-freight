export default function Contact() {

  const departments = [
    {
      name: "Customer Service",
      email: "customerservice@jaliwafreight.co.ke",
      description: "General inquiries, shipment tracking assistance and support.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Bookings",
      email: "booking@jaliwafreight.co.ke",
      description: "Cargo reservations and shipment bookings.",
      color: "from-indigo-500 to-blue-600",
    },
    {
      name: "Operations",
      email: "operations@jaliwafreight.co.ke",
      description: "Operational updates and cargo coordination.",
      color: "from-purple-500 to-indigo-600",
    },
    {
      name: "Documentation",
      email: "documentation@jaliwafreight.co.ke",
      description: "Export documentation and customs paperwork.",
      color: "from-green-500 to-emerald-600",
    },
    {
      name: "Quality Control (QC)",
      email: "qc@jaliwafreight.co.ke",
      description: "Cargo inspection and quality assurance.",
      color: "from-pink-500 to-rose-600",
    },
    {
      name: "Sales",
      email: "sales@jaliwafreight.co.ke",
      description: "Business partnerships and service inquiries.",
      color: "from-orange-500 to-red-500",
    },
    {
      name: "Commercial",
      email: "commercial@jaliwafreight.co.ke",
      description: "Pricing, contracts and commercial discussions.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      name: "Human Resources",
      email: "hr@jaliwafreight.co.ke",
      description: "Recruitment, careers and HR inquiries.",
      color: "from-teal-500 to-cyan-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 py-14 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-700">
            Contact Jaliwa Freight Ltd
          </h1>

          <p className="text-gray-600 mt-3">
            📍 JKIA-Toll, Nairobi, Kenya
          </p>

          <p className="text-gray-600">
            📞 +254 119 981 188
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {departments.map((dept, index) => (

            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition"
            >

              <h3 className="text-xl font-bold text-blue-600 mb-2">
                {dept.name}
              </h3>

              <p className="text-gray-600 mb-5">
                {dept.description}
              </p>

              <a
                href={`mailto:${dept.email}`}
                className={`block text-center bg-gradient-to-r ${dept.color} text-white py-2 rounded-lg`}
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

    </div>
  );
}
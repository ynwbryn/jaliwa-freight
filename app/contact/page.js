import Link from "next/link";

export default function Contact() {

  const departments = [
    {
      name: "Customer Service",
      email: "customerservice@jaliwafreight.co.ke",
      description: "General inquiries, shipment tracking assistance and customer support."
    },
    {
      name: "Bookings",
      email: "booking@jaliwafreight.co.ke",
      description: "Cargo reservations and shipment bookings."
    },
    {
      name: "Operations",
      email: "operations@jaliwafreight.co.ke",
      description: "Operational updates and cargo handling coordination."
    },
    {
      name: "Documentation",
      email: "documentation@jaliwafreight.co.ke",
      description: "Export documentation and customs paperwork."
    },
    {
      name: "Quality Control (QC)",
      email: "qc@jaliwafreight.co.ke",
      description: "Cargo inspection and quality assurance services."
    },
    {
      name: "Sales",
      email: "sales@jaliwafreight.co.ke",
      description: "Business partnerships and service inquiries."
    },
    {
      name: "Commercial",
      email: "commercial@jaliwafreight.co.ke",
      description: "Pricing, contracts and commercial discussions."
    },
    {
      name: "Human Resources",
      email: "hr@jaliwafreight.co.ke",
      description: "Recruitment, careers and HR inquiries."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200">

      {/* ================= NAVBAR ================= */}
      <nav className="flex justify-between items-center p-6 bg-white shadow-md">

        <h1 className="text-xl font-bold text-blue-700">
          Jaliwa Freight Ltd
        </h1>

        <div className="space-x-6 font-medium">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <Link href="/gallery" className="hover:text-blue-600">Gallery</Link>
          <Link href="/track" className="hover:text-blue-600">Track</Link>
          <Link href="/quote" className="hover:text-blue-600">Quote</Link>
        </div>

      </nav>

      {/* ================= HEADER ================= */}
      <div className="text-center mt-12 px-4">

        <h1 className="text-4xl font-bold text-blue-900">
          Contact Jaliwa Freight Ltd
        </h1>

        <p className="text-gray-700 mt-3 text-lg">
          📍 JKIA-Toll, Nairobi, Kenya
        </p>

        <p className="text-gray-700">
          📞 +254 119 981 188
        </p>

      </div>

      {/* ================= EMAIL DEPARTMENTS ================= */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-10">

        {departments.map((dept, index) => (

          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300"
          >

            <h2 className="text-xl font-bold text-blue-700 mb-2">
              {dept.name}
            </h2>

            <p className="text-gray-600 text-sm mb-4">
              {dept.description}
            </p>

            {/* EMAIL BUTTON */}
            <a
              href={`mailto:${dept.email}`}
              className="block text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Email {dept.name}
            </a>

            <p className="text-center text-xs text-gray-500 mt-3">
              {dept.email}
            </p>

          </div>

        ))}

      </div>

      {/* ================= WHATSAPP FLOAT BUTTON ================= */}
      <a
        href="https://wa.me/254119981188"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-600 transition"
      >
        WhatsApp Us
      </a>

    </div>
  );
}
export default function ContactPage() {
  const departments = [
    {
      title: "Customer Service",
      desc: "General inquiries, shipment tracking assistance and customer support.",
      email: "customerservice@jaliwafreight.co.ke",
    },
    {
      title: "Bookings",
      desc: "Cargo reservations and shipment bookings.",
      email: "booking@jaliwafreight.co.ke",
    },
    {
      title: "Operations",
      desc: "Operational updates and cargo handling coordination.",
      email: "operations@jaliwafreight.co.ke",
    },
    {
      title: "Documentation",
      desc: "Export documentation and customs paperwork.",
      email: "documentation@jaliwafreight.co.ke",
    },
    {
      title: "Quality Control (QC)",
      desc: "Cargo inspection and quality assurance services.",
      email: "qc@jaliwafreight.co.ke",
    },
    {
      title: "Sales",
      desc: "Business partnerships and service inquiries.",
      email: "sales@jaliwafreight.co.ke",
    },
    {
      title: "Commercial",
      desc: "Pricing, contracts and commercial discussions.",
      email: "commercial@jaliwafreight.co.ke",
    },
    {
      title: "Human Resources",
      desc: "Recruitment, careers and HR inquiries.",
      email: "hr@jaliwafreight.co.ke",
    },
    {
      title: "Finance",
      desc: "Invoices, payments, billing and financial inquiries.",
      email: "finance@jaliwafreight.co.ke",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-200 py-16 px-6">

      {/* HEADER */}
      <div className="text-center mb-14">
        <h1 className="text-5xl font-extrabold text-blue-800 drop-shadow-sm">
          Contact Jaliwa Freight Ltd
        </h1>

        <p className="mt-4 text-lg text-gray-700 font-medium">
          📍 JKIA-Toll, Nairobi, Kenya
        </p>

        <p className="text-lg text-pink-600 font-semibold">
          📞 +254 119 981 188
        </p>
      </div>

      {/* DEPARTMENTS GRID */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        {departments.map((dept, index) => (
          <div
            key={index}
            className="
              bg-white
              border border-blue-200
              rounded-2xl
              shadow-lg
              p-6
              hover:shadow-2xl
              hover:-translate-y-1
              transition
            "
          >
            <h3 className="text-xl font-bold text-blue-700 mb-2">
              {dept.title}
            </h3>

            <p className="text-gray-600 mb-5">
              {dept.desc}
            </p>

            <a
              href={`mailto:${dept.email}`}
              className="
                block text-center
                bg-gradient-to-r from-blue-600 to-purple-600
                text-white font-semibold
                py-3 rounded-lg
                hover:scale-[1.03]
                transition
              "
            >
              Email {dept.title}
            </a>

            <p className="text-sm text-gray-500 mt-3 text-center">
              {dept.email}
            </p>
          </div>
        ))}

      </div>

      {/* WHATSAPP BUTTON */}
      <a
        href="https://wa.me/254119981188"
        target="_blank"
        className="
          fixed bottom-6 right-6
          bg-green-500
          text-white
          px-6 py-3
          rounded-full
          shadow-xl
          hover:bg-green-600
          transition
        "
      >
        WhatsApp Us
      </a>

    </div>
  );
}
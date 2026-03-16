export default function Authority() {
  const partners = [
    "/images/partners/iata.png",
    "/images/partners/kenya-revenue.png",
    "/images/partners/dhl.png",
    "/images/partners/maersk.png",
    "/images/partners/kenya-airways.png",
    "/images/partners/customs.png",
  ];

  return (
    <section className="bg-white py-20 border-t">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold text-blue-900 mb-4">
          Trusted Logistics Network
        </h2>

        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          Jaliwa Freight operates within internationally recognized logistics
          frameworks, collaborating with global carriers, customs authorities,
          and freight partners to ensure secure and compliant cargo movement
          worldwide.
        </p>

        {/* Partner Logos */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center">
          {partners.map((logo, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={logo}
                alt="Partner"
                className="h-12 object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-16 bg-gray-50 rounded-xl p-10 shadow-sm">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">
            Compliance & Professional Standards
          </h3>

          <p className="text-gray-600 max-w-3xl mx-auto">
            We adhere to international freight forwarding standards, customs
            regulations, and cargo safety procedures. Our operations follow
            industry best practices ensuring transparency, reliability, and
            efficient shipment handling across air, sea, and land transport.
          </p>
        </div>

      </div>
    </section>
  );
}
"use client";

const exportsData = [
  {
    title: "Agricultural Products",
    image: "/images/exports/agriculture.jpg",
    description:
      "Export handling for fresh produce, grains, and agricultural commodities with temperature-controlled logistics.",
  },
  {
    title: "Industrial Machinery",
    image: "/images/exports/machinery.jpg",
    description:
      "Secure transportation of heavy equipment and industrial machinery across global destinations.",
  },
  {
    title: "Textiles & Consumer Goods",
    image: "/images/exports/textiles.jpg",
    description:
      "Efficient freight solutions for textiles, retail products, and commercial shipments.",
  },
  {
    title: "Electronics Cargo",
    image: "/images/exports/electronics.jpg",
    description:
      "Safe handling of high-value electronic goods with secure freight management.",
  },
  {
    title: "Coffee & Export Commodities",
    image: "/images/exports/coffee.jpg",
    description:
      "Specialized export logistics for coffee and regional commodities shipped worldwide.",
  },
  {
    title: "Warehouse Consolidation",
    image: "/images/exports/warehouse.jpg",
    description:
      "Cargo consolidation and storage solutions ensuring optimized shipment efficiency.",
  },
];

export default function Exports() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold text-blue-900 mb-4">
          Products We Handle & Export
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Jaliwa Freight manages diverse cargo categories through integrated
          logistics solutions, ensuring safe global transportation across air,
          sea, and road networks.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {exportsData.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[260px] object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-blue-900/80 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center text-center text-white p-6">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
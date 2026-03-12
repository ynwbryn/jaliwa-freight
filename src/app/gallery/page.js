import fs from "fs";
import path from "path";
import Image from "next/image";

export default function GalleryPage() {
  const uploadDir = path.join(process.cwd(), "public/uploads");

  let images = [];

  if (fs.existsSync(uploadDir)) {
    images = fs.readdirSync(uploadDir);
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-10">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">
        Our Gallery
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {images.map((img) => (
          <div
            key={img}
            className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transition"
          >
            <Image
              src={`/uploads/${img}`}
              alt="gallery"
              width={500}
              height={300}
              className="w-full h-64 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
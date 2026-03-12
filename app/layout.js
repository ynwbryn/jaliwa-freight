import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Jaliwa Freight Ltd",
  description: "Global Freight & Cargo Logistics",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-gray-50 text-gray-800">

        {/* ================= HEADER ================= */}
        <header className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

            {/* LOGO */}
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Jaliwa Freight Logo"
                width="45"
                height="45"
              />

              <h1 className="text-xl font-bold text-blue-700">
                Jaliwa Freight Ltd
              </h1>
            </div>

            {/* NAVIGATION */}
            <nav className="space-x-6 font-medium text-gray-700">
              <Link href="/" className="hover:text-blue-600">
                Home
              </Link>

              <Link href="/gallery" className="hover:text-blue-600">
                Gallery
              </Link>

              <Link href="/track" className="hover:text-blue-600">
                Track Cargo
              </Link>

              <Link
                href="/quote"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
              >
                Get Quote
              </Link>
            </nav>
          </div>
        </header>

        {/* ================= PAGE CONTENT ================= */}
        <main className="flex-grow">
          {children}
        </main>

        {/* ================= FOOTER ================= */}
        <footer className="bg-blue-900 text-white mt-10">
          <div className="max-w-7xl mx-auto px-6 py-8 grid md:grid-cols-3 gap-8">

            <div>
              <h3 className="font-bold text-lg mb-2">
                Jaliwa Freight Ltd
              </h3>
              <p className="text-sm text-gray-200">
                Reliable air freight and cargo logistics solutions
                connecting Nairobi to the world.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-2">Quick Links</h3>
              <ul className="space-y-2 text-gray-200">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/track">Track Shipment</Link></li>
                <li><Link href="/gallery">Gallery</Link></li>
                <li><Link href="/quote">Request Quote</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-2">Contact</h3>
              <p className="text-gray-200 text-sm">
                Nairobi, Kenya <br />
                Email: info@jaliwafreightltd.com <br />
                Phone: +254 119981188
              </p>
            </div>

          </div>

          <div className="text-center text-sm bg-blue-950 py-3">
            © {new Date().getFullYear()} Jaliwa Freight Ltd. All rights reserved.
          </div>
        </footer>

      </body>
    </html>
  );
}
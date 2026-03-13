import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Jaliwa Freight Ltd",
  description: "Global Freight & Cargo Logistics Company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-100 text-gray-800">

        {/* ================= HEADER ================= */}
        <header className="bg-white shadow-lg border-b border-blue-100 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

            {/* LOGO + NAME */}
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Jaliwa Freight Logo"
                width="45"
                height="45"
                className="rounded-md"
              />

              <h1 className="text-xl md:text-2xl font-bold text-blue-700">
                Jaliwa Freight Ltd
              </h1>
            </div>

            {/* NAVIGATION */}
            <nav className="flex items-center gap-6 font-medium">

              <Link
                href="/"
                className="text-gray-700 hover:text-blue-600 transition"
              >
                Home
              </Link>

              <Link
                href="/gallery"
                className="text-gray-700 hover:text-blue-600 transition"
              >
                Gallery
              </Link>

              <Link
                href="/contact"
                className="text-gray-700 hover:text-blue-600 transition"
              >
                Contact
              </Link>

              <Link
                href="/track"
                className="text-gray-700 hover:text-blue-600 transition"
              >
                Track Cargo
              </Link>

              {/* GET QUOTE BUTTON */}
              <Link
                href="/quote"
                className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-5 py-2 rounded-lg shadow-md hover:scale-105 hover:shadow-xl transition-all"
              >
                Get Quote
              </Link>

            </nav>
          </div>
        </header>

        {/* ================= MAIN CONTENT ================= */}
        <main className="flex-grow">
          {children}
        </main>

        {/* ================= FOOTER ================= */}
        <footer className="bg-white border-t border-blue-100 mt-12">
          <div className="max-w-7xl mx-auto px-6 py-8 text-center">

            <h2 className="text-lg font-bold text-blue-700">
              Jaliwa Freight Ltd
            </h2>

            <p className="text-gray-600 mt-2">
              Global Freight & Cargo Logistics Solutions
            </p>

            <p className="text-gray-600">
              JKIA-Toll, Nairobi, Kenya
            </p>

            <p className="text-gray-600">
              Phone: +254 119 981 188
            </p>

            <div className="mt-4 text-sm text-gray-500">
              © {new Date().getFullYear()} Jaliwa Freight Ltd. All Rights Reserved.
            </div>

          </div>
        </footer>

      </body>
    </html>
  );
}
import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Jaliwa Freight Ltd",
  description: "Global Freight & Cargo Logistics",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 text-gray-800">

        {/* HEADER */}
        <header className="bg-white shadow-md border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

            {/* LOGO + COMPANY NAME */}
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
            <nav className="flex items-center gap-8 text-gray-700 font-medium">

              <Link
                href="/"
                className="hover:text-blue-600 transition"
              >
                Home
              </Link>

              <Link
                href="/gallery"
                className="hover:text-blue-600 transition"
              >
                Gallery
              </Link>

              <Link
                href="/contact"
                className="hover:text-blue-600 transition"
              >
                Contact
              </Link>

              <Link
                href="/track"
                className="hover:text-blue-600 transition"
              >
                Track Cargo
              </Link>

              {/* GET QUOTE BUTTON */}
              <Link
                href="/quote"
                className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition"
              >
                Get Quote
              </Link>

            </nav>

          </div>
        </header>

        {/* MAIN PAGE CONTENT */}
        <main className="flex-grow">
          {children}
        </main>

        {/* FOOTER */}
        <footer className="bg-white border-t border-gray-200 mt-10">
          <div className="max-w-7xl mx-auto px-6 py-6 text-center text-gray-600">

            <p className="font-semibold text-blue-700">
              Jaliwa Freight Ltd
            </p>

            <p className="text-sm mt-1">
              JKIA-Toll, Nairobi, Kenya
            </p>

            <p className="text-sm">
              Phone: +254 119 981 188
            </p>

            <p className="text-xs mt-3 text-gray-500">
              © {new Date().getFullYear()} Jaliwa Freight Ltd. All rights reserved.
            </p>

          </div>
        </footer>

      </body>
    </html>
  );
}

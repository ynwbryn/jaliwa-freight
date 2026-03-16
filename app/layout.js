import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Jaliwa Freight Ltd",
  description: "Professional Logistics & Freight Services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800">

        {/* ================= HEADER ================= */}
        <header className="bg-white shadow-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

            {/* LOGO */}
            <Link href="/" className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt="Jaliwa Freight"
                className="h-10"
              />
              <span className="font-bold text-xl text-blue-700">
                Jaliwa Freight
              </span>
            </Link>

            {/* NAVIGATION */}
            <nav className="flex items-center gap-6 font-medium">

              <Link
                href="/"
                className="text-gray-700 hover:text-orange-500 transition"
              >
                Home
              </Link>

              <Link
                href="/about"
                className="text-gray-700 hover:text-orange-500 transition"
              >
                About
              </Link>

              <Link
                href="/track"
                className="text-gray-700 hover:text-orange-500 transition"
              >
                Track Cargo
              </Link>

              <Link
                href="/contact"
                className="text-gray-700 hover:text-orange-500 transition"
              >
                Contact
              </Link>

              {/* MAIN CTA BUTTON */}
              <Link
                href="/quote"
                className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg shadow transition"
              >
                Get Quote
              </Link>

            </nav>
          </div>
        </header>

        {/* ================= MAIN CONTENT ================= */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* ================= WHATSAPP FLOAT BUTTON ================= */}
        <a
          href="https://wa.me/254119981188"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-lg z-50 transition"
        >
          WhatsApp
        </a>

        {/* ================= FOOTER ================= */}
        <footer className="bg-blue-900 text-white text-center py-8 mt-16">
          <p className="text-sm">
            © {new Date().getFullYear()} Jaliwa Freight Ltd. All rights reserved.
          </p>
        </footer>

      </body>
    </html>
  );
}
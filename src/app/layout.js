import "./globals.css";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Jaliwa Freight Ltd",
  description: "Global Freight & Cargo Logistics",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">

        {/* ===== HEADER ===== */}
        <header className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

            {/* LOGO + NAME */}
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Jaliwa Freight Logo"
                width={45}
                height={45}
                priority
              />
              <h1 className="text-xl font-bold text-blue-700">
                Jaliwa Freight Ltd
              </h1>
            </div>

            {/* NAVIGATION */}
            <nav className="space-x-6 font-medium text-gray-700">
              <Link href="/">Home</Link>
              <Link href="/gallery">Gallery</Link>
              <Link href="/track">Track Cargo</Link>
              <Link
                href="/quote"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg"
              >
                Get Quote
              </Link>
              <Link href="/contact">Contact</Link>
            </nav>

          </div>
        </header>

        {/* ===== PAGE CONTENT ===== */}
        <main className="flex-grow">
          {children}
        </main>

        {/* ===== FOOTER ===== */}
        <footer className="bg-blue-900 text-white text-center py-6">
          <p>© 2026 Jaliwa Freight Ltd</p>
          <p className="text-sm mt-1">
            JKIA-Toll, Nairobi | customerservice@jaliwafreight.co.ke
          </p>
        </footer>

      </body>
    </html>
  );
}
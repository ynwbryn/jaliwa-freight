"use client";

import "./globals.css";
import Link from "next/link";
import { useState } from "react";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Jaliwa Freight Ltd",
  description: "Professional Logistics & Freight Services",
  metadataBase: new URL("https://www.jaliwafreightltd.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({ children }) {

  const [menuOpen, setMenuOpen] = useState(false); // ✅ FIX ADDED

  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800">

        <Navbar className="sticky top-0 z-50 backdrop-blur-md bg-white/80 shadow-sm border-b">

          <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">

            {/* LOGO */}
            <Link href="/" className="flex items-center gap-2 group">
              <img
                src="/logo.png"
                alt="Jaliwa Freight"
                className="h-9 md:h-11 transition-transform duration-300 group-hover:scale-105"
              />
              <span className="font-bold text-sm md:text-xl text-blue-700 hidden sm:block">
                Jaliwa Freight
              </span>
            </Link>

            {/* HAMBURGER */}
            <button
              className="md:hidden text-2xl"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? "✕" : "☰"}
            </button>

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex items-center gap-8 font-medium">

              <Link href="/" className="relative group text-gray-700">
                Home
              </Link>

              <Link href="/about" className="relative group text-gray-700">
                About
              </Link>

              <Link href="/track" className="relative group text-gray-700">
                Track Cargo
              </Link>

              <Link href="/contact" className="relative group text-gray-700">
                Contact
              </Link>

              <Link
                href="/quote"
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-5 py-2 rounded-full"
              >
                Get Quote
              </Link>

            </nav>
          </div>

          {/* MOBILE MENU */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-500 ${
              menuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="bg-white/95 backdrop-blur-md px-6 py-5 space-y-5 shadow-lg">

              <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
              <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
              <Link href="/track" onClick={() => setMenuOpen(false)}>Track</Link>
              <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>

              <Link
                href="/quote"
                onClick={() => setMenuOpen(false)}
                className="block text-center bg-orange-500 text-white px-4 py-3 rounded-full"
              >
                Get Quote
              </Link>

            </div>
          </div>

        </Navbar>

        <main className="min-h-screen">
          {children}
        </main>

        {/* WHATSAPP */}
        <a
          href="https://wa.me/254119981188"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg"
        >
          WhatsApp
        </a>

        {/* FOOTER */}
        <footer className="bg-blue-900 text-white text-center py-8 mt-16">
          <p>
            © {new Date().getFullYear()} Jaliwa Freight Ltd. All rights reserved.
          </p>
        </footer>

      </body>
    </html>
  );
}
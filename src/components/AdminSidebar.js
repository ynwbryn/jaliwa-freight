"use client";

import Link from "next/link";

export default function AdminSidebar() {
  return (
    <div className="h-screen w-64 bg-gradient-to-b from-blue-700 to-purple-700 text-white flex flex-col p-6 shadow-xl">

      {/* COMPANY BRAND */}
      <div className="mb-10 text-center">
        <img
          src="/logo.png"
          alt="Company Logo"
          className="w-16 h-16 mx-auto mb-3 rounded-full bg-white p-1"
        />
        <h2 className="text-xl font-bold">Jaliwa Freight</h2>
        <p className="text-sm opacity-80">Admin Panel</p>
      </div>

      {/* NAVIGATION */}
      <nav className="flex flex-col gap-4">
        <Link href="/admin" className="hover:bg-white/20 p-3 rounded-lg">
          📦 Dashboard
        </Link>

        <Link href="/gallery" className="hover:bg-white/20 p-3 rounded-lg">
          🖼 Gallery
        </Link>

        <Link href="/" className="hover:bg-white/20 p-3 rounded-lg">
          🌐 Website
        </Link>
      </nav>

      {/* FOOTER */}
      <div className="mt-auto text-xs opacity-70">
        © {new Date().getFullYear()} Jaliwa Freight Ltd
      </div>
    </div>
  );
}
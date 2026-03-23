"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md p-4">

      <div className="flex justify-between items-center max-w-7xl mx-auto">

        <Link href="/" className="font-bold text-blue-700">
          Jaliwa Freight
        </Link>

        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className="hidden md:flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/track">Track</Link>
          <Link href="/contact">Contact</Link>
        </nav>

      </div>

      {menuOpen && (
        <div className="md:hidden mt-4 space-y-3">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/track">Track</Link>
          <Link href="/contact">Contact</Link>
        </div>
      )}

    </header>
  );
}
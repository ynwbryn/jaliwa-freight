"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md p-4">

      <div className="flex justify-between items-center max-w-7xl mx-auto">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/logo.png" alt="logo" width={40} height={40} />
          <span className="font-bold text-blue-700">Jaliwa Freight</span>
        </Link>

        {/* MENU BUTTON */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* DESKTOP */}
        <nav className="hidden md:flex gap-8">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/track">Track</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>

      {/* MOBILE */}
      {menuOpen && (
        <div className="flex flex-col gap-4 mt-4 px-4">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/track">Track</Link>
          <Link href="/contact">Contact</Link>
        </div>
      )}

    </header>
  );
}
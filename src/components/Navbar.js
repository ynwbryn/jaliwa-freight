import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        <h1 className="text-xl font-bold text-blue-700">
          Jaliwa Freight
        </h1>

        <ul className="flex items-center gap-8 text-gray-700 font-medium">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/tracking">Tracking</Link></li>
          <li><Link href="/quote">Quote</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>

      </div>
    </nav>
  );
}
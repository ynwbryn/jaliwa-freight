export default function AdminLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-400 via-purple-400 to-indigo-600">

      {/* SIDEBAR */}
      <aside className="w-64 bg-gradient-to-b from-indigo-700 to-purple-700 text-white p-6 shadow-xl relative">
        <h1 className="text-2xl font-bold mb-10">
          🚚 Jaliwa Freight
        </h1>

        <nav className="space-y-6">
          <a href="/admin" className="block hover:text-yellow-300">
            📊 Dashboard
          </a>

          <a href="/gallery" className="block hover:text-yellow-300">
            🖼 Gallery
          </a>

          <a href="/" className="block hover:text-yellow-300">
            🌐 Website
          </a>
        </nav>

        <p className="absolute bottom-6 text-sm opacity-70">
          © 2026 Jaliwa Freight Ltd
        </p>
      </aside>

      {/* PAGE CONTENT */}
      <main className="flex-1 p-10">
        {children}
      </main>

    </div>
  );
}
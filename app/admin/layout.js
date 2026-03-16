export default function AdminLayout({ children }) {
  const generateTracking = () => {
  const prefix = "JF";
  const random = Math.floor(100000000 + Math.random() * 900000000);
  return `${prefix}${random}`;
};
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-400 via-purple-400 to-indigo-600">

      {/* SIDEBAR */}
      <nav className="space-y-3 mt-10 text-sm">

  <a href="/admin"
     className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10 transition">
     📊 Dashboard
  </a>

  <a href="/admin/shipments"
     className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10 transition">
     📦 Shipments
  </a>

  <a href="/admin/create"
     className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10 transition">
     ➕ Create Shipment
  </a>

  <a href="/admin/gallery"
     className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10 transition">
     🖼 Media
  </a>

</nav>

      {/* PAGE CONTENT */}
      <main className="flex-1 p-10">
        {children}
      </main>

    </div>
  );
}
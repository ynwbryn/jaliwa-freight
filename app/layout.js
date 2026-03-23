import "./globals.css";
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
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800">

        {/* ✅ NAVBAR (CLIENT COMPONENT HANDLES MENU) */}
        <Navbar />

        {/* MAIN CONTENT */}
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
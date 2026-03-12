"use client";

import Link from "next/link";
import { useState } from "react";

export default function Quote() {

  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center p-6 bg-white shadow-md">
        <h1 className="text-xl font-bold text-blue-700">
          Jaliwa Freight Ltd
        </h1>

        <div className="space-x-6 font-medium">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <Link href="/gallery" className="hover:text-blue-600">Gallery</Link>
          <Link href="/track" className="hover:text-blue-600">Track</Link>
          <Link href="/contact" className="hover:text-blue-600">Contact</Link>
        </div>
      </nav>

      {/* PAGE TITLE */}
      <div className="text-center mt-12">
        <h1 className="text-4xl font-bold text-blue-800">
          Request a Freight Quote
        </h1>

        <p className="text-gray-700 mt-3">
          Fast • Reliable • Global Cargo Solutions
        </p>
      </div>

      {/* FORM CONTAINER */}
      <div className="flex justify-center mt-10 px-4">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-2xl space-y-6 border border-blue-200"
        >

          {/* NAME */}
          <div>
            <label className="block font-semibold text-gray-800 mb-1">
              Full Name
            </label>
            <input
              type="text"
              required
              placeholder="John Doe"
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          {/* EMAIL */}
          <div>
            <label className="block font-semibold text-gray-800 mb-1">
              Email Address
            </label>
            <input
              type="email"
              required
              placeholder="example@email.com"
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          {/* PHONE */}
          <div>
            <label className="block font-semibold text-gray-800 mb-1">
              Phone Number
            </label>
            <input
              type="text"
              placeholder="+254..."
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          {/* ORIGIN */}
          <div>
            <label className="block font-semibold text-gray-800 mb-1">
              Origin Country
            </label>
            <input
              type="text"
              placeholder="Kenya"
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          {/* DESTINATION */}
          <div>
            <label className="block font-semibold text-gray-800 mb-1">
              Destination Country
            </label>
            <input
              type="text"
              placeholder="Netherlands"
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          {/* CARGO TYPE */}
          <div>
            <label className="block font-semibold text-gray-800 mb-1">
              Cargo Description
            </label>
            <textarea
              rows="3"
              placeholder="Fresh flowers, herbs, general cargo..."
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition duration-300 shadow-lg"
          >
            Request Quote
          </button>

          {/* SUCCESS MESSAGE */}
          {submitted && (
            <p className="text-green-600 text-center font-semibold mt-4">
              ✅ Quote request sent successfully! Our team will contact you shortly.
            </p>
          )}
        </form>
      </div>

    </div>
  );
}
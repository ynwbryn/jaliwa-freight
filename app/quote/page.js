"use client";

import { useState } from "react";

export default function Quote() {

  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-cyan-100 py-14 px-6">

      {/* PAGE TITLE */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-700">
          Request a Freight Quote
        </h1>

        <p className="text-gray-600 mt-2">
          Fast • Reliable • Global Cargo Solutions
        </p>
      </div>

      {/* FORM CARD */}
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-10 border border-blue-100">

        {submitted ? (

          <div className="text-center py-10">
            <h2 className="text-2xl font-bold text-green-600">
              ✅ Quote Request Submitted!
            </h2>

            <p className="text-gray-600 mt-3">
              Our team will contact you shortly.
            </p>
          </div>

        ) : (

          <form onSubmit={handleSubmit} className="space-y-6">

            <input
              type="text"
              placeholder="Full Name"
              required
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-400"
            />

            <input
              type="email"
              placeholder="Email Address"
              required
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-400"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              required
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-400"
            />

            <input
              type="text"
              placeholder="Origin Country"
              required
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-400"
            />

            <input
              type="text"
              placeholder="Destination Country"
              required
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-400"
            />

            <textarea
              placeholder="Cargo Description"
              rows="4"
              required
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-400"
            />

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 rounded-lg text-lg font-semibold hover:scale-105 transition"
            >
              Request Quote
            </button>

          </form>

        )}

      </div>
    </div>
  );
}
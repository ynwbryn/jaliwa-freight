"use client";

import { useState } from "react";

export default function Quote() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 py-12 px-4">
      
      {/* PAGE TITLE */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-800">
          Request a Freight Quote
        </h1>

        <p className="text-gray-600 mt-3">
          Fast • Reliable • Global Cargo Solutions
        </p>
      </div>

      {/* FORM CARD */}
      <div className="max-w-2xl mx-auto bg-white shadow-xl rounded-2xl p-8 border border-blue-100">
        {submitted ? (
          <div className="text-center py-10">
            <h2 className="text-2xl font-semibold text-green-600">
              ✅ Quote Request Submitted!
            </h2>
            <p className="text-gray-600 mt-2">
              Our logistics team will contact you shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Full Name */}
            <div>
              <label className="block font-semibold text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                required
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block font-semibold text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="example@email.com"
                required
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block font-semibold text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+254..."
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>

            {/* Origin */}
            <div>
              <label className="block font-semibold text-gray-700 mb-1">
                Origin Country
              </label>
              <input
                type="text"
                placeholder="Kenya"
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>

            {/* Destination */}
            <div>
              <label className="block font-semibold text-gray-700 mb-1">
                Destination Country
              </label>
              <input
                type="text"
                placeholder="Netherlands"
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>

            {/* Cargo */}
            <div>
              <label className="block font-semibold text-gray-700 mb-1">
                Cargo Description
              </label>
              <textarea
                rows="4"
                placeholder="Fresh flowers, herbs, general cargo..."
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold py-3 rounded-lg hover:scale-[1.02] transition"
            >
              Request Quote
            </button>

          </form>
        )}
      </div>
    </div>
  );
}
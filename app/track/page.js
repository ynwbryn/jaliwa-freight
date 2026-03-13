"use client";

import { useState } from "react";

export default function TrackPage() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [shipment, setShipment] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleTrack(e) {
    e.preventDefault();
    setLoading(true);

    const res = await fetch(`/api/track?tracking=${trackingNumber}`);
    const data = await res.json();

    setShipment(data);
    setLoading(false);
  }

  const timeline = [
    { label: "Order Received", value: 10 },
    { label: "Picked Up", value: 25 },
    { label: "In Transit", value: 50 },
    { label: "Customs Clearance", value: 70 },
    { label: "Out For Delivery", value: 90 },
    { label: "Delivered", value: 100 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex justify-center items-start py-12 px-4">

      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl p-10 border border-blue-100">

        <h1 className="text-4xl font-bold text-blue-700 mb-8 text-center">
          Track Your Shipment
        </h1>

        {/* SEARCH FORM */}
        <form onSubmit={handleTrack} className="flex gap-3 mb-10">
          <input
            type="text"
            placeholder="Enter Tracking Number"
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
            className="flex-1 border-2 border-blue-200 focus:border-blue-500 outline-none rounded-lg px-5 py-3 text-gray-800 shadow-sm"
            required
          />

          <button
            type="submit"
            className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-lg font-semibold shadow hover:scale-105 transition"
          >
            {loading ? "Tracking..." : "Track"}
          </button>
        </form>

        {/* RESULTS */}
        {shipment && (
          <div className="bg-blue-50 rounded-xl p-6 shadow-inner">

            <h2 className="text-2xl font-semibold text-blue-700 mb-6">
              Shipment Status
            </h2>

            {/* EVENTS */}
            <div className="space-y-4">
              {shipment.events?.map((event, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow border-l-4 border-blue-500"
                >
                  <p className="text-gray-800 font-semibold">
                    📍 {event.location}
                  </p>

                  <p className="text-sm text-gray-600">
                    {new Date(event.createdAt).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>

            {/* PROGRESS BAR */}
            <div className="mt-8">
              <div className="w-full bg-gray-200 rounded-full h-5 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 h-5 transition-all duration-700"
                  style={{ width: `${shipment.progress}%` }}
                ></div>
              </div>

              <p className="text-center mt-3 font-semibold text-blue-700">
                {shipment.progress}% Completed
              </p>
            </div>

          </div>
        )}

      </div>

    </div>
  );
}
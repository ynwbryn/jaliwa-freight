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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-6 flex justify-center">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-8">

        <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">
          Track Your Shipment
        </h1>

        {/* SEARCH FORM */}
        <form onSubmit={handleTrack} className="flex gap-3 mb-8">
          <input
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
            placeholder="Enter Tracking Number"
            className="flex-1 border-2 border-blue-200 p-3 rounded-lg focus:outline-none focus:border-blue-500"
            required
          />

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 rounded-lg">
            Track
          </button>
        </form>

        {loading && (
          <p className="text-center text-blue-600">Searching shipment...</p>
        )}

        {/* RESULTS */}
        {shipment && shipment.trackingNumber && (
          <div>

            {/* Shipment Details */}
            <div className="bg-blue-50 p-4 rounded-lg mb-8">
              <p><b>Status:</b> {shipment.status}</p>
              <p><b>Origin:</b> {shipment.origin}</p>
              <p><b>Destination:</b> {shipment.destination}</p>
              <p><b>Current Location:</b> {shipment.location}</p>
            </div>

    {/* TIMELINE */}
<div className="relative border-l-4 border-blue-200 ml-4">

  {shipment.events?.map((event, index) => (
    <div key={index} className="mb-10 ml-6 relative">

      <span className="absolute -left-[34px] flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white">
        ✓
      </span>

      <h3 className="font-semibold text-blue-700 text-lg">
        {event.status}
      </h3>

      <p className="text-gray-600">
        📍 {event.location}
      </p>

      <p className="text-sm text-gray-400">
        {new Date(event.createdAt).toLocaleString()}
      </p>

    </div>
  ))}
</div>

            {/* PROGRESS BAR */}
            <div className="mt-8">
              <div className="w-full bg-gray-200 rounded-full h-5 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-blue-500 to-blue-700 h-5 rounded-full transition-all duration-700"
                  style={{ width: `${shipment.progress}%` }}
                ></div>
              </div>

              <p className="text-center mt-2 font-semibold text-blue-700">
                {shipment.progress}% Completed
              </p>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}
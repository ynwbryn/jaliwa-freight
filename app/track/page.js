"use client";

import { useState } from "react";

export default function TrackPage() {
  const [tracking, setTracking] = useState("");
  const [shipment, setShipment] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleTrack(e) {
    e.preventDefault();

    setLoading(true);
    setError("");
    setShipment(null);

    try {
      const res = await fetch(
        `/api/track?tracking=${tracking}`
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error);
      }

      setShipment(data);
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-4xl mx-auto">

        {/* SEARCH CARD */}
        <div className="bg-white shadow-xl rounded-2xl p-10 text-center">
          <h1 className="text-4xl font-bold text-blue-700 mb-6">
            Track Your Shipment
          </h1>

          <form
            onSubmit={handleTrack}
            className="flex gap-3"
          >
            <input
              type="text"
              placeholder="Enter Tracking Number"
              value={tracking}
              onChange={(e) =>
                setTracking(e.target.value)
              }
              className="border rounded-lg px-4 py-3 w-full"
              required
            />

            <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 rounded-lg">
              Track
            </button>
          </form>
        </div>

        {/* LOADING */}
        {loading && (
          <p className="text-center mt-6 font-semibold">
            Loading shipment...
          </p>
        )}

        {/* ERROR */}
        {error && (
          <p className="text-center text-red-600 mt-6">
            {error}
          </p>
        )}

        {/* RESULT */}
        {shipment && (
          <div className="bg-white shadow-xl rounded-2xl p-8 mt-10">
            <h2 className="text-2xl font-bold text-blue-700 mb-6">
              Shipment Details
            </h2>

            <p><strong>Status:</strong> {shipment.status}</p>
            <p><strong>Origin:</strong> {shipment.origin}</p>
            <p><strong>Destination:</strong> {shipment.destination}</p>

            {/* DHL STYLE TIMELINE */}
            <div className="mt-8">
              <h3 className="font-bold mb-4">
                Tracking History
              </h3>

              {shipment.events.map((event, i) => (
                <div
                  key={i}
                  className="border-l-4 border-blue-600 pl-4 mb-6"
                >
                  <p className="font-semibold">
                    {event.location}
                  </p>
                  <p className="text-gray-600">
                    {event.description}
                  </p>
                  <p className="text-xs text-gray-500">
                    {new Date(
                      event.createdAt
                    ).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
"use client";

import { useEffect, useState } from "react";

export default function AdminClient() {

  /* ================= TRACKING GENERATOR ================= */
  const generateTracking = () => {
    const prefix = "JF";
    const random = Math.floor(100000000 + Math.random() * 900000000);
    return `${prefix}${random}`;
  };

  /* ================= STATES ================= */
  const [shipments, setShipments] = useState([]);

  const [form, setForm] = useState({
    trackingNumber: generateTracking(),
    origin: "",
    destination: "",
    status: "",
    progress: "",
    location: "",
  });

  /* ================= LOAD SHIPMENTS ================= */
  useEffect(() => {
    fetchShipments();
  }, []);

  const fetchShipments = async () => {
    const res = await fetch("/api/shipments");
    const data = await res.json();
    setShipments(data);
  };

  /* ================= HANDLE CHANGE ================= */
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  /* ================= CREATE SHIPMENT ================= */
  const createShipment = async (e) => {
    e.preventDefault();

    await fetch("/api/shipments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    // reload shipments
    fetchShipments();

    // reset form + new tracking
    setForm({
      trackingNumber: generateTracking(),
      origin: "",
      destination: "",
      status: "",
      progress: "",
      location: "",
    });
  };

  /* ================= UI ================= */
  return (
    <div className="space-y-10 text-gray-800">

      {/* CREATE SHIPMENT */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">
          Create Shipment
        </h2>

        <form onSubmit={createShipment} className="grid md:grid-cols-2 gap-4">

          {/* Tracking Number */}
          <input
            className="input"
            name="trackingNumber"
            value={form.trackingNumber}
            readOnly
          />

          <input
            className="input"
            name="origin"
            placeholder="Origin"
            value={form.origin}
            onChange={handleChange}
            required
          />

          <input
            className="input"
            name="destination"
            placeholder="Destination"
            value={form.destination}
            onChange={handleChange}
            required
          />

          {/* STATUS DROPDOWN */}
          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="input"
            required
          >
            <option value="">Select Status</option>
            <option value="Processing">Processing</option>
            <option value="In Transit">In Transit</option>
            <option value="Arrived at Hub">Arrived at Hub</option>
            <option value="Out for Delivery">Out for Delivery</option>
            <option value="Delivered">Delivered</option>
          </select>

          <input
            className="input"
            name="progress"
            placeholder="Progress (0-100)"
            value={form.progress}
            onChange={handleChange}
          />

          <input
            className="input"
            name="location"
            placeholder="Current Location"
            value={form.location}
            onChange={handleChange}
          />

          <button
            type="submit"
            className="bg-blue-600 text-white py-3 rounded-lg col-span-2 hover:bg-blue-700"
          >
            Create Shipment
          </button>
        </form>
      </div>

      {/* SHIPMENT LIST */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">
          Shipments
        </h2>

        <div className="space-y-3">
          {shipments.map((s, i) => (
            <div
              key={i}
              className="border p-4 rounded-lg flex justify-between"
            >
              <div>
                <p className="font-semibold">{s.trackingNumber}</p>
                <p>{s.origin} → {s.destination}</p>
                <p className="text-sm text-gray-500">{s.status}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
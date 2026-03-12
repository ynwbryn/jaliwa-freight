"use client";

import { useEffect, useState } from "react";

export default function AdminClient() {
  const [shipments, setShipments] = useState([]);
  const [gallery, setGallery] = useState([]);

  const [form, setForm] = useState({
    trackingNumber: "",
    origin: "",
    destination: "",
    status: "",
    progress: "",
    location: "",
  });

  /* ================= LOAD DATA ================= */

  useEffect(() => {
    fetchShipments();
    fetchGallery();
  }, []);

  const fetchShipments = async () => {
    const res = await fetch("/api/shipments");
    const data = await res.json();
    setShipments(data);
  };

  const fetchGallery = async () => {
    const res = await fetch("/api/gallery");
    const data = await res.json();
    setGallery(data);
  };

  /* ================= FORM ================= */

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const saveShipment = async () => {
    await fetch("/api/shipments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setForm({
      trackingNumber: "",
      origin: "",
      destination: "",
      status: "",
      progress: "",
      location: "",
    });

    fetchShipments();
  };

  const deleteShipment = async (id) => {
    await fetch(`/api/shipments?id=${id}`, {
      method: "DELETE",
    });

    fetchShipments();
  };

  /* ================= GALLERY ================= */

  const uploadImages = async (e) => {
    const files = e.target.files;
    const formData = new FormData();

    for (let file of files) {
      formData.append("files", file);
    }

    await fetch("/api/gallery", {
      method: "POST",
      body: formData,
    });

    fetchGallery();
  };

  const deleteImage = async (id) => {
    await fetch(`/api/gallery?id=${id}`, {
      method: "DELETE",
    });

    fetchGallery();
  };

  /* ================= UI ================= */

  return (
    <div className="space-y-12 text-gray-800">

      {/* ================= CREATE SHIPMENT ================= */}
      <div className="bg-gradient-to-br from-white to-blue-50 border border-blue-200 rounded-3xl shadow-2xl p-10">

        <h2 className="text-3xl font-extrabold text-blue-700 mb-8">
          🚚 Create Shipment
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {Object.keys(form).map((key) => (
            <input
              key={key}
              name={key}
              placeholder={key.toUpperCase()}
              value={form[key]}
              onChange={handleChange}
              className="
              p-4 rounded-xl
              bg-white
              border-2 border-blue-300
              focus:border-purple-500
              shadow-sm
              outline-none
              font-semibold
              text-gray-700
              "
            />
          ))}
        </div>

        <button
          onClick={saveShipment}
          className="
          mt-8 w-full py-4
          rounded-xl text-white text-lg font-bold
          bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700
          hover:scale-[1.02]
          transition-all duration-300
          shadow-lg
          "
        >
          Save Shipment
        </button>
      </div>

      {/* ================= GALLERY ================= */}
      <div className="bg-gradient-to-br from-white to-purple-50 border border-purple-200 rounded-3xl shadow-2xl p-10">

        <h2 className="text-3xl font-extrabold text-purple-700 mb-8">
          🖼 Gallery Manager
        </h2>

        <input
          type="file"
          multiple
          onChange={uploadImages}
          className="
          w-full p-4
          rounded-xl
          border-2 border-purple-300
          bg-white
          cursor-pointer
          font-semibold
          "
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          {gallery.map((img) => (
            <div
              key={img.id}
              className="relative group"
            >
              <img
                src={img.url}
                className="rounded-xl shadow-lg w-full h-40 object-cover"
              />

              <button
                onClick={() => deleteImage(img.id)}
                className="
                absolute top-2 right-2
                bg-red-500 hover:bg-red-600
                text-white text-sm
                px-3 py-1 rounded-lg
                shadow-md
                "
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* ================= SHIPMENTS ================= */}
      <div className="bg-gradient-to-br from-white to-indigo-50 border border-indigo-200 rounded-3xl shadow-2xl p-10">

        <h2 className="text-3xl font-extrabold text-indigo-700 mb-8">
          📦 Shipments
        </h2>

        <div className="space-y-5">
          {shipments.map((s) => (
            <div
              key={s.id}
              className="
              flex justify-between items-center
              bg-white
              border border-indigo-200
              rounded-xl
              p-6
              shadow-md
              hover:shadow-xl
              transition
              "
            >
              <div>
                <p className="font-bold text-xl text-gray-800">
                  {s.trackingNumber}
                </p>

                <p className="text-gray-600">
                  {s.origin} → {s.destination}
                </p>

                <p className="text-green-600 font-bold">
                  {s.progress}% Complete
                </p>
              </div>

              <button
                onClick={() => deleteShipment(s.id)}
                className="
                bg-red-500 hover:bg-red-600
                text-white font-bold
                px-6 py-2
                rounded-xl
                shadow
                "
              >
                Delete
              </button>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}
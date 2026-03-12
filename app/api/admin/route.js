import { NextResponse } from "next/server";
import db from "@/lib/db";

// CREATE NEW SHIPMENT
export async function POST(req) {
  try {
    const {
      trackingNumber,
      origin,
      destination,
      status,
      progress,
      location,
    } = await req.json();

    const stmt = db.prepare(`
      INSERT INTO shipments
      (trackingNumber, origin, destination, status, progress, location)
      VALUES (?, ?, ?, ?, ?, ?)
    `);

    stmt.run(
      trackingNumber,
      origin,
      destination,
      status,
      progress,
      location
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
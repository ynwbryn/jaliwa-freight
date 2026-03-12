import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function POST(req) {
  const { trackingNumber, status, location } = await req.json();

  db.prepare(`
    INSERT INTO shipment_events
    (trackingNumber, status, location)
    VALUES (?, ?, ?)
  `).run(trackingNumber, status, location);

  return NextResponse.json({ success: true });
}
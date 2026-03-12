import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const tracking = searchParams.get("tracking");

  const shipment = db
    .prepare("SELECT * FROM shipments WHERE trackingNumber=?")
    .get(tracking);

  const events = db
    .prepare(`
      SELECT * FROM shipment_events
      WHERE trackingNumber=?
      ORDER BY createdAt DESC
    `)
    .all(tracking);

  return NextResponse.json({
    ...shipment,
    events,
  });
}
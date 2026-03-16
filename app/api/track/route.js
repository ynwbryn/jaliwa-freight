import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const tracking = searchParams.get("tracking");

    if (!tracking) {
      return NextResponse.json(
        { error: "Tracking number required" },
        { status: 400 }
      );
    }

    // shipment
    const shipment = db
      .prepare(
        "SELECT * FROM shipments WHERE trackingNumber=?"
      )
      .get(tracking);

    if (!shipment) {
      return NextResponse.json(
        { error: "Shipment not found" },
        { status: 404 }
      );
    }

    // events
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
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
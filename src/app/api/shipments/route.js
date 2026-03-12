import { NextResponse } from "next/server";
import db from "@/lib/db";

// GET ALL SHIPMENTS
export async function GET() {
  const shipments = db
    .prepare("SELECT * FROM shipments ORDER BY id DESC")
    .all();

  return NextResponse.json(shipments);
}
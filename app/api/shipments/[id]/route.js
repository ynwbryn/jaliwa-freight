import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function DELETE(req, { params }) {
  const { id } = params;

  db.prepare("DELETE FROM shipments WHERE id = ?").run(id);

  return NextResponse.json({ success: true });
}
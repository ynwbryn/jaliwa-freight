import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const uploadDir = path.join(process.cwd(), "public/uploads");

  let images = [];

  if (fs.existsSync(uploadDir)) {
    images = fs.readdirSync(uploadDir);
  }

  return NextResponse.json(images);
}
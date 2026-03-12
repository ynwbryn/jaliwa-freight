import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import formidable from "formidable";

// Required for file uploads in App Router
export const runtime = "nodejs";

export async function POST(request) {
  const uploadDir = path.join(process.cwd(), "public/uploads");

  // create uploads folder if missing
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  // Convert Web Request → Node stream
  const req = Object.assign(request, {
    headers: Object.fromEntries(request.headers),
  });

  const form = formidable({
    multiples: true,
    uploadDir,
    keepExtensions: true,
  });

  return new Promise((resolve) => {
    form.parse(req, (err, fields, files) => {
      if (err) {
        resolve(
          NextResponse.json(
            { error: "Upload failed" },
            { status: 500 }
          )
        );
        return;
      }

      resolve(
        NextResponse.json({
          message: "Upload successful",
          files,
        })
      );
    });
  });
}
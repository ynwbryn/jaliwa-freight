import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(req) {
  const { username, password } = await req.json();

  if (username === "admin" && password === "1234") {
    const token = jwt.sign({ admin: true }, "SECRET_KEY", {
      expiresIn: "1d",
    });

    const response = NextResponse.json({ success: true });

    response.cookies.set("admin_token", token, {
      httpOnly: true,
      path: "/",
    });

    return response;
  }

  return NextResponse.json({ error: "Invalid login" }, { status: 401 });
}
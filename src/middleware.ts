import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { jwtVerify } from "jose";

export async function middleware(req: NextRequest) {
  const cookieNext = await cookies();
  const token = cookieNext?.get("accessToken")?.value;
  console.log("Token from middleware:", typeof token);
  try {
    if (!token || typeof token !== "string") {
      return NextResponse.redirect(new URL("/unauthorized", req.url));
    }
    const decoded = jwtVerify(
      token,
      new TextEncoder().encode(process.env.ACCESS_TOKEN_SECRET!)
    );
    if (!decoded) {
      return NextResponse.redirect(new URL("/unauthorized", req.url));
    }
    return NextResponse.next();
  } catch (err) {
    console.error("Error in middleware:", err);
    return NextResponse.json({ error: err }, { status: 403 });
  }
}

export const config = {
  matcher: ["/admin/:path*"], // Protect all routes under /api/protected
};

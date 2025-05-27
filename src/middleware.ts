import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { jwtVerify } from "jose";

export async function middleware(req: NextRequest) {
  const cookieStore = await cookies();
  let accessToken = cookieStore.get("accessToken")?.value;
  const refreshToken = cookieStore.get("refreshToken")?.value;

  try {
    if (!accessToken || !refreshToken) {
      cookieStore.delete("accessToken");
      cookieStore.delete("refreshToken");

      return NextResponse.redirect(new URL("/login", req.url));
    }

    if (accessToken) {
      try {
        const { payload } = await jwtVerify(
          accessToken,
          new TextEncoder().encode(process.env.NEXT_ACCESS_TOKEN_SECRET!)
        );
        const expiresIn = payload.exp && payload.exp * 1000 - Date.now();
        console.log("payload", expiresIn, 1 * 60 * 1000);
        if (expiresIn && expiresIn < 1 * 60 * 1000) {
          const refreshResponse = await fetch(
            new URL("/api/refresh", req.url),
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Cookie: req.headers.get("Cookie") || "",
              },
              body: JSON.stringify({ refreshToken }),
            }
          );
          const { accessToken: newAccessToken, expiresIn } =
            await refreshResponse.json();

          const response = NextResponse.next();
          response.cookies.set({
            name: "accessToken",
            value: newAccessToken,
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            path: "/",
            maxAge: expiresIn || 15 * 60,
          });

          if (!refreshResponse.ok) {
            throw new Error("Refresh failed");
          }

          return response;
        } else {
          return NextResponse.next();
        }
      } catch (accessTokenError: any) {
        if (accessTokenError?.code !== "ERR_JWT_EXPIRED" || !refreshToken) {
          throw accessTokenError;
        }
        console.log("Access token expired, refreshing...");
      }
    }

    return NextResponse.next();
  } catch (error) {
    console.error("Authentication error:", error);

    const response = NextResponse.redirect(new URL("/login", req.url));
    response.cookies.delete("accessToken");
    response.cookies.delete("refreshToken");

    return response;
  }
}

export const config = {
  matcher: ["/admin/:path*"],
};

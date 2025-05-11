import jwt from "jsonwebtoken";

export async function GET(req: Request) {
  const cookieHeader = req.headers.get("cookie");
  const refreshToken = cookieHeader
    ?.split("; ")
    .find((c) => c.startsWith("refreshToken="))
    ?.split("=")[1];

  if (!refreshToken) {
    return new Response(
      JSON.stringify({ error: "No refresh token provided" }),
      {
        status: 401,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  try {
    const payload = jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET!
    ) as any;

    const newAccessToken = jwt.sign(
      { _id: payload._id },
      process.env.ACCESS_TOKEN_SECRET!,
      { expiresIn: "15m" }
    );

    return new Response(JSON.stringify({ accessToken: newAccessToken }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ error: "Invalid or expired refresh token" }),
      {
        status: 403,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

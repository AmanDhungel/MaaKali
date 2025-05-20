import connectionDB from "@/connectDB/connectionDB";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(request: Request) {
  await connectionDB();
  const parseBody = await request.json();
  const { email, password } = parseBody;

  try {
    const emailExists = await User.findOne({ email });
    if (!emailExists) {
      return new Response(JSON.stringify({ error: "User not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    const isPasswordValid = await bcrypt.compare(
      password,
      emailExists.password
    );

    if (!isPasswordValid) {
      return new Response(
        JSON.stringify({ error: "Invalid username or password" }),
        {
          status: 401,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const accessToken = jwt.sign(
      { _id: emailExists._id },
      process.env.ACCESS_TOKEN_SECRET!,
      { expiresIn: "15m" }
    );

    const refreshToken = jwt.sign(
      { _id: emailExists._id },
      process.env.REFRESH_TOKEN_SECRET!,
      { expiresIn: "7d" }
    );

    return new Response(
      JSON.stringify({
        message: "Logged in successfully",
        accessToken,
        status: 200,
      }),
      {
        status: 200,
        headers: {
          "Set-Cookie": `refreshToken=${refreshToken}; HttpOnly; Path=/; Max-Age=604800; SameSite=Strict; Secure`,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("error from login", error);
    return new Response(
      JSON.stringify({ message: "Something went wrong", error }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

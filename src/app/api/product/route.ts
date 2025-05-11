import connectionDB from "@/connectDB/connectionDB";
import Product from "@/models/product.js";
import User from "@/models/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function GET() {
  connectionDB();
  try {
    const product = await Product.find();
    return new Response(JSON.stringify(product), { status: 200 });
  } catch {
    return new Response(JSON.stringify({ message: "Something went wrong" }), {
      status: 500,
    });
  }
}

export async function POST(request: Request) {
  await connectionDB();
  const body = await request.json();
  const { username, password } = body;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return new Response(JSON.stringify({ error: "User not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!user || !isPasswordValid) {
      return new Response(
        JSON.stringify({ error: "Either username or password is incorrect" }),
        {
          status: 401,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const token = jwt.sign(
      { _id: user._id, email: user.email },
      process.env.JWT_SECRET || "yourSecretKey",
      { expiresIn: "1h" }
    );

    const cookieOptions = [
      `token=${token}`,
      "HttpOnly",
      "Path=/",
      "Max-Age=3600",
      "SameSite=Strict",
      "Secure",
    ].join("; ");

    return new Response(JSON.stringify({ message: "logged in successfully" }), {
      status: 200,
      headers: {
        "Set-Cookie": cookieOptions,
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Something went wrong", error }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

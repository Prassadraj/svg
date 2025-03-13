import { connectDB } from "@/app/lib/mongodb";
import Login from "@/app/models/Login";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    const data = await Login.find();
    return NextResponse.json({
      message: data,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: error.message,
      },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const { password, email } = await req.json();
    await connectDB();
    await Login.create({ email, password });
    return NextResponse.json({ message: "Post Successfully" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

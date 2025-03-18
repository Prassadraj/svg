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

export async function PATCH(req) {
  const { password, email } = await req.json();
  if (!email) {
    return NextResponse.json({ message: "email Not found " }, { status: 400 });
  }
  if (!password) {
    return NextResponse.json(
      { message: "newPassword Not found" },
      { status: 400 }
    );
  }
  await connectDB();
  const user = await Login.findOne({ email });
  if (!user) {
    return NextResponse.json({ message: "user not found" }, { status: 400 });
  }
  user.password = password;
  await user.save();
  return NextResponse.json(
    {
      message: "Password Updated",
    },
    { status: 201 }
  );
}

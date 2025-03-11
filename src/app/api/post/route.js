import { connectDB } from "@/app/lib/mongodb";
import User from "@/app/models/User";

import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, email } = await req.json();
    await connectDB();
    await User.create({ name, email });
    console.log(name);
    return NextResponse.json({ message: "Post SuccessFully" }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error.message });
  }
}

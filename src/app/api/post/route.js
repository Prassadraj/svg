import connectDB from "@/app/lib/mongodb";
import User from "@/app/models/User";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const data = await req.json();
    const newData = new User({
      name: data.name,
      email: data.email,
    });
    await connectDB();
    await newData.save();
    return NextResponse.json({ message: "Post SuccessFully" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error.message });
  }
}

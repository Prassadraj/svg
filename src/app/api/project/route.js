import { NextResponse } from "next/server";
import formidable from "formidable";
import { promises as fsPromises } from "fs";
import path from "path";
import { connectDB } from "@/app/lib/mongodb";
import Project from "@/app/models/Project";

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req) {
  try {
    const formData = await req.formData();
    const newData = {
      name: formData.get("name"),
      desc: formData.get("desc"),
      file: formData.get("img"),
    };
    console.log("newData:", newData);
    if (!newData.name || !newData.desc || !newData.file) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const filePath = path.join(
      process.cwd(),
      "public",
      "Project",
      newData.file.name
    );
    console.log(filePath);
    const fileBuffer = await newData.file.arrayBuffer();
    await fsPromises.writeFile(filePath, Buffer.from(fileBuffer));

    await connectDB();

    console.log("newPost:", newData.file.name);

    await Project.create({
      name: newData.name,
      desc: newData.desc,
      img: `/Project/${newData.file.name}`,
    });

    return NextResponse.json({ message: "success" });
  } catch (error) {
    console.error("Error creating post:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

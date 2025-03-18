import { NextResponse } from "next/server";
import { promises as fsPromises } from "fs";
import path from "path";
import { connectDB } from "@/app/lib/mongodb";
import Project from "@/app/models/Project";

export const config = {
  api: {
    bodyParser: false,
  },
};
export async function GET(req) {
  try {
    const url = new URL(req.url);
    const id = url.searchParams.get("postId");
    connectDB();

    if (id) {
      const data = await Project.findById(id);
      if (!data) {
        return NextResponse.json(
          {
            message: "Post not Found",
          },
          { status: 404 }
        );
      }
      return NextResponse.json(
        {
          message: data,
        },
        { status: 200 }
      );
    } else {
      const data = await Project.find();
      if (!data) {
        return NextResponse.json(
          {
            message: "No-Data",
          },
          { status: 404 }
        );
      }
      return NextResponse.json(
        {
          message: data,
        },
        { status: 200 }
      );
    }
  } catch (error) {
    console.log(error);
  }
}

export async function PATCH(req) {
  try {
    const url = new URL(req.url);
    const id = url.searchParams.get("postId");

    const formData = await req.formData(); // Use formData instead of json
    const name = formData.get("name");
    const desc = formData.get("desc");
    const file = formData.get("img");
    await connectDB();
    const post = await Project.findById(id);
    if (!post) {
      return NextResponse.json({
        message: "Not found",
      });
    }
    post.name = name || post.name;
    post.desc = desc || post.desc;

    if (file) {
      const oldPath = path.join(process.cwd(), "public", post.img);
      await fsPromises.unlink(oldPath);
      const newPath = path.join(process.cwd(), "public", "Project", file.name);
      const fileBuffer = await file.arrayBuffer();
      await fsPromises.writeFile(newPath, Buffer.from(fileBuffer));
      post.img = `/Project/${file.name}`;
    }
    await post.save();
    return NextResponse.json({
      message: "Updated",
    });
  } catch (error) {
    console.log(error);
  }
}
export async function DELETE(req) {
  try {
    const url = new URL(req.url);
    const id = url.searchParams.get("postId");
    await connectDB();
    const post = await Project.findById(id);
    if (!post) {
      return NextResponse.json({
        message: "not found",
      });
    }
    await Project.findByIdAndDelete(id);
    const filePath = path.join(process.cwd(), "public", post.img);
    try {
      await fsPromises.unlink(filePath);
      console.log("pic deleted");
    } catch (error) {
      if (error.code === "ENOENT") {
        // File not found
        console.log(`File ${filePath} not found, skipping deletion.`);
      } else {
        console.error(`Error deleting file ${filePath}:`, error);
        // Handle other errors appropriately (e.g., re-throw if critical)
        // throw error;  // Example: re-throw if you want to stop execution
      }
    }
    return NextResponse.json({
      message: "pic and post deleted",
    });
  } catch (error) {
    console.log(error);
  }
}

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

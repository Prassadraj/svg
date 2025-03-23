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
          data,
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
          data,
        },
        { status: 200 }
      );
    }
  } catch (error) {
    console.log(error);
  }
}

export async function PUT(req) {
  try {
    const url = new URL(req.url);
    const id = url.searchParams.get("postId");

    const formData = await req.formData();
    const name = formData.get("name");
    const desc = formData.get("desc");
    const completeStr = formData.get("complete");
    const complete = completeStr === "true";

    // Retrieve all "img" fields (paths or File objects)
    const imgs = formData.getAll("img");

    await connectDB();

    const post = await Project.findById(id);

    if (!post) {
      return NextResponse.json({ message: "Post not found" }, { status: 404 });
    }

    post.name = name || post.name;
    post.desc = desc || post.desc;
    post.complete = complete;

    const newImagePaths = [];

    for (const img of imgs) {
      if (typeof img === "string" && img.startsWith("/Project/")) {
        // Existing image path, just reuse it
        newImagePaths.push(img);
      } else if (img && img.name) {
        // It's a File, save it!
        const buffer = Buffer.from(await img.arrayBuffer());
        const fileName = img.name;
        const savePath = path.join(
          process.cwd(),
          "public",
          "Project",
          fileName
        );

        await fsPromises.writeFile(savePath, buffer);
        console.log(`Saved new image: ${savePath}`);

        newImagePaths.push(`/Project/${fileName}`);
      }
    }

    // Delete old images that were replaced
    const deletedImages = post.img.filter(
      (oldImg) => !newImagePaths.includes(oldImg)
    );

    for (const oldImgPath of deletedImages) {
      const absoluteOldPath = path.join(process.cwd(), "public", oldImgPath);
      try {
        await fsPromises.unlink(absoluteOldPath);
        console.log(`Deleted old image: ${absoluteOldPath}`);
      } catch (error) {
        if (error.code !== "ENOENT") {
          console.error(`Error deleting ${absoluteOldPath}:`, error);
        }
      }
    }

    // Update post image list
    post.img = newImagePaths;

    await post.save();

    return NextResponse.json({
      message: "Post updated successfully",
      data: post,
    });
  } catch (error) {
    console.error("PUT error:", error);
    return NextResponse.json(
      { message: "Internal Server Error", error: error.message },
      { status: 500 }
    );
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
    await Project.findById(id);
    const imgArray = post.img; // array of image paths
    if (Array.isArray(imgArray)) {
      for (const imgPath of imgArray) {
        const filePath = path.join(process.cwd(), "public", imgPath);

        try {
          await fsPromises.unlink(filePath);
          console.log(`Deleted file: ${filePath}`);
        } catch (error) {
          if (error.code === "ENOENT") {
            console.log(`File not found: ${filePath}, skipping...`);
          } else {
            console.error(`Error deleting file ${filePath}:`, error);
          }
        }
      }
    }

    // Delete the post from the database
    await Project.findByIdAndDelete(id);

    return NextResponse.json({
      message: "Post and images deleted successfully",
    });
  } catch (error) {
    console.error("DELETE error:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const formData = await req.formData();
    const newData = {
      name: formData.get("name"),
      desc: formData.get("desc"),
      file: formData.getAll("img"),
      complete: formData.get("complete"),
    };
    console.log("newData:", newData);
    if (!newData.name || !newData.desc || !newData.file || !newData.file) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }
    const uploadedImages = [];
    for (const file of newData.file) {
      const fileBuffer = await file.arrayBuffer();
      const fileName = file.name;
      const filePath = path.join(process.cwd(), "public", "Project", fileName);

      await fsPromises.writeFile(filePath, Buffer.from(fileBuffer));
      uploadedImages.push(`/Project/${fileName}`);
    }

    await connectDB();

    console.log("newPost:", newData.file.name);

    const data = await Project.create({
      name: newData.name,
      desc: newData.desc,
      img: uploadedImages,
      complete: newData.complete,
    });

    return NextResponse.json({ message: data });
  } catch (error) {
    console.error("Error creating post:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

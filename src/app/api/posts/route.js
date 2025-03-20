import { NextResponse } from "next/server";
import { connectDB } from "@/app/lib/mongodb";
import Project from "@/app/models/Project";
import formidable from "formidable";
import { promises as fs } from "fs";
import path from "path";
import { Readable } from "stream";

export const config = {
  api: {
    bodyParser: false, // Disable Next.js body parser
  },
};

// ➤ Helper: Save file to the uploads folder
const uploadFile = async (file) => {
  const uploadDir = path.join(process.cwd(), "public/uploads");
  await fs.mkdir(uploadDir, { recursive: true });

  const filePath = path.join(uploadDir, file.newFilename);
  await fs.rename(file.filepath, filePath);

  return `/uploads/${file.newFilename}`;
};

// ➤ Helper: Convert body into a readable stream
const requestToStream = async (req) => {
  const body = await req.arrayBuffer();
  return Readable.from(Buffer.from(body));
};

// ➤ GET: Fetch projects
export async function GET(req) {
  try {
    await connectDB();

    const url = new URL(req.url);
    const projectId = url.searchParams.get("projectId");

    if (projectId) {
      const projectById = await Project.findById(projectId);
      if (!projectById) {
        return NextResponse.json({ error: "Project not found" }, { status: 404 });
      }
      return NextResponse.json(projectById);
    } else {
      const projects = await Project.find();
      return NextResponse.json(projects);
    }
  } catch (error) {
    console.error("Error fetching projects:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// ➤ POST: Create project with image upload
export async function POST(req) {
  try {
    await connectDB();

    const stream = await requestToStream(req); // ✅ Convert the body to stream

    const form = formidable({ multiples: false });

    const [fields, files] = await new Promise((resolve, reject) => {
      form.parse(stream, (err, fields, files) => {
        if (err) reject(err);
        else resolve([fields, files]);
      });
    });

    const { name, desc } = fields;
    const imageFile = files.img ? files.img[0] : null;

    if (!name || !desc || !imageFile) {
      return NextResponse.json(
        { error: "All fields (name, desc, img) are required" },
        { status: 400 }
      );
    }

    const imageUrl = await uploadFile(imageFile);

    const newProject = new Project({
      name: name[0],
      desc: desc[0],
      img: imageUrl,
    });

    const savedProject = await newProject.save();
    return NextResponse.json(savedProject, { status: 201 });

  } catch (error) {
    console.error("Error creating project:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// ➤ PATCH: Update project with optional image upload
export async function PATCH(req) {
  try {
    await connectDB();

    const url = new URL(req.url);
    const projectId = url.searchParams.get("projectId");

    if (!projectId) {
      return NextResponse.json({ error: "Project ID is required" }, { status: 400 });
    }

    const stream = await requestToStream(req); // ✅ Convert the body to stream

    const form = formidable({ multiples: false });

    const [fields, files] = await new Promise((resolve, reject) => {
      form.parse(stream, (err, fields, files) => {
        if (err) reject(err);
        else resolve([fields, files]);
      });
    });

    const { name, desc } = fields;
    const imageFile = files.img ? files.img[0] : null;

    const updateData = {};
    if (name) updateData.name = name[0];
    if (desc) updateData.desc = desc[0];

    if (imageFile) {
      const imageUrl = await uploadFile(imageFile);
      updateData.img = imageUrl;
    }

    const updatedProject = await Project.findByIdAndUpdate(
      projectId,
      updateData,
      { new: true }
    );

    if (!updatedProject) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    return NextResponse.json(updatedProject);

  } catch (error) {
    console.error("Error updating project:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// ➤ DELETE: Remove project by ID
export async function DELETE(req) {
  try {
    await connectDB();

    const url = new URL(req.url);
    const projectId = url.searchParams.get("projectId");

    if (!projectId) {
      return NextResponse.json({ error: "Project ID is required" }, { status: 400 });
    }

    const deletedProject = await Project.findByIdAndDelete(projectId);

    if (!deletedProject) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Project deleted successfully" });

  } catch (error) {
    console.error("Error deleting project:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

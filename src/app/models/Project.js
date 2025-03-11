import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    name: { type: String },
    desc: { type: String },
    img: { type: String },
  },
  { timestamps: true }
);

export default mongoose.models.Project ||
  mongoose.model("Project", projectSchema);

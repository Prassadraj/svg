import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    name: { type: String },
    desc: { type: String },
    img: { type: String },
  },
  { timestamps: true, collection: "projectinfo" }
);

export default mongoose.models.projectinfo ||
  mongoose.model("projectinfo", projectSchema);

import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    name: { type: String },
    desc: { type: String },
    img: { type: [String] },
    complete: { type: Boolean },
  },
  { timestamps: true, collection: "images" }
);

export default mongoose.models.images ||
  mongoose.model("images", projectSchema);

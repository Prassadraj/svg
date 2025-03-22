import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    name: { type: String },
    desc: { type: String },
    img: { type: String },
    complete: { type: Boolean },
  },
  { timestamps: true, collection: "desi" }
);

export default mongoose.models.desi ||
  mongoose.model("desi", projectSchema);

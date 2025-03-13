import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true, collection: "logins" }
);
export default mongoose.models.Login || mongoose.model("Login", userSchema);

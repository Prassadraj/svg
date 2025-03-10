import mongoose from "mongoose";

const connectDB = async () => {
  if (mongoose.connections[0].readyState) {
    console.log("already connected");
  }
  try {
    const db = await mongoose.connect(process.env.MONGO_URL);
    console.log("db connected");
  } catch (error) {
    console.log("connection error");
    process.exit(1);
  }
};
export default connectDB;

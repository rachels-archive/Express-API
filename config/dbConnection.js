import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.CONNECTION_STRING);
    console.log("Database connected: ", connect.connection.host, connect.connection.name);
  } catch (err) {
    console.error("Database connection error:", err);
    process.exit(1);
  }
};

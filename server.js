import express from "express";
import mongoose from "mongoose";
import contactRouter from "./routes/contactRouter.js";
import userRouter from "./routes/userRouter.js";
import { errorHandler } from "./middleware/errorHandler.js";
import { connectDb } from "./config/dbConnection.js";
import dotenv from "dotenv";
dotenv.config();

// Enable Mongoose debugging
mongoose.set("debug", true);

// Connect to the database
await connectDb();

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.json());
app.use("/api/contacts", contactRouter);
app.use("/api/users", userRouter);
app.use(errorHandler);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

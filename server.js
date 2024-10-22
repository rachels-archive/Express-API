import express from "express";
import mongoose from "mongoose";
import contactRouter from "./routes/contactRouter.js";
import { errorHandler } from "./middleware/errorHandler.js";
import { connectDb } from "./config/dbConnection.js";

// Enable Mongoose debugging
mongoose.set("debug", true);

// Connect to the database
await connectDb();

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.json());
app.use("/api/contacts", contactRouter);
app.use(errorHandler);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

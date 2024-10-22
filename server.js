import express from "express";
import contactRouter from "./routes/contactRouter.js";
import { errorHandler } from "./middleware/errorHandler.js";
import { connectDb } from "./config/dbConnection.js";

connectDb();
const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.json());
app.use("/api/contacts", contactRouter);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

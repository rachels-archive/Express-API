import express from "express";
import contactRouter from "./routes/contactRouter.js";

const app = express();

const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.json());

app.use("/api/contacts", contactRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

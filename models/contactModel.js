import mongoose from "mongoose";

export const contactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add name."],
    },
    email: {
      type: String,
      required: [true, "Please add email address."],
    },
    phone: {
      type: String,
      required: [true, "Please add contact number."],
    },
  },
  {
    timestamp: true,
  }
);
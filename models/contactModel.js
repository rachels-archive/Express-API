import mongoose from "mongoose";

const contactSchema = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
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
    timestamps: true,
  }
);

export default mongoose.model("Contact", contactSchema);

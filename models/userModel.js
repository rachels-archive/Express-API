import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please add username."],
    },
    email: {
      type: String,
      required: [true, "Please add email address."],
      unique: [true, "Email already taken"],
    },
    password: {
      type: String,
      required: [true, "Please add password."],
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);

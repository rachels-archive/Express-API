import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// @desc Register a user
// @route POST /api/users/register
// @access public

const passwordStrengthValidator = (password) => {
  const minLength = 8;
  const hasNumbers = /\d/.test(password);

  return password.length >= minLength && hasNumbers;
};

export const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are required");
  }

  const isUserAvailable = await User.findOne({ email });
  if (isUserAvailable) {
    res.status(400);
    throw new Error("User already registered.");
  }

  if (!passwordStrengthValidator(password)) {
    res.status(400);
    throw new Error("Password must be at least 8 characters and at least 1 number.");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({
    username,
    email,
    password: hashedPassword,
  });

  res.status(201).json({ message: "User registered successfully", _id: newUser.id, email: newUser.email });
});

// @desc Login user
// @route POST /api/users/login
// @access public
export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("All fields are required");
  }

  const user = await User.findOne({ email });

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (user && passwordMatch) {
    const accessToken = jwt.sign(
      {
        user: {
          username: user.username,
          email: user.email,
          id: user.id,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "1m" }
    );
    res.status(200).json({ accessToken });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

// @desc Current user info
// @route GET /api/users/login
// @access private
export const currentUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Curreny user info" });
});

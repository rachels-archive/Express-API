import asyncHandler from "express-async-handler";

// @desc Register a user
// @route POST /api/users/register
// @access public
export const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "User registered" });
});

// @desc Login user
// @route POST /api/users/login
// @access public
export const loginUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "User logged in" });
});

// @desc Current user info
// @route GET /api/users/login
// @access private
export const currentUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Curreny user info" });
});

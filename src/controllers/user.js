// Importing required modules
import apiError from "../utils/ApiError.js"; // Custom error handler
import apiResponce from "../utils/ApiResponse.js"; // Response handler
import asyncHandler from "../utils/asyncHandler.js"; // Async handler for promises
import cloudinary from "../utils/cloudinary.js"; // Cloud storage service for image uploads
import userModel from "../models/user.models.js"; // User model for database interactions

import jwt from "jsonwebtoken"; // JWT for authentication
import mongoose from "mongoose"; // MongoDB object modeling library

// Hello World route handler - Public Route
const helloWorld = (req, res) => {
  res.send("Hello, World! - Public Route"); // Sends a simple message
};

const registerUser = asyncHandler(async (req, res) => {});

// Exporting method to be used in the routes
export { helloWorld, registerUser }; // Export the helloWorld function

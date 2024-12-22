// dbconfig.js

// Importing required modules
import mongoose from "mongoose"; // MongoDB ODM for Node.js
import dotenv from "dotenv"; // Package to load environment variables from .env file
import { dbName } from "../constant.js"; // Importing database name from constants

// Load environment variables from .env file
dotenv.config();

// Getting MongoDB Atlas URL from environment variables and Database Name from constant
const dbAtlasUrl = process.env.DB_ATLAS_URL;
const dbLocalUrl = process.env.DB_LOCAL_URL;

// Form the full MongoDB connection ATLAS URL
const dbURI = `${dbAtlasUrl}/${dbName}`;
// Form the full MongoDB connection ATLAS URL
const dbURI2 = `${dbLocalUrl}/${dbName}`;

// Function to connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(dbURI2); // Establish connection to MongoDB
    console.log(`MongoDB connected successfully to database: ${dbName}`);
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
    process.exit(1); // Exit the process with failure if connection fails
  }
};

// Exporting the connectDB function to be used elsewhere
export default connectDB; // Export the function for MongoDB connection

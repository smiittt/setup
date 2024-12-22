// Importing required modules
import dotenv from "dotenv"; // For loading environment variables
import connectDB from "./db/dbconfig.js";// Database connection logic
import app from "./app.js"; // Express application instance

// Load environment variables from .env file
dotenv.config();

// Connect to the database and start the server
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port: ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection failed!", err);
  });

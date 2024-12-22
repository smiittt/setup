// Importing required modules
import express from "express";  // Express.js for building web applications
import userRouter from "./routes/user.js";  // User route handler

// Creating an Express app instance
const app = express();

// Middleware to parse incoming JSON data
app.use(express.json());

// Using the routers for user and demo routes
app.use("/api/v1/user", userRouter);  // User routes under /api/v1/user

// Exporting the app to be used in index.js
export default app;  // Exporting the Express app instance

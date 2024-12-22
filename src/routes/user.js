// Importing required modules
import express from "express"; // Express framework for building routes
import { helloWorld } from "../controllers/user.js"; // Importing the helloWorld method from user controller

// Creating a new router instance
const router = express.Router();

// Defining the "/hello" route for GET requests
router.route("/hello").get(helloWorld);

// Exporting the router for use in other parts of the application
export default router;

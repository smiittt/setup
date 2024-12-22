// Importing required modules
import multer from "multer"; // Middleware for handling multipart/form-data (file uploads)

// Setting up storage configuration for multer
const storage = multer.diskStorage({
  // Destination folder for file uploads
  destination: function (req, file, cb) {
    cb(null, "./public/temp"); // Save files to the 'temp' folder inside 'public'
  },
  // Filename configuration for uploaded files
  filename: function (req, file, cb) {
    cb(null, file.fieldname); // Use the fieldname as the file name
  },
});

// Creating multer instance with the storage configuration
const upload = multer({ storage: storage });

// Exporting the upload middleware to be used in routes
export default upload; // Export the upload instance for file handling

import cloudinary from "cloudinary";
import fs from "fs";

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadToCloudinary = async function (localFilePath) {
  try {
    if (!localFilePath) return null;
    // Uploading to Cloudinary
    const response = await cloudinary.v2.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    console.log("File uploaded successfully: ", response.url);
    return response.url; // Return the URL of the uploaded file
  } catch (error) {
    console.error("Error uploading file to Cloudinary: ", error);
    if (fs.existsSync(localFilePath)) {
      fs.unlinkSync(localFilePath); // Remove the local file after failure
    }
    return null;
  }
};

export default uploadToCloudinary;

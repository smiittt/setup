// Importing required modules
import mongoose from "mongoose"; // MongoDB object modeling tool
import jwt from "jsonwebtoken"; // Library for generating JSON Web Tokens
import bcrypt from "bcrypt"; // Library for hashing and comparing passwords

// Defining the user schema
const userSchema = new mongoose.Schema(
  {},
  {
    timestamps: true, // Automatically manage createdAt and updatedAt fields
  }
);

// Hash the password before saving the user document
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10); // Hashing password with bcrypt
  next();
});

// Method to check if entered password matches the stored hashed password
userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password); // Comparing entered password with the stored hash
};

// Method to generate access token
userSchema.methods.generateAccessToken = async function () {
  return jwt.sign(
    { _id: this._id, email: this.email },
    process.env.ACCESS_TOKEN_SECRET, // Secret for signing access token
    { expiresIn: process.env.ACCESS_TOKEN_EXPIRY } // Expiry time from environment variable
  );
};

// Method to generate refresh token
userSchema.methods.generateRefreshToken = async function () {
  return jwt.sign(
    { _id: this._id, email: this.email },
    process.env.REFRESH_TOKEN_SECRET, // Secret for signing refresh token
    { expiresIn: process.env.REFRESH_TOKEN_EXPIRY } // Expiry time from environment variable
  );
};

// Create and export the 'User' model as a default export
export default mongoose.model("User", userSchema);

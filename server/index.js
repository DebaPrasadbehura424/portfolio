const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 5000;

// CORS Configuration - Allowing your frontend origin
const whitelist = ["https://portfolio-frontend-theta-sepia.vercel.app"]; // Frontend URL
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      // Allow requests from allowed origins
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"],
  credentials: true,
};

app.use(express.json());
app.use(cors(corsOptions)); // Apply CORS middleware

// MongoDB connection using process.env for security
mongoose
  .connect(process.env.MONGO_URI) // Store this URI in .env file
  .then(() => {
    console.log("connected to database");
  })
  .catch((err) => {
    console.log("Error is: ", err);
  });

// Define the user schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contactNumber: { type: String, required: true },
  description: { type: String },
});

// Create a user model
const User = mongoose.model("User", userSchema);

// Test route to check if backend is running
app.get("/", (req, res) => {
  res.send("Backend is running & all are good");
});

// Post request for user data
app.post("/users", async (req, res) => {
  const { name, contactNumber, description } = req.body;
  try {
    const newUser = new User({ name, contactNumber, description });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    console.error("Error creating user:", err);
    res
      .status(500)
      .json({ message: "Error creating user", error: err.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});

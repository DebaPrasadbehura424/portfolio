const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Initialize the app
const app = express();

// Debugging middleware to log all incoming requests
app.use((req, res, next) => {
  console.log(`${req.method} request received on ${req.url}`);
  console.log("Request origin:", req.headers.origin);
  console.log("Request body:", req.body);
  next();
});

// Middleware to enable CORS with dynamic origin check
const allowedOrigins = [
  "https://portfolio-client-two-mauve.vercel.app",
  "https://portfolio-client-dehabmohantys-projects.vercel.app",
  "https://portfolio-client-git-main-dehabmohantys-projects.vercel.app",
];
app.use(
  cors({
    origin: function (origin, callback) {
      if (allowedOrigins.includes(origin) || !origin) {
        callback(null, true);
      } else {
        console.error("Blocked by CORS - Origin not allowed:", origin);
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
  })
);

// Handle preflight (OPTIONS) requests
app.options("*", cors());

// Middleware to parse JSON data
app.use(express.json());

// MongoDB connection
mongoose

  .connect(
    "mongodb+srv://debaprasadbehura89:SrOPEXkCoTHEx1Fc@cluster0.9chhe.mongodb.net/Namaste?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to MongoDB Atlas");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB Atlas:", err);
  });

// User schema and model
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contactNumber: { type: String, required: true },
  description: { type: String },
});

const User = mongoose.model("User", userSchema);

// API endpoint to handle user submissions
app.post("/api/users", async (req, res) => {
  const { name, contactNumber, description } = req.body;

  if (!name || !contactNumber) {
    console.error("Validation error: Missing required fields");
    return res
      .status(400)
      .json({ message: "Name and contact number are required." });
  }

  try {
    const newUser = new User({ name, contactNumber, description });
    await newUser.save();
    console.log("New user created:", newUser);
    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (err) {
    console.error("Error saving user:", err);
    res
      .status(500)
      .json({ message: "Internal server error", error: err.message });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Initialize the app
const app = express();

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
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
  })
);

// Middleware to parse JSON data
app.use(express.json());

// MongoDB connection
mongoose
  .connect(
    "mongodb+srv://debaprasadbehura89:SrOPEXkCoTHEx1Fc@cluster0.mongodb.net/Namaste?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
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
    return res
      .status(400)
      .json({ message: "Name and contact number are required." });
  }

  try {
    const newUser = new User({ name, contactNumber, description });
    await newUser.save();
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

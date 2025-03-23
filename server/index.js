const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = 5000;

const corsOptions = {
  origin: (origin, callback) => {
    if (
      origin === "http://localhost:5173" ||
      origin === "https://portfolio-frontend-theta-sepia.vercel.app"
    ) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(cors(corsOptions));

app.options("*", cors(corsOptions));

app.use(cors(corsOptions));

app.options("*", cors(corsOptions));

app.use(express.json());

const uri =
  "mongodb+srv://debaprasadbehura89:SrOPEXkCoTHEx1Fc@cluster0.9chhe.mongodb.net/Namaste?retryWrites=true&w=majority&appName=Cluster0";
mongoose
  .connect(uri)
  .then(() => {
    console.log("connected to database");
  })
  .catch((err) => {
    console.log("Error is: ", err);
  });

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contactNumber: { type: String, required: true },
  description: { type: String },
});

const User = mongoose.model("User", userSchema);

app.get("/", (req, res) => {
  res.send("Backend is running & all are good");
});

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

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});

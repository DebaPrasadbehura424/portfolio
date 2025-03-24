const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const dotnev = require("dotenv").config();

app.use(cors());

app.use(express.json());
app.use(bodyParser.json());

mongoose
  .connect(
    "mongodb+srv://debaprasadbehura89:s5dY5LSzdhymR4AB@cluster0.9chhe.mongodb.net/Agent?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("databse connected ");
  })
  .catch((err) => {
    console.log(err);
  });
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  contactnumber: { type: String, required: true },
  description: { type: String, required: true },
});
const User = mongoose.model("users", userSchema);

app.get("/", (req, res) => {
  res.send("all are good ");
});

app.post("/users", async (req, res) => {
  try {
    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(5001, () => {
  console.log(`Server is running on http://localhost:${5001}`);
});

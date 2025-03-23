const express = require("express");
const path = require("path");
const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.send("backend is running");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Dependencies
const express = require("express");
const path = require("path");
const fs = require("fs");

// Express app set up
const app = express();
const PORT = process.env.PORT || 3000;

// Data parsing handling for Express app
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/portfolio.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/contact.html"));
});

app.get("/aboutMe", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/aboutMe.html"));
});

// Start server
app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
  });
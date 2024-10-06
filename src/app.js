const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from app server");
});
app.get("/hello", (req, res) => {
  res.send("Hello from heelo world");
});

app.listen(3200, () => {
  console.log("Server running");
});

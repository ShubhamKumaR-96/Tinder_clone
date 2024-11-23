const express = require("express");
const { connectDB } = require("./config/database");
const User = require("./models/user.model");
require("./config/database");

const app = express();

app.post("/users", async (req, res) => {
  const user = new User({
    firstName: "shubh",
    lastName: "Deva",
    email: "shubh@gmail.com",
    age: 21,
    gender: "male",
  });
  try {
    await user.save();
    res.send("User data created successfully");
  } catch (error) {
    res.status(400).send("Error saving the user", error.message);
  }
});

connectDB()
  .then(() => {
    console.log("Database connection establish");
    app.listen(2002, () => {
      console.log("Server running");
    });
  })
  .catch((err) => {
    console.log("Database connection not connected",err);
  });

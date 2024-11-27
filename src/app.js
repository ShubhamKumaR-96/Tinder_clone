const express = require("express");
const { connectDB } = require("./config/database");
const User = require("./models/user.model");
require("./config/database");

const app = express();

app.use(express.json());

// Sign up
app.post("/signup", async (req, res) => {
  console.log(req.body);
  const user = new User(req.body);
  try {
    await user.save();
    res.send("User data created successfully");
  } catch (error) {
    res.status(400).send("Error saving the user", error.message);
  }
});

// Get user by email

app.get("/user", async (req, res) => {
  const userEmail = req.body.email;
  try {
    const userEmailId = await User.find({ email: userEmail });
    if (userEmailId.length === 0) {
      res.status(404).send("User not found");
    } else {
      res.send(userEmailId);
    }
  } catch (error) {
    res.status(500).send("Something went wrong");
  }
});

// get all users
app.get("/feed", async (req, res) => {
  try {
    const allUserId = await User.find({});
    res.send(allUserId);
  } catch (error) {
    console.log("Error", error);
  }
});

// delete user by id
app.delete("/user", async (req, res) => {
  const userId = req.body._id;
  try {
    const user = await User.findByIdAndDelete(userId);
    res.send("user deleted successfully");
  } catch (error) {
    console.log("Error", error);
  }
});

app.patch('/update',async(req,res)=>{
  const userId=req.body._id;
  const data=req.body;
  try {
    await User.findByIdAndUpdate({_id:userId},data)
    res.send("User data updated Successfully")
  } catch (error) {
    console.log("Error", error);
  }
})

connectDB()
  .then(() => {
    console.log("Database connection establish");
    app.listen(2002, () => {
      console.log("Server running");
    });
  })
  .catch((err) => {
    console.log("Database connection not connected", err);
  });

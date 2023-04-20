const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());

app.use(bodyParser.json());

mongoose.connect("mongodb://127.0.0.1:27017/FitnessLogin", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Database connected");
});

//login shcema
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

//register schema
const memberSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
});

// const User = mongoose.model("User", userSchema);
const Member = mongoose.model("Member", memberSchema);

//register API
app.post("/members/create", async (req, res) => {
  try {
    // Create new member object from request body
    const newMember = new Member(req.body);

    // Save new member object to database
    await newMember.save();

    // Return success message to client
    res.status(201).send("Member registration successful");
  } catch (error) {
    // Return error message to client
    res.status(500).send(error.message);
  }
});

// Get Users API
app.get("/members/getAll", async (req, res) => {
  try {
    // Find all members in the database
    const members = await Member.find();

    // Return the members to the client
    res.json(members);
  } catch (error) {
    // Return error message to client
    res.status(500).send(error.message);
  }
});

//Login API
app.post("/user/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Member.findOne({ email });

    if (!user) {
      console.log("User not found");
      //   return res.status(404).json({ message: "User not found" });
      return res.send(false);
    }

    // const match = await bcrypt.compare(password, user.password);
    if (password == user.password) {
      match = 1;
    } else {
      match = 0;
    }
    console.log(password);
    console.log(user.password);
    if (!match) {
      console.log("Invalid");
      //   return res.status(401).json({ message: "Invalid credentials" });
      return res.send(false);
    }

    // const token = jwt.sign({ userId: user._id }, "mysecretkey");

    res.send(true);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

const PORT = 3001; // set the port for your app

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

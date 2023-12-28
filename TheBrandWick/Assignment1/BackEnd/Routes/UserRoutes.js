const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { UserModel } = require("../Models/UserModel");

const UserRoute = express.Router();

// SignUp
UserRoute.post("/signup", async (req, res) => {
  try {
    const { userName, email, password } = req.body;

    // Checking if user already exists
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ msg: "Email already exists!" });
    }

    // Hashing the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new UserModel({
      userName,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(200).json({ msg: "User Registered Successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "User registeration error!" });
  }
});

// Login
UserRoute.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Checking if the user exists
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ msg: "User not found!" });
    }

    // Checking password
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ msg: "Wrong Password!" });
    }

    // Generating JWT token
    const token = jwt.sign({ userId: user._id }, "TheBrandWick");

    res.status(200).json({ msg: "Login Successfull", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "User login error!" });
  }
});

module.exports = { UserRoute };

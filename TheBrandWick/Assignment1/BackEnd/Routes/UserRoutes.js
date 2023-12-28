const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { UserModel } = require("../Models/UserModel");

const UserRoute = express.Router();

// SignUp
UserRoute.post("/signup", async (req, res) => {
  try {
    const { userName, email, password, phone } = req.body;

    // Checking if user email already exists
    const existingUserEmail = await UserModel.findOne({ email });
    if (existingUserEmail) {
      return res.status(400).json({ msg: "Email already exists!" });
    }
    // Checking if user phone already exists
    const existingUserPhone = await UserModel.findOne({ phone });
    if (existingUserPhone) {
      return res
        .status(400)
        .json({ msg: "This phone number has already been registered!" });
    }

    // Hashing the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new UserModel({
      userName,
      email,
      phone,
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
    const { emailOrPhone, password } = req.body;

    // Checking if the user exists by email
    let user = await UserModel.findOne({ email: emailOrPhone });

    if (!user) {
      // Checking if the user exists by phone no.
      user = await UserModel.findOne({ phone: emailOrPhone });
    }

    if (!user) {
      return res.status(404).json({ msg: "User not found!" });
    }

    // Checking password
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ msg: "Wrong Password!" });
    }

    // Generating JWT token
    const token = jwt.sign({ userId: user._id }, "TheBrandWick", {
      expiresIn: "1h",
    });

    res
      .status(200)
      .json({ msg: "Login Successfull", userName: user.userName, token });
  } catch (error) {
    console.error("User LogIn Error:-", error);
    res.status(500).json({ msg: "User login error!" });
  }
});

module.exports = { UserRoute };

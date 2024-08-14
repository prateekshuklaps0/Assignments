const bcrypt = require("bcrypt");
const express = require("express");
const jwt = require("jsonwebtoken");

const User = require("../Models/User");
const { AuthMiddleware } = require("../Controllers/AuthMiddleware");

const AuthRouter = express.Router();

// User Home Route
AuthRouter.get("/", async (_, res) => {
  try {
    res.status(200).send("Welcome to the User Homepage!");
  } catch (error) {
    res.status(400).send(`User homepage error : ${error}`);
  }
});

// User Registration Route
AuthRouter.post("/register", async (req, res) => {
  try {
    const { name, email, password, phone, profession } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ msg: "User already exists" });

    bcrypt.hash(password, 10, async (err, hash) => {
      if (err) {
        console.log("Hashing password error :", err);
        res.status(400).send({ msg: "Hashing password error", error: err });
      } else {
        const newUser = new User({
          name,
          email,
          password: hash,
          phone,
          profession,
        });
        await newUser.save();
        res.status(200).send({ msg: "User registered successfully" });
      }
    });
  } catch (error) {
    console.log("Register User Error :", error);
    res.status(500).json({ msg: "Register User Error", error });
  }
});

// User Login Route
AuthRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({
        msg: "User Not Found, Please register first!",
        redirect: "to registeration",
      });

    const PasswordMatched = await bcrypt.compare(password, user.password);
    if (!PasswordMatched)
      return res.status(400).json({ msg: "Invalid email or password" });

    const token = jwt.sign(
      {
        name: user?.name,
        email: user?.email,
        phone: user?.phone,
        profession: user?.profession,
      },
      "PRATEEK_TOKEN"
    );

    res.status(200).json({ msg: "Login successful", token });
  } catch (error) {
    console.log("Login Route Error :", error);
    res.status(500).json({ msg: "Login Route Error", error });
  }
});

// Route to List All Users
AuthRouter.get("/users", AuthMiddleware, async (_, res) => {
  try {
    const users = await User.find({}, "-password");
    res.status(200).json(users);
  } catch (error) {
    console.log("Get Users Route Error :", error);
    res.status(500).json({ msg: "Get Users Route Error", error });
  }
});

// Update User Details Route
AuthRouter.put("/update/:id", AuthMiddleware, async (req, res) => {
  try {
    const { id } = req.params;
    const { name, phone, profession } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      id,
      { name, phone, profession },
      { select: "-password", new: true }
    );

    if (!updatedUser) return res.status(404).json({ msg: "User not found" });

    res.status(200).json({ msg: "User updated successfully", updatedUser });
  } catch (error) {
    console.log("Update User Route Error :", error);
    res.status(500).json({ msg: "Update User Route Error", error });
  }
});

// Route to Delete User
AuthRouter.delete("/delete/:id", AuthMiddleware, async (req, res) => {
  try {
    const { id } = req.params;

    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) return res.status(404).json({ msg: "User not found" });

    res.status(200).json({ msg: "User deleted successfully" });
  } catch (error) {
    console.log("Delete User Route Error :", error);
    res.status(500).json({ msg: "Delete User Route Error", error });
  }
});

module.exports = AuthRouter;

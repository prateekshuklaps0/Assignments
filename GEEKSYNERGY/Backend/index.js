const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");

const AuthRoutes = require("./Routes/Auth");

dotenv.config();
const DB_URL = process.env.DB_URL;
const PORT = process.env.PORT || 8080;
const App = express();

App.use(cors());
App.use(express.json());
mongoose.set("strictQuery", false);

// Routes
App.use("/auth", AuthRoutes);

// Home Route
App.get("/", async (_, res) => {
  try {
    res.status(200).send("Welcome to the Home Route!");
  } catch (error) {
    console.log(`Home Route error : ${error}`);
    res.status(400).send(`Home Route error : ${error}`);
  }
});

App.listen(PORT, async () => {
  try {
    await mongoose.connect(DB_URL);
    console.log(`Connected and Server Running on Port: ${PORT}`);
  } catch (error) {
    console.log("Connection Error :-", error);
  }
});

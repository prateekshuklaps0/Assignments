require("dotenv").config();
const PORT = process.env.PORT || 8080;
const MONGO_URL = process.env.MONGO_URL;

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const { UserRoute } = require("./Routes/UserRoutes");

const app = express();

app.use(express.json());
app.use(cors());

// Routes
app.use("/user", UserRoute);

// Home Route
app.get("/", async (req, res) => {
  try {
    res.status(200).json({ msg: "Welcome to HomeRoute." });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ msg: "Something went Wrong accessing the HomeRoute!" });
  }
});

app.listen(PORT, async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log(`Connected and Server Running on Port: ${PORT}`);
  } catch (error) {
    console.log("Connection Error :-", error);
  }
});

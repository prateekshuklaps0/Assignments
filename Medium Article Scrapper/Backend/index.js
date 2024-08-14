require("dotenv").config();
const DB_URL = process.env.DB_URL;
const PORT = process.env.PORT || 8080;

const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const scrapeRoutes = require("./Routes/Scrape");

const app = express();

app.use(cors());
app.use(express.json());
mongoose.set("strictQuery", false);

// Home Route
app.get("/", async (_, res) => {
  try {
    res.status(200).json({ msg: "Welcome to HomeRoute." });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ msg: "Something went Wrong accessing the HomeRoute!" });
  }
});

// Scrape routes
app.use("/", scrapeRoutes);

app.listen(PORT, async () => {
  try {
    await mongoose.connect(DB_URL);
    console.log(`Connected and Server Running on Port: ${PORT}`);
  } catch (error) {
    console.log("Connection Error :-", error);
  }
});

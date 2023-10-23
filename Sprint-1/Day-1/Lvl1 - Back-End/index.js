const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
const port = process.env.PORT || 8080;

app.use(express.json());

// Home Route
app.get("/", async (req, res) => {
  try {
    res.status(200).json({ msg: "Welcome to Homepage." });
  } catch (error) {
    res.status(500).json({ msg: "Homepage Error", error });
  }
});

app.get("/get", async (req, res) => {
  try {
    const { content, keyword } = req.query;

    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        messages: [
          {
            role: "user",
            content: `Do not give any explaination, just give a ${content} including or related to ${keyword} in hindi and english.`,
          },
        ],
        max_tokens: 3500,
        model: "gpt-3.5-turbo",
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const chatresponse = response.data.choices[0].message.content;
    res.json({ chatresponse });
  } catch (error) {
    console.error(
      "Error:",
      error.response.data ? error.response.data : "Something Went Wrong"
    );
    res.status(500).json({ error: error?.response?.data?.error?.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const express = require("express");
const axios = require("axios");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

app.get("/shayari", async (req, res) => {
  try {
    const keyword = req.query.keyword;
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        messages: [
          {
            role: "user",
            content: `Shayari about ${keyword}`,
          },
        ],
        max_tokens: 100,
        model: "gpt-3.5-turbo",
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.API_KEY}`,

          "Content-Type": "application/json",
        },
      }
    );

    const shayari = response.data.choices[0].message.content;
    res.json({ shayari });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Something Went Wrong" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

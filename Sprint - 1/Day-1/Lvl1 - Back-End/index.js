const express = require("express");
const axios = require("axios");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

app.get("/shayari", async (req, res) => {
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
          // Authorization: `Bearer ${process.env.API_KEY}`,
          // Authorization: `Bearer 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`,
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
    res.status(500).json({ error: "Something Went Wrong" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

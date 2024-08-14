const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    date: { type: String, required: true },
    link: { type: String, required: true },
    likes: { type: Number, required: false },
    img: { type: String, required: false },
    authorImg: { type: String, required: false },
  },
  { versionKey: false }
);

module.exports = { ArticleModel: mongoose.model("article", articleSchema) };

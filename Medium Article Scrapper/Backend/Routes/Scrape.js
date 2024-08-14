const express = require("express");
const mongoose = require("mongoose");
const puppeteer = require("puppeteer");
const { ArticleModel } = require("../Models/articlesSchema");

const router = express.Router();

// Post Scrape Route
router.post("/scrape", async (req, res) => {
  try {
    const { topic } = req.body;

    // checking if topic is provided
    if (!topic) {
      return res
        .status(400)
        .json({ message: "Please provide a topic for article!" });
    }

    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto(`https://medium.com/search?q=${topic}`);
    await page.waitForSelector("#root");

    const articlesData = await page.evaluate(() => {
      // here finding the parent element for the all the articles
      const articleElements = document.querySelectorAll(".l article");
      let articlesArr = [];
      articleElements.forEach((articleItem) => {
        // finding all the elements for required data
        const title =
          articleItem.querySelector(".af > h2:nth-of-type(1)")?.innerText || "";
        const date =
          articleItem.querySelector(".ab .q > span:nth-of-type(1)")
            ?.innerText || "";
        const author =
          articleItem.querySelector(".l > .af > .be")?.innerText || "";
        const link =
          articleItem.querySelector(".kq > a:nth-of-type(1)")?.href ||
          articleItem.querySelector(".ck > .lz > a:nth-of-type(1)")?.href;
        const likes =
          Number(
            articleItem.querySelector(".eo > span:nth-of-type(1)")?.innerHTML
          ) || "";
        const img =
          articleItem.querySelector(".bw:nth-of-type(1)")?.src ||
          articleItem.querySelector(".h > img:nth-of-type(1)")?.src;
        const authorImg =
          articleItem.querySelector(".l > a > .eo > img:nth-of-type(1)")?.src ||
          "";

        articlesArr.push({ title, author, date, link, likes, authorImg, img });
      });

      return articlesArr;
    });

    await browser.close();

    // here making sure to store top 5 articles in database
    if (articlesData.length > 0) {
      const topFiveArticles = articlesData.slice(0, 5);
      const savedArticles = await ArticleModel.insertMany(topFiveArticles);
      const response = savedArticles.map((article) => ({
        id: article._id,
        title: article.title,
      }));

      res.status(200).json(response);
    } else {
      res.status(404).json({ message: "No articles found!" });
    }
  } catch (error) {
    console.error("Error scraping data:", error);
    res.status(500).json({ message: "Error scraping data!" });
  }
});

// Get Articles Route
router.get("/articles", async (req, res) => {
  try {
    const { id } = req.query;

    // checking if id is provided in the querry
    if (!id) {
      return res
        .status(400)
        .json({ message: "Please provide an ID of the article!" });
    }

    // checking if the given id is a valid mongodb id
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid article ID format!" });
    }

    // finding article by id
    const article = await ArticleModel.findById(id);

    // if article not found
    if (!article) {
      return res
        .status(404)
        .json({ message: "Article with given ID not found!" });
    }

    res.status(200).json(article);
  } catch (error) {
    console.error("Error fetching article:", error);
    res.status(500).json({ message: "Error fetching article!" });
  }
});

module.exports = router;

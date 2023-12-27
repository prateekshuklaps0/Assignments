const express = require("express");

const UserRoute = express.Router();

// SignUp
UserRoute.get("/signup", async (req, res) => {
  try {
    res.status(200).json({ msg: "Sign up." });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ msg: "Something went Wrong accessing the HomeRoute!" });
  }
});

// SignIn
UserRoute.get("/signin", async (req, res) => {
  try {
    res.status(200).json({ msg: "Sign up." });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ msg: "Something went Wrong accessing the HomeRoute!" });
  }
});

module.exports = { UserRoute };

/*

To create login authentication using jwt token and UI for login signup page
Api should be in Nodejs
Frontend should be React JS
Api will be for signup -	 
Also we don't need user to register with same email need to show error on frontend if that is the case
Sign in api

*/

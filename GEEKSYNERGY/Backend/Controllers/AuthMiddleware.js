const jwt = require("jsonwebtoken");

export const AuthMiddleware = async (req, res, next) => {
  const { token } = req.headers.authorization;
  if (!token) return res.status(401).json({ msg: "Access token is required" });

  jwt.verify(token, "PRATEEK_TOKEN", (err, user) => {
    if (err)
      return res
        .status(403)
        .json({ msg: "Session expired! Please Login again." });

    req.user = user;
    next();
  });
};

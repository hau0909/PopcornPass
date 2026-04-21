const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

module.exports = (req, res, next) => {
  let token;

  //get token from cookie
  if (req.cookies && req.cookies.token) {
    token = req.cookies.token;
  }

  //get token from header
  if (!token && req.headers.authorization?.startsWith("Bearer ")) {
    token = req.headers.authorization.split(" ")[1];
  }

  //no token
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  //verify token
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

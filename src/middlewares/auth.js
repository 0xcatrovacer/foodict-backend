const jwt = require("jsonwebtoken");

const User = require("../models/user");

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, process.env.FOODICT_JWT_SECRET);
    const user = await User.findOne({
      _id: decoded._id,
      "tokens.token": token,
    });
  } catch (e) {
    res.status(401).send({ error: "Authentication Failed" });
  }
};

module.exports = auth;
const express = require("express");
const bcrypt = require("bcryptjs");

const User = require("../models/user");

const router = new express.Router();

// Create User
router.post("/user/createaccount", async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    const token = await user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (e) {
    res.status(500).send(e);
  }
});

// Login User
router.post("/user/login", async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;
    const user = await User.findOne({ username });

    if (!user) {
      throw new Error("Unable to Login");
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      throw new Error("Unable to Login");
    }

    const token = await user.generateAuthToken();
    res.status(200).send({ user, token });
  } catch (e) {
    res.status(500).send("Unable to Login");
  }
});

module.exports = router;

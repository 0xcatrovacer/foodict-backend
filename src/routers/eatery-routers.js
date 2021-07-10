const express = require("express");
const mongoose = require("mongoose");

const Eatery = require("../models/eatery");

const router = new express.Router();

//Enter Eatery Details
router.post("/eatery/create", async (req, res) => {
  const eatery = new Eatery(req.body);
  try {
    eatery.save();
    res.status(201).send(eatery);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;

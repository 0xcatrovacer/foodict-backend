const express = require("express");

const Eatery = require("../models/eatery");

const router = new express.Router();

//Enter Eatery Details
router.post("/eatery/create", async (req, res) => {
    const eatery = new Eatery(req.body);
    try {
        await eatery.save();
        res.status(201).send(eatery);
    } catch (e) {
        res.status(500).send(e);
    }
});

router.get("/eatery/get", async (req, res) => {
    const eateries = await Eatery.find();
    try {
        res.status(200).send(eateries);
    } catch (e) {
        res.status(500).send(e);
    }
});

module.exports = router;

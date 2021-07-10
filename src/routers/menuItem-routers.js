const express = require("express");
const eaterySelect = require("../middlewares/eateryselect");

const MenuItem = require("../models/menuItem");

const router = new express.Router();

//Enter new item
router.post("/menuitem/new", async (req, res) => {
    const menuItem = new MenuItem(req.body);
    try {
        await menuItem.save();
        res.status(201).send(menuItem);
    } catch (e) {
        res.status(500).send(e);
    }
});

router.get("/menuitem/details", eaterySelect, async (req, res) => {
    try {
        await req.eatery
            .populate({
                path: "menuItems",
            })
            .execPopulate();

        res.status(200).send(req.eatery.menuItems);
    } catch (e) {
        res.status(500).send(e);
    }
});

module.exports = router;

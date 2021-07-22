const express = require("express");
const auth = require("../middlewares/auth");

const Order = require("../models/order");

const router = new express.Router();

//New Order
router.post("/order/neworder", auth, async (req, res) => {
    const order = new Order({
        ...req.body,
        owner: req.user._id,
    });
    try {
        console.log(req);
        await order.save();
        res.status(200).send(order);
    } catch (e) {
        res.status(500).send(e);
    }
});

//Get Past Orders
router.get("/order/pastorders", auth, async (req, res) => {
    try {
        await req.user
            .populate({
                path: "orders",
            })
            .execPopulate();
        res.status(200).send(req.user.orders);
    } catch (e) {
        res.status(500).send(e);
    }
});

module.exports = router;

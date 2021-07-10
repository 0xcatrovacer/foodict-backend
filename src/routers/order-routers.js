const express = require("express");
const auth = require("../middlewares/auth");

const Order = require("../models/order");

const router = new express.Router();

//New Order
router.post("/order/neworder", auth, async (req, res) => {
    const order = new Order(req.body);
    try {
        await order.save();
        res.status(200).send(order);
    } catch (e) {
        res.status(500).send(e);
    }
});

module.exports = router;

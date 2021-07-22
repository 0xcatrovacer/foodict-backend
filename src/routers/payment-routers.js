const express = require("express");
const Razorpay = require("razorpay");
const auth = require("../middlewares/auth");

const router = new express.Router();

//Create an Order
router.post("/payments/order", auth, (req, res) => {
    const instance = new Razorpay({
        key_id: process.env.FOODICT_RZPAY_KEYID,
        key_secret: process.env.FOODICT_RZPAY_KEYSECRET,
    });

    const options = {
        amount: "20000",
        currency: "INR",
    };
    instance.orders.create(options, function (err, order) {
        res.send(order);
    });
});

module.exports = router;

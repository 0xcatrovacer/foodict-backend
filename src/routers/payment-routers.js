const express = require("express");
const Razorpay = require("razorpay");
const shortid = require("shortid");
const auth = require("../middlewares/auth");

const instance = new Razorpay({
    key_id: process.env.FOODICT_RZPAY_KEYID,
    key_secret: process.env.FOODICT_RZPAY_KEYSECRET,
});

const router = new express.Router();

//Create an Order
router.post("/payments/order", auth, async (req, res) => {
    const options = {
        amount: 20000,
        currency: "INR",
        receipt: shortid.generate(),
        payment_capture: 1,
    };
    try {
        const response = await instance.orders.create(options);
        res.send({
            id: response.id,
            currency: response.currency,
            amount: response.amount,
        });
    } catch (e) {
        res.send(e);
    }
});

module.exports = router;

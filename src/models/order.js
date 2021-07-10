const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    order: [
        {
            type: Object,
        },
    ],
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;

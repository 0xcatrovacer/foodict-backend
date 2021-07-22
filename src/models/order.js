const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
    {
        order: [
            {
                type: Object,
            },
        ],
        orderPrice: {
            type: Number,
            required: true,
        },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User",
        },
    },
    {
        timestamps: true,
    }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;

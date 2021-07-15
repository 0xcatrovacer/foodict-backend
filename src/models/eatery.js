const mongoose = require("mongoose");
const { Decimal128 } = require("bson");

const MenuItem = require("./menuItem");

const eaterySchema = new mongoose.Schema({
    eatery_name: {
        type: String,
        trim: true,
        required: true,
    },
    eatery_address: {
        type: String,
        trim: true,
        required: true,
    },
    eatery_desc: {
        type: String,
    },
    latitude: {
        type: Decimal128,
    },
    longitude: {
        type: Decimal128,
    },
    eatery_type: {
        type: String,
        required: true,
        trim: true,
    },
    eatery_imageurl: {
        type: String,
        required: true,
        trim: true,
    },
    avg_rating: {
        type: Number,
    },
});

eaterySchema.virtual("menuItems", {
    ref: "MenuItem",
    localField: "_id",
    foreignField: "restaurant",
});

const Eatery = mongoose.model("Eatery", eaterySchema);

module.exports = Eatery;

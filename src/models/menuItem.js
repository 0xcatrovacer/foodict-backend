const mongoose = require("mongoose");

const menuItemSchema = new mongoose.Schema({
    item_type: {
        type: String,
        trim: true,
        required: true,
    },
    item_name: {
        type: String,
        trim: true,
        required: true,
    },
    item_search_terms: [
        {
            type: String,
            properties: {
                search_term: {
                    trim: true,
                    required: true,
                },
            },
        },
    ],
    veg_type: {
        type: String,
        trim: true,
        required: true,
    },
    item_imageurl: {
        type: String,
        trim: true,
        required: true,
    },
    price: {
        type: Number,
        trim: true,
        required: true,
    },
    res_name: {
        type: String,
        trim: true,
        required: true,
    },
    restaurant: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Eatery",
    },
});

const MenuItem = mongoose.model("MenuItem", menuItemSchema);

module.exports = MenuItem;

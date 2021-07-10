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
  item_search_term: {
    type: String,
    trim: true,
    required: true,
  },
  veg_type: {
    type: String,
    trim: true,
    required: true,
  },
  cuisine_type: {
    type: String,
    trim: true,
    required: true,
  },
  price: {
    type: Number,
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

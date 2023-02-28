const mongoose = require('mongoose');

// Define the Restaurant schema
const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  place_id: {
    type: String,
    required: true,
    unique: true,
  },
  menu: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'MenuItem',
    },
  ],
});

// Define the MenuItem schema
const menuItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  price: Number,
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Restaurant',
  },
});

// Define the Restaurant and MenuItem models
export const Restaurant = mongoose.model('Restaurant', restaurantSchema);
export const MenuItem = mongoose.model('MenuItem', menuItemSchema);


const express = require('express');
const router = express.Router();
const { getPopularDishesInArea } = require('../controllers/restaurantController');

// Route to retrieve popular dishes for restaurants in a certain area
router.get('/popular-dishes', async (req, res) => {
  try {
    // Get the area from the request parameters
    const area = req.query.area;

    // Call the getPopularDishesInArea function to retrieve the popular dishes
    const popularDishes = await getPopularDishesInArea(area);

    // Return the popular dishes in JSON format
    res.json({ popularDishes });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error retrieving popular dishes' });
  }
});

module.exports = router;

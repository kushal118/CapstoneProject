// Import the required libraries and models
const Restaurant = require('../models/restaurant');
const MenuItem = require('../models/menuItem');

// Function to retrieve popular dishes for restaurants in an area
export async function getPopularDishesInArea(area) {
  const restaurants = await axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${area}&radius=500&type=restaurant&key=AIzaSyCq6Kz3-P1OPwzmgmtG7MECLlKHmDw2CmY`);
  const popularDishes = {};

  // Loop through each restaurant and get its menu items
  for (let i = 0; i < restaurants.length; i++) {
    const restaurant = restaurants[i];
    const restaurantDetails = await axios.get(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${restaurant.place_id}&fields=name,menu&key=AIzaSyCq6Kz3-P1OPwzmgmtG7MECLlKHmDw2CmY`);
    const menuItems = restaurantDetails.menu.items;

    // Loop through each menu item and count how many times it appears
    for (let j = 0; j < menuItems.length; j++) {
      const menuItem = menuItems[j];
      const menuItemName = menuItem.name;
      popularDishes[menuItemName] = (popularDishes[menuItemName] || 0) + 1;
    }
  }

  // Sort the popular dishes by popularity
  const sortedDishes = Object.keys(popularDishes).sort((a, b) => popularDishes[b] - popularDishes[a]);

  // Return the list of popular dishes
  return sortedDishes;
}

import express from "express";
const router = express.Router();

router.get('/:restaurantId/menu', menuController.getMenuItemsForRestaurant)
export default router
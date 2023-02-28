import express from "express";
import { getPopularDishesInArea } from "../../controllers/restaurantController.js";
const router = express.Router();


router.get("/dishes",async(req,res)=>{
    try {
        const area=req.query.area;
        const popularDishes = await getPopularDishesInArea(area);
        res.json({popularDishes})

        
    } catch (error) {
        console.error(err);
    res.status(500).json({ message: 'Error retrieving popular dishes' });
        
    }
}
);
export default router
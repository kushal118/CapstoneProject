import express from "express";
const router = express.Router();

router.get("/dishes",async(req,res)=>{
    try {
        const area=req.query.area;
        const popularDishes = await getPopularDishesInArea(area);
        res.json({popu})

        
    } catch (error) {
        
    }
}
);
export default router
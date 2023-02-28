import express from "express";
const router = express.Router();

router.get("/dishes",async(req,res)=>{
    try {
        const area=req.query.area;
        const popularDishes = await getPopularDishesInAre(area);
        res.json({popularDishes})

        
    } catch (error) {
        console.error(err);
    res.status(500).json({ message: 'Error retrieving popular dishes' });
        
    }
}
);
export default router
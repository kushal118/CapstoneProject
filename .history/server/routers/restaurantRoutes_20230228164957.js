const express = require('express');
const router = express.Router();
const {getPopularDishesInArea}= require("../controllers")


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
module.exports=router;
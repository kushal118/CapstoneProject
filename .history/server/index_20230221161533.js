import express from "express";
import router from "./routers/restaurantRoutes";
const app = express();

const PORT = 5000;
app.use("/api/recipes",router);
app.listen(PORT,()=>{
console.log(`running on port ${PORT}`);
});

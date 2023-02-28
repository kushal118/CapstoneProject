const express = require("express")
import router from "./routers/restaurantRoutes.js";
const router = require("./routers/restaurantRoutes")
const app = express();

const PORT = 5000;
app.use("/api/recipes",router);
app.listen(PORT,()=>{
console.log(`running on port ${PORT}`);
});

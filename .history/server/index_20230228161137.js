const express = require("express");
const routes= require("./routers/restaurantRoutes")

const app = express();
const PORT = process.env.PORT || 3000;
app.use('/api', routes);
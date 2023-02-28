import express from "express"
import router from "./routers/restaurantRoutes.js";

const app = express();

const PORT = 3000;

app.use('/api', routes);
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
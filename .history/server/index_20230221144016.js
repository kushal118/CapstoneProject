import express from "express";
const app = express();

const PORT = 5000;
app.use("/api",router);
app.listen(PORT)

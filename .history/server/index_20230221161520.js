import express from "express";
const app = express();

const PORT = 5000;
app.use("/api/re",router);
app.listen(PORT,()=>{
console.log(`running on port ${PORT}`);
});

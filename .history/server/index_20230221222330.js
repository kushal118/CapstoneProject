const express = require("express")
const app = express();
c

const PORT = 5000;
app.use("/api/recipes",router);
app.listen(PORT,()=>{
console.log(`running on port ${PORT}`);
});

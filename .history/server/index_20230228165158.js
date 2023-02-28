import express from "express"
i

const app = express();

const PORT = 3000;

app.use('/api', routes);
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
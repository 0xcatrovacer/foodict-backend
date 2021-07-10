const express = require("express");

const userRouter = require("./routers/user-routers");
const eateryRouter = require("./routers/eatery-routers");

require("./db/mongoose");

const app = express();

app.use(express.json());

app.use(userRouter);
app.use(eateryRouter);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Backend is running on port ${port}`);
});

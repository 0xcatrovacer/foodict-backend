const express = require("express");

const userRouter = require("./routers/user-routers");
const eateryRouter = require("./routers/eatery-routers");
const menuItemRouter = require("./routers/menuItem-routers");
const orderRouter = require("./routers/order-routers");

require("./db/mongoose");

const app = express();

app.use((req, res, next) => {
    res.set("Access-Control-Allow-Origin", "*");
    res.set("Access-Control-Allow-Headers", "*");
    res.set("Access-Control-Allow-Methods", "*");
    if (req.method === "OPTIONS") {
        res.status(200).end();
        return;
    }
    next();
});

app.use(express.json());

app.use(userRouter);
app.use(eateryRouter);
app.use(menuItemRouter);
app.use(orderRouter);

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Backend is running on port ${port}`);
});

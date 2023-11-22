const express = require("express");
require("dotenv").config();
const cors = require("cors");
let app = express();
const stripe = require('stripe')("sk_test_51OEnaDSEZxjLyGkwitGmrxL1KdvWPE4eYd1XgtjLWeMd355kUPbmgplF160ZPU5Whor4wR7nUkesuWSukKkIwhM600SALZ1blw")
const locationRouter = require("../Routes/locationRoutes");
const restRouter = require("../Routes/restaurantRoutes");
const mealRouter = require("../Routes/mealtypesRoutes");
const userRouter = require("../Routes/userRoutes");
const payRouter = require('../Routes/paymentRoutes')


app.use(cors());
app.use(express.json());
app.use("/", userRouter);
app.use("/locations", locationRouter);
app.use("/mealtypes", mealRouter);
app.use("/restaurants", restRouter);
app.use('/', payRouter)


module.exports = app;

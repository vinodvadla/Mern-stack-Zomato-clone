const express = require("express");
const cors = require("cors");
let app = express();
const { auth } = require('./auth')
require("dotenv").config();

// Routers

const locationRouter = require("../Routes/locationRoutes");
const restRouter = require("../Routes/restaurantRoutes");
const mealRouter = require("../Routes/mealtypesRoutes");
const userRouter = require("../Routes/userRoutes");
const payRouter = require('../Routes/paymentRoutes')
const cartrouter = require('../Routes/cartRoutes')

// middlewares

app.use(cors());
app.use(express.json());
app.use("/", userRouter);
app.use("/locations", locationRouter);
app.use("/mealtypes", mealRouter);
app.use("/restaurants", restRouter);
app.use('/', auth, payRouter)
app.use('/cart', auth, cartrouter)


module.exports = app;

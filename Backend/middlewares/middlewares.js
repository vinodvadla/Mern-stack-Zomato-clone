const express = require("express");
const locationRouter = require("../Routes/locationRoutes");
const restRouter = require("../Routes/restaurantRoutes");
const mealRouter = require("../Routes/mealtypesRoutes");
const userRouter = require("../Routes/userRoutes");
require("dotenv").config();
const cors = require("cors");
let app = express();

app.use(cors());
app.use(express.json());
app.use("/", userRouter);
app.use("/locations", locationRouter);
app.use("/mealtypes", mealRouter);
app.use("/restaurants", restRouter);

module.exports = app;

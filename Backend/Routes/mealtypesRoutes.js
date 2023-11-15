const express = require("express");
const Controller = require("../Controllers/mealControllers");

const router = express.Router();
router.get("/All", Controller.getAllMealTypes);
module.exports = router;

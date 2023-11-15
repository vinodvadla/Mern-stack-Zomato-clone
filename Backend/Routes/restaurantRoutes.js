const express = require('express');
const Controllers = require('../Controllers/restaurantControllers')
const router = express.Router();
router
    .get('/All', Controllers.getAllRestaurants)
    .get('/id/:id', Controllers.getById)
    .get('/city/:city', Controllers.getbyCity)
    .get('/mealtype/:mealtype', Controllers.getbyMealType)
    .get('/location/:location', Controllers.getBylocation)
    .get('/cuisine/:cuisine', Controllers.getbyCuisine)
    .get('/lowCost/:lowCost', Controllers.getBylowCost)
    .get('/highCost/:highCost', Controllers.getByhighCost)
    .get('/sort/low', Controllers.sortLow)
    .get('/sort/high', Controllers.sortHigh)

module.exports = router
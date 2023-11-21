const mealModel = require('../Models/mealtypes')
const restModel = require('../Models/restaurants')
const locModel = require('../Models/locations')
const Menu = require('../Models/MenuModel')
const getAllRestaurants = async (req, res) => {
        try {
                const data = await restModel.find();
                res.status(200).json({
                        message: ' restaurants fetched successfully',
                        restaurants: data
                });
        } catch (err) {
                res.status(404).json({
                        error: err
                })
        }
}


const getbyCity = async (req, res) => {
        try {
                const data = await restModel.findOne({ city: req.params.city });
                res.json({
                        message: 'fetched successfully',
                        restaurant: data
                });
        } catch (err) {
                res.status(404).json({
                        error: err
                })
        }
}
const getById = async (req, res) => {
        try {
                const data = await restModel.findById(req.params.id)
                const menu = await Menu.findOne({ restaurant: data.id })

                res.status(200).json({
                        message: "fetched successfully",
                        restaurant: data,
                        menu
                })
        } catch (err) {
                res.status(404).json({
                        error: err
                })
        }
}
const getbyMealType = async (req, res) => {
        try {
                let data = await mealModel.findOne({ name: req.params.mealtype })
                let mealId = data.meal_type
                let resdata = await restModel.findOne({ mealtype_id: mealId })
                res.status(200).json({ restaurant: resdata })
        } catch (err) {
                res.status(404).json({
                        error: err
                })
        }
}
const getBylocation = async (req, res) => {
        try {
                let locname = req.params.location
                let locdata = await locModel.findOne({ name: locname })
                let locId = locdata.location_id
                let resdata = await restModel.findOne({ location_id: locId })
                res.status(200).json({ restaurant: resdata })
        } catch (err) {
                res.status(404).json({
                        error: err
                })
        }
}

const getbyCuisine = async (req, res) => {
        try {
                let cue = req.params.cuisine
                let cuisineData = await restModel.find({ "cuisine.name": cue })
                res.status(200).json({ restaurant: cuisineData })
        } catch (err) {
                res.status(404).json({
                        error: err
                })
        }
}

const getBylowCost = async (req, res) => {
        try {
                let lowCost = req.params.lowCost
                let lowCostData = await restModel.find({ "min_price": { $lte: lowCost } })
                res.status(200).json({ restaurant: lowCostData })
        } catch (err) {
                res.status(404).json({
                        error: err
                })
        }
}

const getByhighCost = async (req, res) => {
        try {
                let highCost = req.params.highCost
                let highCostData = await restModel.find({ "max_price": { $gte: highCost } })
                res.status(200).json({ restaurant: highCostData })
        } catch (err) {
                res.status(404).json({
                        error: err
                })
        }
}
const sortLow = async (req, res) => {
        try {
                let data = await restModel.find().sort({ min_price: 1 })
                console.log(data)
                return res.status(200).json(data)

        } catch (err) {
                res.status(404).json({
                        error: err
                })
        }
}

const sortHigh = async (req, res) => {
        try {
                let data = await restModel.find().sort({ min_price: -1 })
                console.log(data)
                return res.status(200).json(data)

        } catch (err) {
                res.status(404).json({
                        error: err
                })
        }
}

module.exports = { getAllRestaurants, getById, getbyCity, getbyMealType, getBylocation, getbyCuisine, getBylowCost, getByhighCost, sortLow, sortHigh }

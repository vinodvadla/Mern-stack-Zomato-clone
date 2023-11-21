const mongoose = require('mongoose');

const restSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    id: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    location_id: {
        type: Number,
        required: true,
    },
    city_id: {
        type: Number,
        required: true,
    },
    locality: {
        type: String,
        required: true
    },
    thumb: {
        type: Array,
        required: true
    },
    aggregate_rating: {
        type: Number,
        required: true
    },
    rating_text: {
        type: String,
        default: "Very good"
    },
    min_price: {
        type: Number,
        required: true
    },
    contact_number: {
        type: Number,
        required: true
    },
    cuisine: {
        type: Array,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    meal_id: {
        type: Number,
        required: true,
    }
})

const restModel = mongoose.model('restaurant', restSchema)
module.exports = restModel

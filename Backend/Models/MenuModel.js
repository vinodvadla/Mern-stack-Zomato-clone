const mongoose = require('mongoose')

let menuSchema = mongoose.Schema({
    restaurant: {
        type: Number,
        required: true
    },
    menu: [{
        food_type: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    }]
})



let Menu = mongoose.model('Menu', menuSchema)

module.exports = Menu

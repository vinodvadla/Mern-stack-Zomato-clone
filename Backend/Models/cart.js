const mongoose = require('mongoose')


let CartSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    cart: []
})


let Cart = mongoose.model('Cart', CartSchema)
module.exports=Cart

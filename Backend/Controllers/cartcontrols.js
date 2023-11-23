const Cart = require('../Models/cart')
const addtoCart = async (req, res) => {
    try {
        let { cart } = req.body;
        console.log(cart)
        console.log(req.user)
        let exist = await Cart.findOne({ user: req.user })
        if (!exist) {
            await Cart.create({
                user: req.user,
                cart: cart
            })
            return res.status(200).json({ message: "added to cart" })
        } else {
            await Cart.findOneAndUpdate({ user: req.user }, { $set: { cart: cart } })
            res.status(200).json({ message: "added to cart" })
        }

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const getCart = async (req, res) => {
    try {
        let cart = await Cart.findOne({ user: req.user })
        res.status(200).json({ cart: cart })
    } catch (error) {
        console.log(error)
    }
}



module.exports = { addtoCart, getCart }

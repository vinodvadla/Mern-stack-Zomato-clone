const express = require('express')
let router = express.Router()
const stripe = require('stripe')("sk_test_51OEnaDSEZxjLyGkwitGmrxL1KdvWPE4eYd1XgtjLWeMd355kUPbmgplF160ZPU5Whor4wR7nUkesuWSukKkIwhM600SALZ1blw")
router.post('/payment', async (req, res) => {
    const product = req.body
    const lineItems = product.map((pro) => ({
        price_data: {
            currency: "inr",
            product_data: {
                name: pro.name,
            },
            unit_amount: pro.price * 100,
        },
        quantity: pro.qty,
    }))
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: lineItems,
        mode: "payment",
        success_url: "http://localhost:5173/success",
        cancel_url: "http://localhost:5173/cancel"
    })

    res.json({ id: session.id })
})

module.exports = router

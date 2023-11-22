const express = require('express')
const router = express.Router()
let { addtoCart, getCart } = require('../Controllers/cartcontrols')
router.post('/', addtoCart)
router.get('/', getCart)

module.exports = router

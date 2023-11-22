const User = require('../Models/userModel')
const jwt = require("jsonwebtoken")


const auth = async (req, res, next) => {
    try {
        let { authorization } = req.headers
        if (!authorization) return res.status(401).json({ error: "Not Authorized" })
        let token = authorization.split(" ")[1]
        let user = await jwt.verify(token, process.env.SECRET)
        let find = await User.findOne({ _id: user.id })
        if (!find) {
            return res.status(401).json({ error: "Not Authorized" })
        }
        req.user = find._id
        next()
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = { auth }

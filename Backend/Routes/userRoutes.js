const express = require("express");
let { loginUser, signupUser } = require("../Controllers/UserControllers");
let router = express.Router();

router
    .post("/login", loginUser)
    .post("/signup", signupUser);


module.exports = router

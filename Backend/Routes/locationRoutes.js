const express = require('express')
const Controllers = require('../Controllers/locationControllers')
const router = express.Router();
router.get('/All', Controllers.getAllLocations)

module.exports = router

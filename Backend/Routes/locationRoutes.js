const express=require('express')
const locModel=require('../Models/locations')
const Controllers=require('../Controllers/locationControllers')
const router=express.Router();
router.get('/All',Controllers.getAllLocations)


module.exports=router
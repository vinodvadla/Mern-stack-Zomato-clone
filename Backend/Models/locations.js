const mongoose=require('mongoose');


const locSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    city_id:{
        type:Number,
        required:true,
        unique:true
    },
    location_id:{
        type:Number,
        required:true,
        unique:true
    },
    city:{
        type:String,
        required:true
    },
    country_name:{
        type:String,
        required:true
    }
})

const locModel=mongoose.model('location',locSchema)
module.exports=locModel
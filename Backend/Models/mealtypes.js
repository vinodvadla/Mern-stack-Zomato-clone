const mongoose=require('mongoose');


const mealSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    meal_type:{
        type:Number,
        required:true,
        unique:true
    }
})

const MealModel=mongoose.model('mealtype',mealSchema)

module.exports=MealModel
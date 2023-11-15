const mongoose=require('mongoose');

const connectdb=async()=>{
    try{
        await mongoose.connect("mongodb://localhost:27017",{
            dbName:"Zomato",
        })
        console.log("Connected to MongoDB")
    }
    catch(err){
        throw new Error("Couldn't connect to MongoDB")
    }
}
module.exports=connectdb
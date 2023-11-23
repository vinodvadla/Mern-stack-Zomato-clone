const mongoose=require('mongoose');

const connectdb=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI,{
            dbName:"Zomato",
        })
        console.log("Connected to MongoDB")
    }
    catch(err){
        throw new Error(err.message)
    }
}
module.exports=connectdb

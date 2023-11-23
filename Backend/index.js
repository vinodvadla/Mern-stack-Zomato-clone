const app=require('./middlewares/middlewares')
const Dbconnect = require('./database/db')
Dbconnect()



app.listen(process.env.PORT, () => {
    console.log("server running on port 5000")
})

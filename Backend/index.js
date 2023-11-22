const app=require('./middlewares/middlewares')
const Dbconnect = require('./database/db')
Dbconnect()



app.listen(5000, () => {
    console.log("server running on port 5000")
})

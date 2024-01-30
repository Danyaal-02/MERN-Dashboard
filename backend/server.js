const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()
const reportsRoutes = require("./routes/reportsRoutes")

const app = express()

app.use(cors())

app.use(express.json())

app.use((req, res, next) => {
    console.log(req.url, ":", req.method);
    next()
})

app.use("/api/reports", reportsRoutes)

    
mongoose.connect(process.env.MONGOURL)//add MONGOURL in .env
    .then(() => {
        app.listen(process.env.PORT, () => {//add PORT=4000 in .env
            console.log("MONGODB : Connected");
            console.log("PORT : 4000");
        })
    })
const express = require('express')
const app = express()
const cors = require('cors')
const model = require('./model.cjs')
require('./config.cjs')

app.use(cors({
    origin: "*",
}))

app.use(express.json())

app.delete('/delete/:_id/', async(req,res)=>{
    let data = await model.deleteOne(req.params)
    res.send(data)
})

app.listen(3004, ()=>{
    console.log("App is Running on Port 3004 for Delete")
})
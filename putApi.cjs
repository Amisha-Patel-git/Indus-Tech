const express = require('express')
const cors = require('cors')
const app = express()
const model = require('./model.cjs')
require('./config.cjs')

app.use(cors({
    origin: "*",
}));

app.use(express.json())

app.put('/update/:_id/', async(req,res)=>{
    let data = await model.updateOne(req.params,{$set:req.body})
    res.send(data)
})

app.listen(3003, ()=>{
    console.log("App is Running on 3003 Port for Update")
})
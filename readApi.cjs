const express = require('express')
const app = express()
const cors = require('cors')
const model = require('./model.cjs')
require('./config.cjs')

app.use(cors());

app.use(express.json())

app.get("/read", async(req,res)=>{

  

    let data = await model.find();
    res.send(data)
})

app.listen(3000, ()=>{
    console.log("App is Running on Port 3000")
})
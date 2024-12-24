const express = require('express')
const app = express()
const cors = require('cors')
const model = require('./model.cjs')

require('./config.cjs')

app.use(cors({
    origin: "*",
}));

app.use(express.json())

app.post('/login', async(req,res)=>{
    if(req.body.email && req.body.password)
    {
        let result = await model.find(req.body).select("-password")

        if(result.length == 0){
            res.send({result:"Not Vaild User"})
        }
        else if(result.length !=0){
            res.send(result)
        }
        else{
            res.send({result:"Not Vaild User"})
        }
    }
    else{
        res.send({result:"Not Vaild User"})
    }
})

app.listen(3001, ()=>{
    console.log("App is Running on Port 3001 for Login")
})
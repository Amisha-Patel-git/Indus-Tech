const express = require('express')
const app = express()
const cors = require('cors')
const model = require('./model.cjs')
require('./config.cjs')

app.use(cors({
    origin: "*",
}))

app.use(express.json())

app.post('/forgetpassword', async(req,res)=>{
    if(req.body.email)
    {
        let result = await model.find(req.body)

        if(result.length==0)
        {
            res.send({result:"Not Vaild User"})
        }
        else if(result.length!=0)
        {
            res.send(result)
        }else
        {
            res.send({result:"Not Vaild User"})
        }
    }
    else{
        res.send({result:"Not Vaild User"})
    }
})

app.listen(3002, ()=>{
    console.log("App is Running on Port 3002 for forget")
})
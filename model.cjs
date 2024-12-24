const mongoose = require('mongoose')
const schema = mongoose.Schema({
    yourname:String,
    phone:String,
    email:{ type: String, unique: true },
    password:String,
})


const model = mongoose.model('User', schema)

module.exports = model;
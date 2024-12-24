const mongoose = require('mongoose');
const url = "mongodb://127.0.0.1:27017/register";

mongoose.connect(url)
  .then(() => console.log('Connected to MongoDB successfully!'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

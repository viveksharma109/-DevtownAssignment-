const mongoose = require('mongoose');

const mobileSchema = new mongoose.Schema({
    name : { type: String, required: true },
    price: Number,
    type: String,
    processor:String,
    memory: String,
    os: String
});


module.exports = mongoose.model('Mobile', mobileSchema);;
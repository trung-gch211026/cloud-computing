const mongoose = require('mongoose')

var LaptopSchema = mongoose.Schema({
    brandName   : String,
    laptopModel  : String,
    description    : String,
    price       : Number,
    date        : String,
    image       : String,
    bestSeller  : Boolean,
    quantity : Number
})

const MobileModel = mongoose.model("laptop", LaptopSchema, "laptop")

module.exports = MobileModel
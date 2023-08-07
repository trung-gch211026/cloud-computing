const mongoose = require('mongoose')

var MobileSchema = mongoose.Schema({
    brandName   : String,
    laptopModel  : String,
    description    : String,
    price       : Number,
    date        : String,
    image       : String,
    bestSeller  : Boolean
})

const MobileModel = mongoose.model("laptop", MobileSchema, "laptop")

module.exports = MobileModel
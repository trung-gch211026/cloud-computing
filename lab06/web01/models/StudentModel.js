const mongoose = require('mongoose')

var StudentSchema = mongoose.Schema({
    title: String,
    author: String,
    date: Date,
    image: String,
    price: Number,
    quantity: Number,
    video: String
})

var StudentModel = mongoose.model("hocsinh", StudentSchema, "student")

module.exports = StudentModel
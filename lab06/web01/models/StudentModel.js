const mongoose = require('mongoose')

var StudentSchema = mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    address: String
})

var StudentModel = mongoose.model("hocsinh", StudentSchema, "student")

module.exports = StudentModel
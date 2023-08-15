const express = require('express')
const StudentModel = require('../models/StudentModel')
const router = express.Router()

router.get('/', async (req, res)=>{
    //get data from collection "student"
    var students = StudentModel.find()
    //return API
    res.send(students)
})

module.exports = router
var express = require('express')
const BookModel = require('../models/BookModel')
const StudentModel = require('../models/StudentModel')
var router = express.Router()

router.get('/', (req, res)=>{
  res.render('index')
})

router.get('/book', async (req, res)=>{
  var books = await BookModel.find()
  //lay du lieu tu collection "books" va luu vao array
  //console.log(books)
  //res.send(books)
  res.render('book_list', {books : books})
})

router.get('/student', async (req, res)=>{
  var students = await StudentModel.find()
  res.render('student_list', {students : students})
})

module.exports = router
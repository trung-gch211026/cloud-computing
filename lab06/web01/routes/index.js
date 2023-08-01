var express = require('express')
const BookModel = require('../models/BookModel')
var router = express.Router()

router.get('/', async (req, res)=>{
  var books = await BookModel.find()

  //console.log(books)
  res.send(books)
  //res.render('book_list')
})

module.exports = router
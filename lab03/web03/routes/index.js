var express = require('express');
var router = express.Router();

router.get('/', (req, res)=>{
  var country = "Viet Nam"
  var year = 2023
  var grade = 7.5
  var pass = true
  var gender = 'm'
  res.render('index',
  {
    country: country,
    year:year,
    grade:grade,
    pass: pass,
    gender: gender
  })
})

module.exports = router;

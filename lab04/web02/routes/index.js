var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', (req, res)=>{
  res.render('login')
})
//post method - to receive input from form
router.post('/login', (req, res)=>{
  //lấy dữ liệu nhập vào form
  var data = req.body
  var username = data.username
  var password = data.password
  //1. tra du lieu ve console
  // console.log(username)
  // console.log(password)

  //2. tra du lieu voi format JSON
  res.send(data)
})

module.exports = router;

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
  // res.send(data)
  if(username == "trungnx" && password == "123"){
    res.send("<h1>Login passed</h1>")
  }else{
    res.send("<h1>Login failed</h1>")
  }
})

router.get('/input', (req, res)=>{
  res.render('add_student')
})

router.post('/output', (req, res)=>{
  res.render('view_student', {student : req.body})
})

module.exports = router;

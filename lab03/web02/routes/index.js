var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/hn',(req, res)=>{
  res.render('hanoi')
})

router.get('/hcm',(req, res)=>{
  res.render('hochiminh')
})

module.exports = router;

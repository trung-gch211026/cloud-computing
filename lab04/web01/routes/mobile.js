var express = require('express')
var router = express.Router()
var Mobile = require('../models/Mobile');


router.get('/', (req, res)=>{
    var text = "Mobile evolution"
    var year = 2023

    res.render('mobile/index', {text:text, nam:year})
})

router.get('/list', (req, res)=>{
    var mobile1 = new Mobile(1,"iphone 3", 'https://cdn.thegioididong.com/Products/Images/42/22230/iPhone-3GS-8GB-1.jpg')
    var mobile2 = new Mobile(2,"iphone 6", 'https://static.chotot.com/storage/chotot-kinhnghiem/c2c/2020/07/iphone-6s-plus-ra-mat-nam-nao-1.jpg')
    var mobile3 = new Mobile(3,"iphone 14 promax", 'https://cdn.viettelstore.vn/Images/Product/ProductImage/1896224739.jpeg')
    var mobileList = [mobile1, mobile2, mobile3]

    res.render('mobile/list', {product:mobileList})
})

module.exports = router; 
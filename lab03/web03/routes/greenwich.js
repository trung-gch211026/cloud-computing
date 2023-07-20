var express = require('express')
var router = express.Router()

router.get('/hn', (req, res)=>{
    var hanoi = "Ha Noi"
    var address = "So 2 Pham Van Bach - Cau Giay - Ha Noi"
    res.render('hanoi', {hn : hanoi, address : address})
})

router.get('/hcm', (req, res)=>{
    res.render('hcm')
})

module.exports = router;
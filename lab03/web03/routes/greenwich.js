var express = require('express')
var router = express.Router()

router.get('/hn', (req, res)=>{
    var hanoi = "Ha Noi"
    var address = "So 2 Pham Van Bach - Cau Giay - Ha Noi"
    var image = "https://vcdn-vnexpress.vnecdn.net/2022/06/03/Image-249300564-ExtractWord-0-8746-7982-1654231437.png"
    res.render('hanoi', {hn : hanoi, address : address, img:image})
})

router.get('/hcm', (req, res)=>{
    var hcm = "Ho Chi Minh"
    var address = "Ho Chi Minh city"
    var image = "https://greenwich.edu.vn/wp-content/uploads/2022/06/Sanh-chinh_HCM_2-scaled.jpg"
    res.render('hcm', {hcm:hcm, diachi:address, img:image})
})

module.exports = router;
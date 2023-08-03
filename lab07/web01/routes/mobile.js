var express = require('express')
const MobileModel = require('../models/MobileModel')
var router = express.Router()

router.get('/', async (req, res)=>{
    var mobiles = await MobileModel.find();
    res.render('mobile/index', {mobiles:mobiles})
})

module.exports = router
var express = require('express')
var router = express.Router()

router.get("/", async (req, res) => {
    var mobiles = await MobileModel.find();
    res.render("mobile/index", { mobiles: mobiles });
  });

module.exports = router
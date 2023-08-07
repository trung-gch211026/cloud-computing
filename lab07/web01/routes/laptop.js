var express = require('express')
const LaptopModel = require("../models/LaptopModel");
var router = express.Router()


router.get("/", async (req, res) => {
    var laptop = await LaptopModel.find();
    res.render("laptop/index", { laptop: laptop });
  });

module.exports = router 
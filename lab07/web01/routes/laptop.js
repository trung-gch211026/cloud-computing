var express = require("express");
const LaptopModel = require("../models/LaptopModel");
var router = express.Router();

router.get("/", async (req, res) => {
  var laptop = await LaptopModel.find();
  res.render("laptop/index", { laptop: laptop });
});

router.get("/detail/:id", async (req, res) => {
  var id = req.params.id;
  var laptop = await LaptopModel.findById(id);
  res.render("laptop/detail", { laptop: laptop });
});

module.exports = router;

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

router.get("/delete/:id", async (req, res) => {
    var id = req.params.id;
    await LaptopModel.findByIdAndDelete(id)
      .then(() => console.log("Delete success"))
      .catch((error) => console.log("Delete failed"));
    res.redirect("/laptop");
});

router.get('/deleteall', async (req, res)=>{
    await LaptopModel.deleteMany()
    .then(() => console.log("Delete success"))
    .catch((error) => console.log("Delete failed"));
    res.redirect("/laptop");
})

router.post('/order', async (req,res)=>{
    var data = req.body
    var id = data.id
    var laptop = await LaptopModel.findById(id)
    var price = data.price
    var quantity = data.quantity
    var total = price * quantity
    res.render('laptop/order', {laptop:laptop, price:price, total:total})
})

module.exports = router;

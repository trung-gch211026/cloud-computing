var express = require("express");
const MobileModel = require("../models/MobileModel");
var router = express.Router();

router.get("/", async (req, res) => {
  var mobiles = await MobileModel.find();
  res.render("mobile/index", { mobiles: mobiles });
});

router.get("/delete/:id", async (req, res) => {
  var id = req.params.id;

  //cach 1
  await MobileModel.findByIdAndDelete(id)
    .then(() => console.log("Delete success"))
    .catch((error) => console.log("Delete failed"));

  //cach 2
  // var mobile = await MobileModel.findById(id)
  // await MobileModel.remove(mobile)
  // .then(()=>console.log('Delete success'))
  // .catch((error)=>console.log('Delete failed'))

  //redirect ve mobile sau khi xoa
  res.redirect("/mobile");
});

router.get('/deleteall', async (req, res)=>{
    await MobileModel.deleteMany()
    .then(() => console.log("Delete success"))
    .catch((error) => console.log("Delete failed"));
    res.redirect("/mobile");
})

router.get('/detail/:id', async (req,res)=>{
    var id = req.params.id
    var mobile = await MobileModel.findById(id)
    res.render('mobile/detail', {mobile:mobile})
})

router.post('/order', async (req,res)=>{
    var data = req.body
    var id = data.id
    var mobile = await MobileModel.findById(id)
    var quantity = data.quantity
    var text = "You have ordered a product with id "+id+" and quantity is "+quantity
    console.log(text)
    // res.render('mobile/order', {mobile:mobile, quantity:quantity})
})

module.exports = router;

let global = require('../global/global')
var billController = {};
let billItems=[]

billController.addItem = function(req, res) {
    let searchCode = req.query.searchCode
    console.log(searchCode)
    // res.send(searchCode)
    billItems.push({
      searchCode:req.query.searchCode,
      name:req.query.name,
      price:req.query.price
    })
    console.log(billItems)
    res.render("../views/garments", {title:'List of Garments',garments:[], billItems: billItems});
    // Garment.find({searchCode: userRegex }).exec(function (err, garments) {
    //   if (err) {
    //     console.log("Error:", err);
    //   }
    //   else {
    //     //console.log(garments)
    //     res.render("../views/garments", {title:'List of Garments',garments: garments});
    //   }
    // });

  };

module.exports = billController;
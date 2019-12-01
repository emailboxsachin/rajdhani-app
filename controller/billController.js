let global
var billController = {};

billController.addItem = function(req, res) {
    let searchCode = req.query.id
    console.log(searchCode)
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
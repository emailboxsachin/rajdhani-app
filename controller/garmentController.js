var Garment = require('../models/garment')
var garmentController = {};

garmentController.list = function(req, res) {
  Garment.find({}).sort({updated_at: 'desc'}).exec(function (err, docs) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      let latest = []
        latest.push(docs[0])
      //console.log(latest)
      res.render("../views/garments", {title:'List of Garments',garments: latest});
    }
  });
};

garmentController.find = function(req, res) {
  let searchWord = req.body.search
  const userRegex = new RegExp(searchWord, 'i')
  
  //console.log(searchWord)
  Garment.find({searchCode: userRegex }).exec(function (err, garments) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      //console.log(garments)
      res.render("../views/garments", {title:'List of Garments',garments: garments});
    }
  });
};

garmentController.find2 = function(req, res) {
    Garment.find({}).sort({purchasePrice: 'desc'}).exec(function(err, docs) { 
        console.log(docs[0].purchasePrice)
        res.send('hi')    
    });
};

garmentController.create = function(req, res) {
  res.render("../views/create-garment");
};

garmentController.save = function(req, res) {
  var garment = new Garment(req.body);
  
  Garment
  .find({garmentType:garment.garmentType})
  .sort({code: 'desc'})
  .exec(function(err, docs) {
    if(!docs[0].code){
        garment.code = 1
    }else{
        garment.code = docs[0].code + 1
    }
    console.log('new code '+ garment.code ) 
    garment.searchCode = garment.garmentType.toString() + garment.code.toString()
      garment.save(function(err) {
        if(err) {
          console.log(err);
          //res.render("../views/create-garment");
        } else {
          console.log(garment)
          console.log("Successfully created garment.");
          res.redirect("/");
        }
      });    
  });
  /*
  garment.save(function(err) {
    if(err) {
      console.log(err);
      res.render("../views/create-garment");
    } else {
      console.log("Successfully created garment.");
      res.redirect("/");
    }
  });
  */
};

/*
employeeController.show = function(req, res) {
  Employee.findOne({_id: req.params.id}).exec(function (err, employee) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/employees/show", {employee: employee});
    }
  });
};





employeeController.edit = function(req, res) {
  Employee.findOne({_id: req.params.id}).exec(function (err, employee) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/employees/edit", {employee: employee});
    }
  });
};

employeeController.update = function(req, res) {
  Employee.findByIdAndUpdate(req.params.id, { $set: { name: req.body.name, address: req.body.address, position: req.body.position, salary: req.body.salary }}, { new: true }, function (err, employee) {
    if (err) {
      console.log(err);
      res.render("../views/employees/edit", {employee: req.body});
    }
    res.redirect("/employees/show/"+employee._id);
  });
};

employeeController.delete = function(req, res) {
  Employee.remove({_id: req.params.id}, function(err) {
    if(err) {
      console.log(err);
    }
    else {
      console.log("Employee deleted!");
      res.redirect("/employees");
    }
  });
};
*/

module.exports = garmentController;

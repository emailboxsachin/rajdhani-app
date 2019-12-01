const express = require('express');
const app = express();
const bodyParser= require('body-parser')
const path = require('path')
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/rajdhani');
var garment = require("./controller/garmentController.js");
var bill = require("./controller/billController.js");

//middleware
app.use(bodyParser.urlencoded({extended: true}))
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));



// Get all garments
app.get('/', garment.list);

// Create garment
app.get('/create', garment.create);

// Save garment
app.post('/garmentSave', garment.save);

// Find garment
app.post('/garmentFind', garment.find);

//add garment to bill
app.get('/addToBill', bill.addItem)

// Get single garment by id
//router.get('/show/:id', employee.show);

// Edit employee
//router.get('/edit/:id', employee.edit);

// Edit update
//router.post('/update/:id', employee.update);

// Edit update
//router.post('/delete/:id', employee.delete);


app.listen(3000, function() {
  console.log('listening on 3000')
})

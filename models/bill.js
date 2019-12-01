var mongoose = require('mongoose');

var BillSchema = new mongoose.Schema({
  name: String,
  garmentSearchCode: String,
  garmentType:Number,
  purchasePrice: Number,
  purchaseQuantity: Number,
  salePrice: Number,
  code: Number,
  searchCode: String,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Garment', GarmentSchema);

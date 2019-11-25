var mongoose = require('mongoose');

var GarmentSchema = new mongoose.Schema({
  name: String,
  supplier: Number,
  garmentType:Number,
  purchasePrice: Number,
  purchaseQuantity: Number,
  salePrice: Number,
  code: Number,
  searchCode: String,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Garment', GarmentSchema);

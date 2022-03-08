const Mongoose = require('mongoose');
const Schema = Mongoose.Schema
const uniqueValidator = require('mongoose-unique-validator');

const productSchema = new Schema({
  brand: {
    type: Schema.Types.ObjectId,
    ref: 'Brand',
    required: true,
  },
  title: {
    type: 'string',
    unique: true,
    required: true,
  },
  descriptionShort: {
    type: 'string',
    required: true,
  },
  collectionName: {
    type: Schema.Types.ObjectId,
    ref: 'Collection',
    required: true,
  },
  description: {
    type: 'string',
    required: true,
  },
  movement: {
    type: 'string',
    required: true,
  },
  price: {
    type: 'Number',
    required: true,
  },
  specification: {
    type: 'string',
    required: true,
  },
  sex: {
    type: 'string',
    required: true,
  },
  images: {
    type: [],
    required: true,
  },
}, {
  timestamps: true,
});

productSchema.plugin(uniqueValidator);

const ProductModel = Mongoose.model('Product', productSchema);

module.exports = ProductModel;
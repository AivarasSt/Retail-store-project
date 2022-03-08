const Mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const brandSchema = new Mongoose.Schema({
  title: {
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

brandSchema.plugin(uniqueValidator);

const BrandModel = Mongoose.model('Brand', brandSchema);

module.exports = BrandModel;

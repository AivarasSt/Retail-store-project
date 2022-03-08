const Mongoose = require('mongoose');

const collectionSchema = new Mongoose.Schema({
  title: {
    type: 'string',
    required: true,
  },
  description: {
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


const CollectionModel = Mongoose.model('Collection', collectionSchema);

module.exports = CollectionModel;
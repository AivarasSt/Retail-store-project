const Mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const uniqueValidator = require('mongoose-unique-validator');

const orderSchema = new Mongoose.Schema({
  name: {
    type: 'string',
    required: true,
  },
  surname: {
    type: 'string',
    required: true,
  },
  phoneNumber: {
    type: 'string',
    required: true,
  },
  city: {
    type: 'string',
    required: true,
  },
  country: {
    type: 'string',
    required: true,
  },
}, {
  timestamps: true,
});

orderSchema.plugin(mongoosePaginate);
orderSchema.plugin(uniqueValidator);

const OrderModel = Mongoose.model('Order', orderSchema);

module.exports = OrderModel;

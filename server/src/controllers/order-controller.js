const OrderModel = require('../models/order-model');
const OrderViewModel = require('../view-models/order-view-model');

const getOrders = async (req, res) => {
  const order = await OrderModel.paginate({}, {
    page: req.query.page, limit: req.query.limit, sort: { createdAt: req.query.order }
  });
  const fetchedOrders = order.docs.map(order => new OrderViewModel(order))
  const fetchedOrderCount = order.total
  res.status(200).json({ fetchedOrders, fetchedOrderCount })
};

const createOrder = async (req, res) => {
  try {
    const { name, surname, phoneNumber, city, country } = req.body;
    const orderDoc = await OrderModel.create({
      name, surname, phoneNumber, city, country
    });
    const order = await new OrderViewModel(orderDoc);
    res.status(200).json(order);
  } catch ({ message }) {
    res.status(400).json({ message });
  }
};

const getOrder = async (req, res) => {
  const { id } = req.params;
  try {
    const orderDocs = await OrderModel.findById(id)
    const order = new OrderViewModel(orderDocs);
    res.status(200).json(order);
  } catch (error) {
    res.status(404).json({
      message: `Element with id: '${id}' was not found`
    })
  }
};

const deleteOrder = async (req, res) => {
  const { id } = req.params;
  try {
    const orderDocs = await OrderModel.findByIdAndDelete(id)
    const order = new OrderViewModel(orderDocs);
    res.status(200).json(order);
  } catch (error) {
    res.status(404).json({
      message: `Element with id: '${id}' was not found`
    })
  }
}

module.exports = {
  createOrder,
  getOrders,
  getOrder,
  deleteOrder,
};

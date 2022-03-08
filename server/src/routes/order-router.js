const express = require('express');
const {
  getOrders,
  createOrder,
  getOrder,
  deleteOrder,
} = require('../controllers/order-controller');
const authMiddleware = require('../middlewares/auth-middleware');

const router = express.Router();

router.get('/', getOrders);

router.post('/', createOrder);

router.get('/:id', authMiddleware, getOrder);

router.delete('/:id', authMiddleware, deleteOrder);

module.exports = router;
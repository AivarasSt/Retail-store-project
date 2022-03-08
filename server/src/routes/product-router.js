const express = require('express');
const {
  getProducts,
  getMenProducts,
  getWomenProducts,
  createProduct,
  getProduct,
  deleteProduct,
  updateProduct
} = require('../controllers/product-controller');
const authMiddleware = require('../middlewares/auth-middleware');
const { uploadManyMiddleware } = require('../middlewares/upload-middleware');


const router = express.Router();

router.get('/', getProducts);

router.get('/mens', getMenProducts);

router.get('/womens', getWomenProducts);

router.post('/', authMiddleware, uploadManyMiddleware('images'), createProduct);

router.get('/:id', getProduct);

router.delete('/:id', authMiddleware, deleteProduct);

router.patch('/:id', authMiddleware, updateProduct);

module.exports = router;
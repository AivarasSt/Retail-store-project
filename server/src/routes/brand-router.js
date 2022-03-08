const express = require('express');
const {
  getBrands,
  createBrand,
  getBrand,
  deleteBrand,
} = require('../controllers/brand-controller');
const authMiddleware = require('../middlewares/auth-middleware');
const { uploadManyMiddleware } = require('../middlewares/upload-middleware');

const router = express.Router();

router.get('/', getBrands);

router.post('/', authMiddleware, uploadManyMiddleware('images'), createBrand);

router.get('/:id', getBrand);

router.delete('/:id', authMiddleware, deleteBrand);

module.exports = router;
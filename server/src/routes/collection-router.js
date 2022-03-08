const express = require('express');
const {
  getCollections,
  createCollection,
  getCollection,
  deleteCollection,
} = require('../controllers/collection-controller');
const authMiddleware = require('../middlewares/auth-middleware');
const { uploadManyMiddleware } = require('../middlewares/upload-middleware');

const router = express.Router();

router.get('/', getCollections);

router.post('/', authMiddleware, uploadManyMiddleware('images'), createCollection);

router.get('/:id', getCollection);

router.delete('/:id', authMiddleware, deleteCollection);

module.exports = router;
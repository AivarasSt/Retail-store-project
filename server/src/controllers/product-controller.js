const ProductModel = require('../models/product-model');
const ProductViewModel = require('../view-models/product-view-model');

const getProducts = async (_, res) => {
  const productDocs = await ProductModel.find()
    .populate('brand')
    .populate('collectionName');
  const product = productDocs.map(product => new ProductViewModel(product))
  res.status(200).json(product)
};

const createProduct = async (req, res) => {
  try {
    const { brand, title, descriptionShort, collectionName, description, specification, movement,   price, sex} = req.body;
    console.log("body:", req.body);
    const images = req.files.map(({ filename }) => ({
      src: filename
    }));
    console.log(images);
    const productDoc = await ProductModel.create({
      brand, title, descriptionShort, collectionName, description, specification, movement, price,  sex, images
    });
    const product = await new ProductViewModel(productDoc);
    console.log("produktas:", product);

    res.status(200).json(product);
  } catch ({ message }) {
    console.log(message)
    res.status(400).json({ message });
  }
};

const getProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const productDocs = await ProductModel.findById(id)
    .populate('brand')
    .populate('collectionName');
    console.log(productDocs)
    const product = new ProductViewModel(productDocs);
    res.status(200).json(product);
  } catch (error) {
    res.status(404).json({
      message: `Element with id: '${id}' was not found`
    })
  }
};

const getMenProducts = async (_, res) => {
  const productDocs = await ProductModel.find({ sex: "Male" || "Unisex" })
    .populate('brand')
    .populate('collectionName');
  const product = productDocs.map(product => new ProductViewModel(product))
  res.status(200).json(product)
};

const getWomenProducts = async (_, res) => {
  const productDocs = await ProductModel.find({ sex: "Female" || "Unisex" })
    .populate('brand')
    .populate('collectionName');
  const product = productDocs.map(product => new ProductViewModel(product))
  res.status(200).json(product)
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const productDocs = await ProductModel.findByIdAndDelete(id)
    const product = new ProductViewModel(productDocs);
    res.status(200).json(product);
  } catch (error) {
    console.log("ID:", id)
    res.status(404).json({
      message: `Element with id: '${id}' was not found`
    })
  }
}

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const props = req.body;
  console.log(req.body);
  try {
      const productDocs = await ProductModel.findByIdAndUpdate(
        id,
        props,
        { new: true }
      );
      const product = new ProductViewModel(productDocs);
      res.status(200).json(product);
  } catch (error) {
      res.status(400).json({ message: 'Invalid parameters' });
  }
};

module.exports = {
  getProducts,
  getMenProducts,
  getWomenProducts,
  createProduct,
  getProduct,
  deleteProduct,
  updateProduct
};

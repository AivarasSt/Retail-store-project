const BrandModel = require('../models/brand-model');
const BrandViewModel = require('../view-models/brand-view-model');

const getBrands = async (req, res) => {
  const brandDocs = await BrandModel.find()
  res.status(200).json(brandDocs.map(brand => new BrandViewModel(brand)))
};

const createBrand = async (req, res) => {
  try {
  const { title } = req.body;
  const images = req.files.map(({ filename }) => ({
    src: filename
  }));
  const brandDoc = await BrandModel.create({
    title,
    images
  });
    const brand = await new BrandViewModel(brandDoc);
    res.status(200).json(brand);
  } catch ({ message }) {
    res.status(400).json(message);
  }

};

const getBrand = async (req, res) => {
  const { id } = req.params;
  try {
    const brandDoc = await BrandModel.findById(id);
    const brand = new BrandViewModel(brandDoc);
    res.status(200).json(brand);
  } catch (error) {
    res.status(404).json({
      message: `Element with id: '${id}' not found`
    })
  }

};

const deleteBrand = async (req, res) => {
  const { id } = req.params;
  try {
    const brandDoc = await BrandViewModel.findByIdAndDelete(id)
    const brand = new BrandViewModel(brandDoc);
    res.status(200).json(brand);
  } catch (error) {
    res.status(404).json({
      message: 'Brand not found'
    })
  }
};



module.exports = {
  getBrands,
  createBrand,
  getBrand,
  deleteBrand,
};

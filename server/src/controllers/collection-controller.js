const CollectionModel = require('../models/collection-model');
const CollectionViewModel = require('../view-models/collection-view-model');

const getCollections = async (req, res) => {
  const collectionDocs = await CollectionModel.find()
  const collection = collectionDocs.map(collection => new CollectionViewModel(collection))
  res.status(200).json(collection)
};

const createCollection = async (req, res) => {
  try {
  const { title, description } = req.body;
  const images = req.files.map(({ filename }) => ({
    src: filename
  }));
  const collectionDoc = await CollectionModel.create({
    title,
    description,
    images
  });
    const collection = await new CollectionViewModel(collectionDoc);
    res.status(200).json(collection);
  } catch ({ message }) {
    res.status(400).json({ message });
  }

};

const getCollection = async (req, res) => {
  const { id } = req.params;
  try {
    const collectionDoc = await CollectionModel.findById(id);
    const collection = new CollectionViewModel(collectionDoc);
    res.status(200).json(collection);
  } catch (error) {
    res.status(404).json({
      message: `Element with id: '${id}' not found`
    })
  }

};

const deleteCollection = async (req, res) => {
  const { id } = req.params;
  try {
    const collectionDoc = await CollectionViewModel.findByIdAndDelete(id)
    const collection = new CollectionViewModel(collectionDoc);
    res.status(200).json(collection);
  } catch (error) {
    res.status(404).json({
      message: 'Collection not found'
    })
  }
};



module.exports = {
  getCollections,
  createCollection,
  getCollection,
  deleteCollection,
};

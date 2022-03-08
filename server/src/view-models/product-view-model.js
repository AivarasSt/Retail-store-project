const BrandViewModel = require('./brand-view-model');
const CollectionViewModel = require('./brand-view-model');

class ProductViewModel {
    constructor({ _id, brand, title, descriptionShort, collectionName, specification, description, movement, price, images, sex }) {
    const { SERVER_PORT, SERVER_DOMAIN, IMG_FOLDER_NAME } = process.env;
    this.id = _id;
    this.brand = new BrandViewModel(brand);
    this.title = title;
    this.descriptionShort = descriptionShort;
    this.collectionName = new CollectionViewModel(collectionName);
    this.specification = specification;
    this.description = description;
    this.movement = movement;
    this.price = price;
    this.images = images.map(image => `${SERVER_DOMAIN}:${SERVER_PORT}/${IMG_FOLDER_NAME}/${image.src}`);
    this.sex = sex;
  }

}

module.exports = ProductViewModel;

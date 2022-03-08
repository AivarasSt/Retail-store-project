class BrandViewModel {
  constructor({ _id, title, images }) {
    const { SERVER_PORT, SERVER_DOMAIN, IMG_FOLDER_NAME } = process.env;
    this.id = _id;
    this.title = title;
    this.images = images.map(image => `${SERVER_DOMAIN}:${SERVER_PORT}/${IMG_FOLDER_NAME}/${image.src}`);
  }
}

module.exports = BrandViewModel;
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('./cloudinary');

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'my-recipe-list',
    allowed_formats: ['jpg', 'jpeg', 'png'],
  },
});

const parser = multer({ storage });

module.exports = parser;

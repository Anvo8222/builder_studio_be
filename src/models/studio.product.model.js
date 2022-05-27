const mongoose = require('mongoose');
// const { tokenTypes } = require('../config/tokens');

const studioProductsSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    categoryId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'studioCategories',
      required: true,
    },
    price: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    imgLogo: {
      type: String,
      require: true,
    },
    imgProduct: [{ type: String }],
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json

/**
 * @typedef StudioProducts
 */
const StudioProducts = mongoose.model('StudioProducts', studioProductsSchema);

module.exports = StudioProducts;

const mongoose = require('mongoose');
// const { tokenTypes } = require('../config/tokens');

const studioCategoriesSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json

/**
 * @typedef StudioCategories
 */
const StudioCategories = mongoose.model('StudioCategories', studioCategoriesSchema);

module.exports = StudioCategories;

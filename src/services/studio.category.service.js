/* eslint-disable no-unused-vars */
const httpStatus = require('http-status');
const { Console } = require('winston/lib/winston/transports');
const StuidoCategories = require('../models/studio.category.model');
const ApiError = require('../utils/ApiError');

const getCountCategory = async (query) => {
  return StuidoCategories.countDocuments(query);
};

const getAllStudioCategories = async (perPage, page, query) => {
  const count = await getCountCategory(query);
  const studioCategories = await StuidoCategories.find({})
    .sort({ createdAt: -1 })
    .skip(perPage * page - perPage)
    .limit(perPage);
  return { total: Math.ceil(count), data: studioCategories };
};

/**
 * Create a category
 * @param {Object} categoryBody
 * @returns {Promise<Category>}/
 */

const createStudioCategory = async (categoryBody) => {
  const stuidoCategory = new StuidoCategories(categoryBody);
  await stuidoCategory.save();
  return stuidoCategory;
};

/**
 *
 * @param {*} id
 * @returns
 */

/**
 * Get category by id
 * @param {ObjectId} id
 * @returns {Promise<Category>}
 */
const getCategoryStudioById = async (id, category) => {
  return StuidoCategories.findById({ _id: id, category });
};

/**
 * Update category by id
 * @param {ObjectId} id
 * @param {Object} updateCategory
 * @returns {Promise<Category>}
 */
const updateCategoryStudioById = async (id, updateBody) => {
  const category = await getCategoryStudioById(id);
  if (!category) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Category not found');
  }
  Object.assign(category, updateBody);
  await category.save();
  return category;
};

/**
 * Delete category by id
 * @param {ObjectId} categoryId
 * @returns {Promise<Category>}
 */
const deleteCategoryStudioById = async (id) => {
  const category = await getCategoryStudioById(id);
  if (!category) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Category not found');
  }
  await category.remove();
  return category;
};

module.exports = {
  getAllStudioCategories,
  createStudioCategory,
  getCategoryStudioById,
  updateCategoryStudioById,
  deleteCategoryStudioById,
};

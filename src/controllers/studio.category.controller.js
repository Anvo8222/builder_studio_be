/* eslint-disable no-unused-vars */
const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { stuidoCategoriesService } = require('../services');
const StudioCategories = require('../models/studio.category.model');

const getAllCategories = catchAsync(async (req, res) => {
  const count = StudioCategories.countDocuments;
  const perPage = req.query.limit || count;
  const page = req.query.page || 1;
  const allStudioCategories = await stuidoCategoriesService.getAllStudioCategories(perPage, page);
  res.send(allStudioCategories);
});

const createCategory = catchAsync(async (req, res) => {
  const studioCategory = await stuidoCategoriesService.createStudioCategory(req.body);
  res.send(studioCategory);
});

const getCategoryId = catchAsync(async (req, res) => {
  const category = await stuidoCategoriesService.getCategoryStudioById(req.params.id);
  if (!category) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Category not found');
  }
  res.send(category);
});

const updateCategory = catchAsync(async (req, res) => {
  const category = await stuidoCategoriesService.updateCategoryStudioById(req.params.id, req.body);
  res.send(category);
});

const deleteCategory = catchAsync(async (req, res) => {
  await stuidoCategoriesService.deleteCategoryStudioById(req.params.id);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  getAllCategories,
  createCategory,
  getCategoryId,
  updateCategory,
  deleteCategory,
};

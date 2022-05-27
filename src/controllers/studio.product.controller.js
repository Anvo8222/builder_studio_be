/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-destructuring */
/* eslint-disable prefer-const */
/* eslint-disable prefer-template */
/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { stuidoProductService } = require('../services');
const pick = require('../utils/pick');

const getAllStudioProduct = catchAsync(async (req, res) => {
  let perPage = req.query.limit || 6;
  let page = req.query.page || 1;
  let filter = pick(req.query, ['categoryStudioProductId', 'name']);
  let query = {};

  if (filter.categoryStudioProductId) {
    query.categoryStudioProductId = filter.categoryStudioProductId || {};
  }
  if (filter.name) {
    query.name = { $regex: filter.name, $options: 'i' };
  }

  const allProduct = await stuidoProductService.getAllStudioProduct(perPage, page, query);
  res.send(allProduct);
});

const createStudioProduct = catchAsync(async (req, res) => {
  const result = { ...req.body };
  const product = await stuidoProductService.createStudioProduct(result);
  res.send(product);
});

const getStudioProductById = catchAsync(async (req, res) => {
  const product = await stuidoProductService.getStudioProductById(req.params.id);
  if (!product) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Product not found');
  }
  res.send(product);
});

const updateStudioProduct = catchAsync(async (req, res) => {
  const product = await stuidoProductService.updateProductById(req.params.id, req.body);
  res.send(product);
});

const deleteStudioProduct = catchAsync(async (req, res) => {
  await stuidoProductService.deleteStudioProductById(req.params.id);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createStudioProduct,
  getAllStudioProduct,
  getStudioProductById,
  updateStudioProduct,
  deleteStudioProduct,
};

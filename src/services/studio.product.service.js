/* eslint-disable no-shadow */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable no-console */
/* eslint-disable array-callback-return */
/* eslint-disable no-plusplus */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable no-redeclare */
/* eslint-disable block-scoped-var */
/* eslint-disable vars-on-top */
/* eslint-disable no-var */
const httpStatus = require('http-status');
const { number } = require('joi');
const { restart } = require('pm2');
// eslint-disable-next-line no-unused-vars
const { Console } = require('winston/lib/winston/transports');
const { query } = require('../config/logger');
const Products = require('../models/studio.product.model');
const ApiError = require('../utils/ApiError');

const getCountProduct = async (query) => {
  return Products.countDocuments(query);
};

const getAllStudioProduct = async (perPage, page, query) => {
  const count = await getCountProduct(query);
  const products = await Products.find(query)
    .sort({ createdAt: -1 })
    .skip(perPage * page - perPage)
    .limit(perPage);
  return { total: Math.ceil(count), data: products };
};

/**
 * Create a product
 * @param {Object} productBody
 * @returns {Promisze<Product>}/
 */

const createStudioProduct = async (productBody) => {
  const productStudio = new Products(productBody);
  await productStudio.save();
  return productStudio;
};

/**
 *
 * @param {*} id
 * @returns
 */

/**
 * Get product by id
 * @param {ObjectId} id
 * @returns {Promise<Product>}
 */
const getStudioProductById = async (id, product) => {
  return Products.findById({ _id: id, product });
};

/**
 * Update product by id
 * @param {ObjectId} id
 * @param {Object} updateProduct
 * @returns {Promise<Product>}
 */
const updateProductById = async (id, updateBody) => {
  const product = await getStudioProductById(id);
  if (!product) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Product not found');
  }
  Object.assign(product, updateBody);
  await product.save();
  return product;
};

/**
 * Delete product by id
 * @param {ObjectId} productId
 * @returns {Promise<Product>}
 */
 const deleteStudioProductById = async (id) => {
  const product = await getStudioProductById(id);
  if (!product) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Product not found');
  }
  await product.remove();
  return product;
};

module.exports = {
  createStudioProduct,
  getAllStudioProduct,
  getStudioProductById,
  updateProductById,
  deleteStudioProductById,
}

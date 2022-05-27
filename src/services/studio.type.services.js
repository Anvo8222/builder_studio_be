/* eslint-disable no-unused-vars */
const httpStatus = require('http-status');
const { Console } = require('winston/lib/winston/transports');
const StuidoTypes = require('../models/studio.type.model');
const ApiError = require('../utils/ApiError');

const getCountProduct = async (query) => {
  return StuidoTypes.countDocuments(query);
};

const getAllStudioTypes = async (perPage, page, query) => {
  const count = await getCountProduct(query);
  const studioTypes = await StuidoTypes.find({})
    .sort({ createdAt: -1 })
    .skip(perPage * page - perPage)
    .limit(perPage);
  return { total: Math.ceil(count), data: studioTypes };
};

/**
 * Create a type
 * @param {Object} typeBody
 * @returns {Promise<Type>}/
 */

const createStudioType = async (typeBody) => {
  const studioType = new StuidoTypes(typeBody);
  await studioType.save();
  return studioType;
};

/**
 *
 * @param {*} id
 * @returns
 */

/**
 * Get type by id
 * @param {ObjectId} id
 * @returns {Promise<Type>}
 */
const getTypeStudioById = async (id, type) => {
  return StuidoTypes.findById({ _id: id, type });
};

/**
 * Update type by id
 * @param {ObjectId} id
 * @param {Object} updateType
 * @returns {Promise<Type>}
 */
const updateTypeStudioById = async (id, updateBody) => {
  const type = await getTypeStudioById(id);
  if (!type) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Type not found');
  }
  Object.assign(type, updateBody);
  await type.save();
  return type;
};

/**
 * Delete type by id
 * @param {ObjectId} typeId
 * @returns {Promise<Type>}
 */
const deleteTypeStudioById = async (id) => {
  const type = await getTypeStudioById(id);
  if (!type) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Type not found');
  }
  await type.remove();
  return type;
};

module.exports = {
  getAllStudioTypes,
  createStudioType,
  getTypeStudioById,
  updateTypeStudioById,
  deleteTypeStudioById,
};

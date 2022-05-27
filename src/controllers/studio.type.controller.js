/* eslint-disable no-unused-vars */
const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { stuidoTypesService } = require('../services');

const getAllTypes = catchAsync(async (req, res) => {
  const perPage = req.query.limit || 8;
  const page = req.query.page || 1;
  const allStudioType = await stuidoTypesService.getAllStudioTypes(perPage, page);
  res.send(allStudioType);
});

const createType = catchAsync(async (req, res) => {
  const studioType = await stuidoTypesService.createStudioType(req.body);
  res.send(studioType);
});

const getTypeById = catchAsync(async (req, res) => {
  const type = await stuidoTypesService.getTypeStudioById(req.params.id);
  if (!type) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Type not found');
  }
  res.send(type);
});

const updateTypeById = catchAsync(async (req, res) => {
  const type = await stuidoTypesService.updateTypeStudioById(req.params.id, req.body);
  res.send(type);
});

const deleteTypeById = catchAsync(async (req, res) => {
  await stuidoTypesService.deleteTypeStudioById(req.params.id);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  getAllTypes,
  createType,
  getTypeById,
  updateTypeById,
  deleteTypeById,
};

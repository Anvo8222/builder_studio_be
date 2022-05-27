const Joi = require('joi');

const createType = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    categoryId: Joi.string().required(),
  }),
};

const getAllTypes = {
  query: Joi.object().keys({
    page: Joi.number().integer(),
    limit: Joi.number().integer(),
    categoryId: Joi.string(),
  }),
};

const getTypeId = {
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),
};

const deleteTypeId = {
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),
};

const updateTypeId = {
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),
  body: Joi.object().keys({
    _id: Joi.string().required(),
    name: Joi.string().required(),
    categoryId: Joi.string().required(),
  }),
};

module.exports = {
  createType,
  getAllTypes,
  getTypeId,
  deleteTypeId,
  updateTypeId,
};

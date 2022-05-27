const Joi = require('joi');

const createCategory = {
  body: Joi.object().keys({
    name: Joi.string().required(),
  }),
};

const getAllCategories = {
  query: Joi.object().keys({
    page: Joi.number().integer(),
    limit: Joi.number().integer(),
  }),
};

const getCategoryId = {
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),
};

const deleteCategoryId = {
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),
};

const updateCategoryId = {
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),
  body: Joi.object().keys({
    _id: Joi.string().required(),
    name: Joi.string().required(),
  }),
};

module.exports = {
  createCategory,
  getAllCategories,
  getCategoryId,
  deleteCategoryId,
  updateCategoryId,
};

const express = require('express');
const studioCategoryController = require('../../controllers/studio.category.controller');
const validate = require('../../middlewares/validate');
const categoryValidation = require('../../validations/category.studio.validation');

const router = express.Router();
router.post('/', validate(categoryValidation.createCategory), studioCategoryController.createCategory);

router.get('/:id', validate(categoryValidation.getCategoryId), studioCategoryController.getCategoryId);
router.patch('/:id', validate(categoryValidation.updateCategoryId), studioCategoryController.updateCategory);
router.delete('/:id', validate(categoryValidation.deleteCategoryId), studioCategoryController.deleteCategory);
router.get('/', validate(categoryValidation.getAllCategories), studioCategoryController.getAllCategories);

module.exports = router;

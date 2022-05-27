const express = require('express');
const validate = require('../../middlewares/validate');
const studioProductController = require('../../controllers/studio.product.controller');
const productValidation = require('../../validations/product.studio.validation');

const router = express.Router();
router.post('/', validate(productValidation.createProduct), studioProductController.createStudioProduct);

router.get('/:id', validate(productValidation.getProductId), studioProductController.getStudioProductById);
router.delete('/:id', validate(productValidation.deleteProduct), studioProductController.deleteStudioProduct);
router.patch('/:id', validate(productValidation.updateProduct), studioProductController.updateStudioProduct);
router.get('/', validate(productValidation.getAllProduct), studioProductController.getAllStudioProduct);

module.exports = router;

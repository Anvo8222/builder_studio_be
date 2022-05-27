const express = require('express');
const studioTypeController = require('../../controllers/studio.type.controller');
const validate = require('../../middlewares/validate');
const typeValidation = require('../../validations/type.studio.validation');

const router = express.Router();
router.post('/', validate(typeValidation.createType), studioTypeController.createType);

router.get('/:id', validate(typeValidation.getTypeId), studioTypeController.getTypeById);
router.patch('/:id', validate(typeValidation.updateTypeId), studioTypeController.updateTypeById);
router.delete('/:id', validate(typeValidation.deleteTypeId), studioTypeController.deleteTypeById);
router.get('/', validate(typeValidation.getAllTypes), studioTypeController.getAllTypes);

module.exports = router;

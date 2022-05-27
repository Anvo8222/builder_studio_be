const express = require('express');
const { createFileSingle, createFileMulti } = require('../../controllers/uploadFile.controller');
const { uploadFileSingle, uploadFileMulti } = require('../../middlewares/uploadfile');

const router = express.Router();

router.post('/single', uploadFileSingle, createFileSingle);
router.post('/multi', uploadFileMulti, createFileMulti);

module.exports = router;

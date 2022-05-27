const catchAsync = require('../utils/catchAsync');

const createFileSingle = catchAsync(async (req, res) => {
  const singleFile = {
    imgLogo: req.file.filename,
  };
  res.json(singleFile);
});

const createFileMulti = catchAsync(async (req, res) => {
  const productImg = [];
  req.files.forEach((item) => {
    productImg.push(item.filename);
  });
  res.json(productImg);
});

module.exports = {
  createFileMulti,
  createFileSingle,
};

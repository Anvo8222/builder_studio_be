const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const docsRoute = require('./docs.route');
const studioCategoryRoute = require('./stuido.category.route');
const studioTypeRoute = require('./studio.type.route');
const studioProductRoute = require('./studio.product.route');
const uploadFile = require('./uploadFile.route');
const config = require('../../config/config');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/studio-categories',
    route: studioCategoryRoute,
  },
  {
    path: '/studio-types',
    route: studioTypeRoute,
  },
  {
    path: '/studio-product',
    route: studioProductRoute,
  },
  {
    path: '/upload',
    route: uploadFile,
  },
];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;

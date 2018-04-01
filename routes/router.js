const homeController = require('../controllers/home');
const notFound = require('../controllers/404');

module.exports = function (app) {
  app.get('/', homeController.index);
  app.post('/', homeController.answer);
  app.get('*', notFound);
};


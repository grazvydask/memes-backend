'use strict';
module.exports = function(app) {
  const makeMemeController = require('../controllers/makeMemeController');

  app.route('/makeMeme')
    .get(makeMemeController.makeMeme);
};
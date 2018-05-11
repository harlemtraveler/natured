const categoriesDb = require('../models/categories');

function getAllCategories(req, res, next) {
  categoriesDb.getAllCategories()
  .then(data => {
    res.locals.contents = data;
    next();
  })
  .catch(err => {
    next(err);
  })
}

module.exports = {
  getAllCategories
}

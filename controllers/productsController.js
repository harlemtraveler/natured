const productsDB = require('../models/products');

function getAllProducts(req, res, next) {
  productsDB.getAllProducts()
  .then(data => {
    res.locals.products = data;
    next();
  })
  .catch(err => {
    next(err);
  })
}

function getOneProduct(req, res, next) {
  productsDB.getOneProduct(req.params.id)
  .then(data => {
    res.locals.products = data;
    next();
  })
  .catch(err => {
    next(err);
  })
}

module.exports = {
  getAllProducts,
  getOneProduct
}

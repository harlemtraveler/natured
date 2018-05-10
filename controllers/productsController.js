const productsDb = require('../models/products');

function getAllProducts(req, res, next) {
  productsDb.getAllProducts()
  .then(data => {
    res.locals.products = data;
    next();
  })
  .catch(err => {
    next(err);
  })
}

function getOneProduct(req, res, next) {
  productsDb.getOneProduct(req.params.id)
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

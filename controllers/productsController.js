const productsDb = require('../models/products');


function getAllProducts(req, res, next) {
  productsDb.getAllProducts()
  .then(data => {
    res.locals.contents = data;
    next();
  })
  .catch(err => {
    next(err);
  })
}

function getUserProducts(req, res, next) {
  productsDb.getUserProducts(req.params.id)
  .then(data => {
    res.locals.contents = data;
    next();
  })
  .catch(err => {
    next(err);
  })
}

function getRecommendedProducts(req, res, next) {
  productsDb.getRecommendedProducts()
  .then(data => {
    res.locals.contents = data;
    next();
  })
  .catch(err => {
    next(err);
  })
}

function getOneProduct(req, res, next) {
  productsDb.getOneProduct(req.params.id)
  .then(data => {
    res.locals.contents = data;
    next();
  })
  .catch(err => {
    next(err);
  })
}

function createProduct(req, res, next) {
  productsDb.createProduct(req.body)
  .then(data => {
    res.locals.contents = data;
    next();
  })
  .catch(err => {
    next(err);
  })
}

function updateProduct(req, res, next) {
  req.body.id = req.params.id;
  productsDb.updateProduct(req.body)
  .then(data => {
    res.locals.contents = data;
    next();
  })
  .catch(err => {
    next(err);
  })
}

function deleteProduct(req, res, next) {
  productsDb.deleteProduct(req.params.id)
  .then(data => {
    res.locals.contents = data;
    next();
  })
  .catch(err => {
    next(err);
  })
}

module.exports = {
  getAllProducts,
  getUserProducts,
  getRecommendedProducts,
  getOneProduct,
  createProduct,
  updateProduct,
  deleteProduct
}

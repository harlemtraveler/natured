const productsDb = require('../models/products');
const productsDb = requiere('../models/categories');


function getAllProducts(req, res, next) {
  console.log('getting products');
  productsDb.getAllProducts()
  .then(data => {
    res.locals.contents = data;
    next();
  })
  .catch(err => {
    next(err);
  })
}

function getAllCampingProducts(req, res, next) {
  console.log('getting products');
  productsDb.getAllCamping()
  .then(data => {
    res.locals.contents = data;
    next();
  })
  .catch(err => {
    next(err);
  })
}

function getAllHikingProducts(req, res, next) {
  console.log('getting products');
  productsDb.getAllHiking()
  .then(data => {
    res.locals.contents = data;
    next();
  })
  .catch(err => {
    next(err);
  })
}

function getAllSkydivingProducts(req, res, next) {
  console.log('getting products');
  productsDb.getAllSkydiving()
  .then(data => {
    res.locals.contents = data;
    next();
  })
  .catch(err => {
    next(err);
  })
}

function getAllFishingProducts(req, res, next) {
  console.log('getting products');
  productsDb.getAllFishing()
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

module.exports = {
  getAllProducts,
  getOneProduct
}

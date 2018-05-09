const productsDB = require('../models/products');

function getAllProducts(req, res, next) {
  productsDB.getAllProducts()
  .then(data => {
    console.log(data);
    res.locals.products = data;
    next();
  })
  .catch(err => {
    next(err);
  })
}

module.exports = {
  getAllProducts
}

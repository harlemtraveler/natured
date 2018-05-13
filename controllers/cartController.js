const cartDb = require('../models/cart');

function getCartItems(req, res, next) {
  cartDb.getCartItems(req.params.id)
  .then(data => {
    res.locals.contents = data;
    next();
  })
  .catch(err => {
    next(err);
  })
}

function addToCart(req, res, next) {
  req.body.user_id = req.params.id;
  cartDb.addToCart(req.body)
  .then(data => {
    res.locals.contents = data;
    next();
  })
  .catch(err => {
    next(err);
  })
}

function deleteFromCart(req, res, next) {
  cartDb.deleteFromCart(req.params.productId)
  .then(data => {
    res.locals.contents = data;
    next();
  })
  .catch(err => {
    next(err);
  })
}

function editCart(req, res, next) {
  req.body.user_id = req.params.id;
  cartDb.editCart(req.body)
  .then(data => {
    res.locals.contents = data;
    next();
  })
  .catch(err => {
    next(err);
  })
}

function orderTotal(req, res, next) {
  console.log(req.params.id);
  cartDb.orderTotal(req.params.id)
  .then(data => {
    console.log(data);
    res.locals.contents = data;
    next();
  })
  .catch(err => {
    console.log(err);
    next(err);
  })
}

module.exports = {
  getCartItems,
  addToCart,
  deleteFromCart,
  editCart,
  orderTotal
}

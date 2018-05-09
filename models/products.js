const db = require('../config/connection');

function getAllProducts() {
  return db.any(`
    SELECT * FROM products
  `);
}

function getOneProduct(id) {
  return db.one(`
    SELECT * FROM products
    WHERE id = $1
  `, id)
}

module.exports = {
  getAllProducts,
  getOneProduct
}

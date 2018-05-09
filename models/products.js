const db = require('../config/connection');

function getAllProducts() {
  console.log('getting all products');
  return db.any(
    `SELECT * FROM products`
  );
}

module.exports = {
  getAllProducts
}

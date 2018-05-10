const db = require('../config/connection');

function getCategories() {
  return db.any(`
    SELECT * FROM categories;
  `);
}

module.exports = {
  getCategories
}

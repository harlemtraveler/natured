const db = require('../config/connection');

function getAllCategories() {
  return db.any(`
    SELECT * FROM categories;
  `);
}

function getAllCamping(){
  return db.any(`
    SELECT * FROM products WHERE category_id = '1'`);
}

function getAllHiking(){
  return db.any(`
    SELECT * FROM products WHERE category_id = '2'`);
}

function getAllSkydiving(){
  return db.any(`
    SELECT * FROM products WHERE category_id = '3'`);
}

function getAllFishing(){
  return db.any(`
    SELECT * FROM products WHERE category_id = '4'`);
}

function getAllRunningg(){
  return db.any(`
    SELECT * FROM products WHERE category_id = '5'`);
}


module.exports = {
  getAllCategories
}

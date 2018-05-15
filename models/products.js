const db = require('../config/connection');

function getAllProducts(){
  const queryPromise = db.any(`
    SELECT products.id, user_id, name, description, price, category_id, categories.category, stock, products.img_url
    FROM products
    JOIN categories
    ON products.category_id = categories.id
    WHERE stock > 0
    `);
  return queryPromise;
}

function getRecommendedProducts(){
  const queryPromise = db.any(`
    SELECT products.id, user_id, name, description, price, categories.category, stock, products.img_url
    FROM products
    JOIN categories
    ON products.category_id = categories.id
    WHERE stock > 0
    ORDER BY RANDOM()
    LIMIT 4
    `);
  return queryPromise;
}

function getUserProducts(){
  const queryPromise = db.any(`
    SELECT user_id, name, description, price, category_id, stock
    FROM products
    JOIN users
    ON products.user_id = users.id
    JOIN categories
    ON products.category_id = categories.id
    `);
  return queryPromise;
}

function getOneProduct(id) {
  const queryPromise = db.one(`
    SELECT products.id, user_id, name, description, price, stock, products.img_url, states.state
    FROM products
    JOIN states
    ON states.id = products.state_id
    WHERE products.id = $1`, id);
  return queryPromise;
}

function createProduct(products) {
  const query = db.one(`
    INSERT INTO products
    (user_id,name,description,price,category_id,stock)
    VALUES ($/user_id/, $/name/, $/description/, $/price/,$/category_id/,$/stock/)
    RETURNING *`,
    products);
  return query;
}

function deleteProduct(id) {
  const query = db.none(`
    DELETE FROM products
    WHERE id = $1`, id);
  return query;
}

function updateProduct(product) {
  const query = db.one(`
    UPDATE products
    SET user_id = $/user_id/, name = $/name/, description = $/description/, price = $/price/, category_id = $/category_id/, stock = $/stock/
    WHERE id = $/id/
    RETURNING *`,
    product);
  return query;
}

module.exports = {
  getAllProducts,
  getRecommendedProducts,
  getOneProduct,
  updateProduct
}

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

function getUserProducts(id){
  const queryPromise = db.any(`
    SELECT user_id, products.id, name, description, price, category_id, categories.category, stock, products.img_url, state_id, states.state
    FROM products
    JOIN users
    ON products.user_id = users.id
    JOIN categories
    ON products.category_id = categories.id
    JOIN states
    ON states.id = products.state_id
    WHERE user_id = $1
    `, id);
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

function createProduct(product) {
  if(product.img_url === '') {
    product.img_url = 'https://upload.wikimedia.org/wikipedia/commons/3/36/Hopetoun_falls.jpg';
  }
  const query = db.one(`
    INSERT INTO products
    (user_id, name, description, price, category_id, stock, img_url, state_id)
    VALUES ($/user_id/, $/name/, $/description/, $/price/,$/category_id/,$/stock/, $/img_url/, $/state_id/)
    RETURNING *`,
    product);
  return query;
}

function deleteProduct(id) {
  const query = db.none(`
    DELETE FROM products
    WHERE id = $1
  `, id);
  return query;
}

function updateProduct(product) {
  if(product.img_url === '') {
    product.img_url = 'https://upload.wikimedia.org/wikipedia/commons/3/36/Hopetoun_falls.jpg';
  }
  const query = db.one(`
    UPDATE products
    SET name = $/name/, description = $/description/, price = $/price/, category_id = $/category_id/, stock = $/stock/,
      img_url = $/img_url/, state_id = $/state_id/
    WHERE id = $/id/
    RETURNING *`,
    product);
  return query;
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

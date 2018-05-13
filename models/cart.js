const db = require('../config/connection');

function getCartItems(user_id) {
  return db.any(`
    SELECT c.id, p.name, p.description, p.price, p.stock, p.img_url, c.quantity
    FROM products p
    JOIN cart c
    ON p.id = c.product_id
    WHERE c.user_id = $1
  `, user_id);
}

function addToCart(product) {
  return db.one(`
    INSERT INTO cart
    (user_id, product_id, quantity)
    VALUES ($/user_id/, $/product_id/, $/quantity/)
    RETURNING *
  `, product);
}

function deleteFromCart(id) {
  return db.one(`
    DELETE FROM cart
    WHERE id = $1
    RETURNING *
  `, id)
}

function editCart(product) {
  return db.one(`
    UPDATE cart
    SET quantity = $/quantity/
    WHERE id = $/id/
    AND user_id = $/user_id/
    RETURNING *
  `, product);
}

function orderTotal(id) {
  console.log('order total');
  return db.any(`
    SELECT SUM(products.price * cart.quantity)
    FROM products
    JOIN cart
    ON products.id = cart.product_id
    WHERE cart.user_id = $1
  `, id);
}

module.exports = {
  getCartItems,
  addToCart,
  deleteFromCart,
  editCart,
  orderTotal
}

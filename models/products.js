function getAllProducts(){
  const queryPromise = db.manyOrNone(`
    SELECT user_id,name,description,price,category_id,stock FROM products
    JOIN users ON products.users_id = users.id JOIN categories ON products.category_id = categories.id
    `);
  return queryPromise;
}

function getOneProduct(id) {
  const queryPromise = db.one(`
    SELECT * FROM products
    WHERE id = $1`, id);
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

function updateProducts(products) {
  const query = db.one(`
    UPDATE products
    SET user_id = $/user_id/, name = $/name/, description = $/description/, price = $/price/,
    category_id = $/category_id/, stock = $/stock/
    WHERE id = $/id/
    RETURNING *`,
    products );
  return query;
}



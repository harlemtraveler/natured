\c natureDB

DROP TABLE IF EXISTS products CASCADE;
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS categories CASCADE;
DROP TABLE IF EXISTS cart CASCADE;




CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES user(id)
  name VARCHAR (256),
  description VARCHAR (256),
  price INTEGER,
  category_id INTEGER REFERENCES categories(id),
  stock INTEGER,
  img_url VARCHAR (256),
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255),
  password_digest VARCHAR(255),
  birthday INTEGER
);

CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  categories VARCHAR(255)

);

CREATE TABLE cart(
  user_id VARCHAR(255),
  product_id VARCHAR(255),
  shipping_address VARCHAR(255)
);

CREATE TABLE state(
  id SERIAL PRIMARY KEY,
  state VARCHAR(255)
);

CREATE TABLE shipping_address(
  id SERIAL PRIMARY KEY,
  address VARCHAR(255),
  zip_code VARCHAR(255),
  state_id REFERENCES states(id)
);

/*CREATE TABLE payment (
  id SERIAL PRIMARY KEY,
  card_no INTEGER,
  payment_type VARCHAR(255),
  card_name VARCHAR(255),
  billing_address VARCHAR(255),
  adress_id VARCHAR(255),
  user_id INTEGER REFERENCES user(id)
);*/


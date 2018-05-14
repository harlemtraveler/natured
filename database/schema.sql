\c natureDB

DROP TABLE IF EXISTS cart CASCADE;
DROP TABLE IF EXISTS products CASCADE;
DROP TABLE IF EXISTS categories CASCADE;
DROP TABLE IF EXISTS states CASCADE;
DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_digest VARCHAR(255),
  birthday VARCHAR(255)
);

CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  category VARCHAR(255),
  img_url TEXT NOT NULL
);

CREATE TABLE states (
  id SERIAL PRIMARY KEY,
  state VARCHAR(255)
);

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  name VARCHAR (255),
  description VARCHAR (255),
  price INTEGER,
  category_id INTEGER REFERENCES categories(id),
  stock INTEGER,
  img_url VARCHAR(255),
  state_id INTEGER REFERENCES states(id)
);

CREATE TABLE cart(
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  product_id INTEGER REFERENCES products(id),
  quantity INTEGER
);

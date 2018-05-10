require('dotenv').config();

const db = require('../config/connection');
const bcrypt = require('bcrypt');

function register(user) {
  return bcrypt.hash(user.password, parseInt(process.env.SALT))
  .then(hash => {
    const newUser = {
      email: user.email,
      password_digest: hash,
      birthday: user.birthday
    };
    return db.one(`
      INSERT INTO users (email, password_digest, birthday)
      VALUES ($/email/, $/password_digest/, $/birthday/)
      RETURNING id, email, birthday
    `, newUser);
  });
}

function findEmail(email) {
  return db.one(`
    SELECT * FROM users
    WHERE email = $1
  `, email);
}

function login(creds) {
  return findEmail(creds.email)
  .then(user => (
    bcrypt.compare(creds.password, user.password_digest)
    .then(match => {
      if (!match) throw new Error('Email or password is incorrect');
      delete user.password_digest;
      return user;
    })
  ));
}

module.exports = {
  register,
  login
}

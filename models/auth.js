const db = require('../config/connection');
const bcrypt = require('bcrypt');

function register(user) {
  return bcrypt.hash(user.password, parseInt(process.env.SALT))
  .then(hash => {
    const newUser = {
      username: user.username,
      email: user.email,
      password_digest: hash
    };
    return db.one(`
      INSERT INTO users (username, email, password_digest)
      VALUES ($/username/ $/email/, $/password_digest/)
      RETURNING id, username, email
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

function updateUser(creds) {
  return findEmail(creds.email)
  .then(user => (
    bcrypt.compare(creds.password, user.password_digest)
    .then(match => {
      if (!match) throw new Error('Email or password is incorrect');
      return db.one(`
        UPDATE users
        SET username = $/name/, email = $/email/
        WHERE id = $/id/
        RETURNING id, username, email
      `);
    })
  ));
}

module.exports = {
  register,
  login,
  updateUser
}

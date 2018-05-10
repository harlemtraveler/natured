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

module.exports = {
  register
}

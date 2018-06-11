const db = require('../config/connection');

function getStates() {
  return db.any(`
    SELECT * FROM states;
  `)
}

module.exports = {
  getStates
}

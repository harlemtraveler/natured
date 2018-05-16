const statesDb = require('../models/states');

function getStates(req, res, next) {
  statesDb.getStates()
  .then(data => {
    res.locals.contents = data;
    next();
  })
  .catch(err => {
    next(err);
  })
}

module.exports = {
  getStates
}

const tokenService = require('../services/token');
const authDb = require('../models/auth');

function register(req, res) {
  authDb.register(req.body)
  .catch(err => res.status(401).json({
    message: "Email is already registered"
  }))
  .then(data => tokenService.makeToken({
    id: data.id,
    email: data.email,
    birthday: data.birthday
  }))
  .then(token => {
    res.json({
      token
    })
  });
}

function login(req, res, next) {
  authDb.login(req.body)
  .catch(err => res.status(401).json({
    status: 'Error',
    message: 'Email or password is incorrect'
  }))
  .then(data => tokenService.makeToken({
    id: data.id,
    email: data.email,
    birthday: data.birthday
  }))
  .then(token => {
    res.json({
      token
    })
  })
}

module.exports = {
  register,
  login
}

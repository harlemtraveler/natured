const tokenService = require('../services/token');
const authDb = require('../models/auth');

function register(req, res) {
  authDb.register(req.body)
  .catch(err => res.status(401).json({
    message: err.message
  }))
  .then(data => tokenService.makeToken({
    id: data.id,
    username: data.username,
    email: data.email,
  }))
  .then(token => {
    res.json({
      token
    })
  });
}

function login(req, res) {
  authDb.login(req.body)
  .catch(err => res.status(401).json({
    status: 'Error',
    message: 'Email or password is incorrect'
  }))
  .then(data => tokenService.makeToken({
    id: data.id,
    username: data.username,
    email: data.email
  }))
  .then(token => {
    res.json({
      token
    })
  })
}

function receiveToken(req, res, next) {
  if(req.headers.authorization) {
    req.authToken = req.headers.authorization.replace(/^Bearer\s/, '');
  }
  next();
}

function restrict(req, res, next) {
  tokenService.verify(req.authToken)
  .then(data => {
    res.locals.user = data;
    next();
  })
  .catch(err => res.status(401).json({
    status: 'Error',
    message: 'Invalid email or password'
  }))
}

function updateUser(req, res, next) {
  authDb.updateUser(req.body)
  .catch(err => res.status(401).json({
    status: 'Error',
    message: 'Username and email wer\'e not updated'
  }))
  .then(data => tokenService.makeToken({
    id: data.id,
    username: data.username,
    email: data.email
  }))
  .then(token => {
    res.json({
      token
    })
  })
}

module.exports = {
  register,
  login,
  receiveToken,
  restrict,
  updateUser
}

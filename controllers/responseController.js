function sendStatus(req, res) {
  res.status(200).json({
    status: 'ok',
    products: res.locals.products
  })
}

function sendError(err, req, res, next) {
  res.status(500).json({
    status: 'error',
    message: err.message
  })
}

module.exports = {
  sendStatus,
  sendError
}

const router = require('express').Router();

const cartController = require('../controllers/cartController');
const responseController = require('../controllers/responseController');

router.route('/:id')
  .get(
    cartController.getCartItems,
    responseController.sendStatus,
    responseController.sendError
  )
  .post(
    cartController.addToCart,
    responseController.sendStatus,
    responseController.sendError
  )

router.route('/:id/:productId')
  .put(
    cartController.editCart,
    responseController.sendStatus,
    responseController.sendError
  )
  .delete(
    cartController.deleteFromCart,
    responseController.sendStatus,
    responseController.sendError
  )

module.exports = router;


const router = require('express').Router();

const productsController = require('../controllers/productsController');
const responseController = require('../controllers/responseController');

router.route('/')
  .get(
    productsController.getAllProducts,
    responseController.sendStatus,
    responseController.sendError
  )

router.route('/recommended')
  .get(
    productsController.getRecommendedProducts,
    responseController.sendStatus,
    responseController.sendError
  )

router.route('/:id')
  .get(
    productsController.getOneProduct,
    responseController.sendStatus,
    responseController.sendError
  )

module.exports = router;

const router = require('express').Router();

const categoriesController = require('../controllers/categoriesController');
const responseController = require('../controllers/responseController');

router.route('/')
  .get(
    categoriesController.getAllCategories,
    responseController.sendStatus,
    responseController.sendError
  )

module.exports = router;

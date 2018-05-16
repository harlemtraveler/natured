const router = require('express').Router();

const statesController = require('../controllers/statesController');
const responseController = require('../controllers/responseController');

router.route('/')
  .get(
    statesController.getStates,
    responseController.sendStatus,
    responseController.sendError
  )

module.exports = router;

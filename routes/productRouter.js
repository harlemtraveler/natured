const router = require('express').Router();

router.route('/')
  .get((req, res) => res.send('This is the new home page'))

module.exports = router;

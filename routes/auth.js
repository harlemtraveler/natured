const router = require('express').Router();

const authController = require('../controllers/authController');

router.route('/').get(
    authController.restrict,
    (req, res) => res.json({
      user: res.locals.contents
    })
  )
router.route('/register').post(authController.register)
router.route('/login').post(authController.login)
router.route('/update').post(authController.updateUser)

module.exports = router;

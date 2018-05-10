const router = require('express').Router();

const productRouter = require('./product');
const authRouter = require('./auth');
const categoryRouter = require('./category')

router.use('/products', productRouter);
router.use('/auth', authRouter);
router.use('/categories', categoryRouter);

module.exports = router;

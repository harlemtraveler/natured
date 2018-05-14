const router = require('express').Router();

const productRouter = require('./product');
const authRouter = require('./auth');
const categoryRouter = require('./category');
const cartRouter = require('./cart');

router.use('/products', productRouter);
router.use('/auth', authRouter);
router.use('/categories', categoryRouter);
router.use('/cart', cartRouter);

module.exports = router;

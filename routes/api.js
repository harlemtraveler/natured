const router = require('express').Router();

const productRouter = require('./product');
const authRouter = require('./auth');
const categoryRouter = require('./category');
const cartRouter = require('./cart');
const statesRouter = require('./states');

router.use('/products', productRouter);
router.use('/auth', authRouter);
router.use('/categories', categoryRouter);
router.use('/cart', cartRouter);
router.use('/states', statesRouter);

module.exports = router;

const router = require('express').Router();
const productsRouter = require('./product.routes');

router.use('/products', productsRouter);

module.exports = router;
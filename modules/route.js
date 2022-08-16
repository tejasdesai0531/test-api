var express = require('express');
var router = express.Router();
const productRouter = require('./products/product.route')
const bookRouter = require('./books/book.route')
const commonRouter = require('./common/common.route')

router.use('/product', productRouter)
router.use('/book', bookRouter)
router.use('/common', commonRouter)

module.exports = router;
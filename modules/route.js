var express = require('express');
var router = express.Router();
const productRouter = require('./products/product.route')
const bookRouter = require('./books/book.route')

router.use('/product', productRouter)
router.use('/book', bookRouter)

module.exports = router;
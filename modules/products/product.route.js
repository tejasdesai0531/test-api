var express = require('express');
var router = express.Router();

const productController = require('./product.controller')

router.get('/', productController.getProductList)



module.exports = router;

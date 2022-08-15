var express = require('express');
var router = express.Router();

const controller = require('./book.controller')

router.get('/', controller.getList)



module.exports = router;

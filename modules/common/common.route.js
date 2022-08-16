var express = require('express');
var router = express.Router();

const controller = require('./common.controller')

router.get('/restaurant', controller.getList)



module.exports = router;

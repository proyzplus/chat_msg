var express = require('express');
var router = express.Router();
var cate = require("../controllers/cateController");


/* GET home page. */
router.get('/login', cate.getUserList);

module.exports = router;

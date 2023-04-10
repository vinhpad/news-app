const express = require('express');
const router = express.Router();
const { get_detail } = require('../controller/category');
router.get('/',get_detail);
module.exports = router;
